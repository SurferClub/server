/////------------------------------
/////  crear database para psql */
CREATE DATABASE inventariosdb;

\l  ////  listar dbs de psql   */   

\c inventariosdb; ///// /*  cambio de database  */
//////--------------------------------------
//////  crear tabla  */
CREATE TABLE inventario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40) UNIQUE,
    marca VARCHAR(255),
    valor numeric (20 , 2),
    fecha time  
);
/////--------------------------------
/////  insertar datos para una tabla  */
INSERT INTO inventario (nombre, marca, valor, fecha)
    VALUES ('jabon', 'jhonson&jhonson', 2000, now()),
    ('caramelo', 'losCaramelos', 1000 , now())
    ;
/////---------------------------------------------
select * from inventario;
////----------------------------------------------
////  consulta para listar todos los datos de la tabla  */
SELECT * FROM  inventario ORDER BY id ASC
////----------------------------------------------
////  consulta para listar un dato */
SELECT * FROM inventario WHERE id= $1
////--------------------------------------------
////  insertar datos mediante una pool query de psql */
INSERT INTO inventario (nombre,marca,valor, fecha) VALUES ($1,$2,$3,$4)
////--------------------------------------------
////   actualizar datos de una tabla mediante pslq */
UPDATE inventario SET nombre = $1, marca = $2, valor= $3, fecha=$4 WHERE id = $5
////--------------------------------------------
////  eliminar datos para un dato de una tabla  */
DELETE FROM inventario where id = $1
////
////  se muestra la suma de los valores  */
SELECT SUM (valor) FROM inventario;
////  
////  y por marca sin nombre
SELECT SUM (valor) sumatoria marca FROM inventario GROUP BY marca;
////
////  y por marca   
SELECT marca, SUM (valor) FROM inventario GROUP BY marca;
////
////  y que la marca sea mayor a 900  
SELECT marca, SUM (valor) FROM inventario GROUP BY marca HAVING SUM(valor)>900;
////
////  
ALTER TABLE inventario ADD COLUMN linkimg VARCHAR(400);