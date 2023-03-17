import {
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateProduct() {
  const params = useParams()
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    nombre: "",
    marca: "",
    valor: "",
    fecha: ""
  });
  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    if(editing){
      fetch(`http://localhost:4000/products/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {"Content-Type": "application/json"},
      })
    }else {
      const res = await fetch(`http://localhost:4000/products`,{
        method: "POST",
        body: JSON.stringify(product),
        headers: {"Content-Type": "application/json"},
    })
    }
    // console.log(res)
    setLoading(false)
    navigate("/")
  };

  const handleUpload = async (e) => {
    console.log(e)
    await fetch('react-gallery2.s3.amazonaws.com',{
      method: "PUT"
    })
  }

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    // console.log(product)
  };

  const loadProduct = async(id)=> {
    const res = await fetch(`http://localhost:4000/products/${id}`)
    const data = await res.json()
    setProduct({nombre:data.nombre, marca:data.marca,valor:data.valor,fecha:data.fecha})
    setEditing(true)
  }

  useEffect(() => {
    if (params.id)  {
      loadProduct(params.id)
    }
  }, [params.id])
  

  return (
    <Grid container direccion="column">
      <Card sx={{ display: "block", mt: 5 }}>
        <CardContent>
          <Typography>Create Product</Typography>
          <form onSubmit={ handleSubmit}>
            <TextField
              value={product.nombre}
              name="nombre"
              sx={{ display: "block" }}
              variant="filled"
              label="nombre de producto"
              onChange={handleChange}
            ></TextField>
            <TextField
              value={product.marca}
              name="marca"
              sx={{ display: "block" }}
              variant="filled"
              label="marca de producto"
              onChange={handleChange}
            ></TextField>
            <TextField
              value={product.valor}
              name="valor"
              sx={{ display: "block" }}
              variant="filled"
              label="valor"
              onChange={handleChange}
            ></TextField>
            <TextField
              name="fecha"
              value={product.fecha}
              variant="filled"
              sx={{display: "block"}}
              label="fecha de ingreso"
              onChange={handleChange}
            ></TextField>
            <input type="file" id="file" onSubmit={handleUpload} />
            
            <Button variant="contained" color="primary" type="submit">
              SAVE
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CreateProduct;