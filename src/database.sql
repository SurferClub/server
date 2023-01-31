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

