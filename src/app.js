const express = require("express");
const {Router}= require('express')
const router = Router()
const app = express();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/controllers.js");
const port = 4000;
app.listen(port);

//app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))


router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProduct);
router.put("/products/:id");
router.delete("/products/:id");

console.log(`server oon port ${port}`);
