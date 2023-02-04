import { useState, useEffect } from "react";
import { Typography, Card, CardContent,Button } from "@mui/material";

export default function ListProduct() {
  const [products, setProducts] = useState([]);

  const loadProduct = async () => {
    const response = await fetch("http://localhost:4000/products");
    
    const data = await response.json();
    
    setProducts(data);
  };

  useEffect(() => {
    loadProduct();
  }, []);
  return (
    <>
      <h1>List Products</h1>

      {products.map((product) => (
        <Card
        style={{backgroundColor: "#1e272e"}}
        key={product.id}
        
        >
          <CardContent
          style={{display:"flex"}}
          >
            <div style={{
                color: "white",
                
            }}>
                <Typography>{product.nombre} </Typography>
              <Typography>{product.marca}</Typography>
              <Typography>{product.valor}</Typography>
              <Typography>{product.fecha}</Typography>
            </div>
            <div>
                <Button 
                variant="contained"
                color="inherit"
                onClick={()=> console.log("first click")}
                >
                    edit
                </Button>
                <Button 
                variant="contained"
                color="warning"
                onClick={()=> console.log("first click")}
                >
                    delete
                </Button>

            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
