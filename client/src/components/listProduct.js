import { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Container,
  CardMedia,
  Grid,
  Select,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const loadProduct = async () => {
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/products/${id}`, {
      method: "DELETE",
    });

    setProducts(products.filter((product) => product.id !== id));
  };
  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <form action="" >
        <InputLabel id="demo-simple-select-label">Buckets</InputLabel>
        <Select
          name="buckets"
          id="buckets"
          
          labelId="demo-simple-select-label"
        ></Select>
      </form>
      <h1>List Products</h1>

      {products.map((product) => (
        <Box sx={{ flexGrow: 1 }}>
          <Grid spacing={2} container>
            <Grid item xs={4}>
              <Item>
                <Card
                  sx={{ maxWidth: 450 }}
                  style={{ backgroundColor: "#1e272e" }}
                  key={product.id}
                >
                  <CardMedia
                    sx={{ height: 80 }}
                    image={product.linkimg}
                    title="img product"
                  />
                  <CardContent style={{ display: "flex" }}>
                    <div
                      style={{
                        color: "white",
                      }}
                    >
                      <Typography>{product.nombre} </Typography>
                      <Typography>{product.marca}</Typography>
                      <Typography>{product.valor}</Typography>
                      <Typography>{product.fecha}</Typography>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        color="inherit"
                        onClick={() => navigate(`/product/${product.id}/edit/`)}
                      >
                        edit
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() => handleDelete(product.id)}
                      >
                        delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
}
