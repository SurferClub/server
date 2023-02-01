CREATE DATABASE inventariosdb;

\l

\c inventariosdb;

CREATE TABLE inventario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40) UNIQUE,
    marca VARCHAR(255),
    valor numeric (20 , 2),
    fecha time  
);

INSERT INTO inventario (nombre, marca, valor, fecha)
    VALUES ('jabon', 'jhonson&jhonson', 2000, now()),
    ('caramelo', 'losCaramelos', 1000 , now())
    ;

select * from inventario;
////
//// consulta para listar todos los datos de la tabla 
SELECT * FROM  inventario ORDER BY id ASC
////
//// consulta para listar un dato
SELECT * FROM inventario WHERE id= $1
////
//// insertar datos mediante una pool query de psql
INSERT INTO inventario (nombre,marca,valor, fecha) VALUES ($1,$2,$3,$4)
////
//// actualizar datos de una tabla mediante pslq
UPDATE inventario SET nombre = $1, marca = $2, valor= $3, fecha=$4 WHERE id = $5
////
//// eliminar datos para un dato de una tabla 
DELETE FROM inventario where id = $1