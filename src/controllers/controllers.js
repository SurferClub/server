const { pool } = require("../db");

const getProducts = async (req, res, next) => {
  const response = await pool.query(
    "SELECT * FROM  inventario ORDER BY id ASC"
  );
  await res.status(200).json(response.rows);
};

const getProduct = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const response = await pool.query("SELECT * FROM inventario WHERE id= $1", [
    id,
  ]);
  await res.status(200).json(response.rows[0]);
};


const createProduct = async (req, res) => {
    const {nombre} = req.body
    const response = await pool.query("INSERT INTO inventario (nombre) VALUES ($1)",
        [nombre]);
        console.log(response)
    /* 
    
  console.log(nombre)
  res.json({
    body: {
      user: {
        nombre,
        marca,
        valor,
        fecha,
      },
    },
  }); */
};
const updateProduct = (req, res) => {
  console.log("actualizar de mi product");
};
const deleteProduct = (req, res) => {
  console.log("delete de mi product");
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
