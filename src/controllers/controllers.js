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

const createProduct = async (req, res, next) => {
  try {
    const { nombre, marca, valor, fecha } = req.body;

    const response = await pool.query(
      "INSERT INTO inventario (nombre,marca,valor, fecha) VALUES ($1,$2,$3,$4)",
      [nombre, marca, valor, fecha]
    );
    console.log(response.rows);
    res.json({
      body: {
        user: {
          nombre,
          marca,
          valor,
          fecha,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};
const updateProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const {fecha} = req.body
  const { nombre, marca, valor } = req.body;
  
   const response = await pool.query(
    "UPDATE inventario SET nombre = $1, marca = $2, valor= $3, fecha=$4 WHERE id = $5",
    [nombre, marca, valor, fecha , id]
  );
  console.log(response.rows)
};
const deleteProduct = async (req, res) => {
  const id = parseInt(req.params.id)
  console.log(id)

  await pool.query('DELETE FROM inventario where id = $1',[id])
  res.json('delete succesfull')

};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
