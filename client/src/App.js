import { Container, Typography } from "@mui/material";
import Menu from "./components/Nav";
import ListProduct from "./components/listProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import Stock from "./components/Stock";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Menu></Menu>
        <Routes>
          <Route path="/product/new" element={<CreateProduct/>}></Route>
          <Route path="/" element={<ListProduct /> }></Route>
          <Route path="/product/:id/edit" element={<CreateProduct/>}></Route>
          <Route path="products/stock" element={<Stock/>}></Route>
          
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
