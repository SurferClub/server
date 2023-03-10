import {Typography, CardContent, Card, } from '@mui/material'
import React from 'react'
import {useState,useEffect} from 'react'

export default function Stock() {
    const [stock, setStock] = useState(false);
    const [products, setProducts] = useState([]);

     const stockLoad = async () => {
        const response = await fetch("http://localhost:4000/products/stock");
        const data = await response.json();
        setProducts(data);
        setStock(true)
      }; 
      
      useEffect(() => {
          stockLoad()
      }, []);
  return (
    <>
      <h1>List Products in stock</h1>

      {products.map((product) => (
        <Card style={{ backgroundColor: "#1e272e" }} key={product.id}>
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
            
              
            
          </CardContent>
        </Card>
      ))}
    </>
  )
}
