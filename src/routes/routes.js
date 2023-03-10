const {Router}= require('express')
const router = Router()

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    stockProduct
  } = require("../controllers/controllers");

  router.get("/products", getProducts);
router.get("/products/stock", stockProduct);
router.get("/products/:id", getProduct);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);


module.exports= router