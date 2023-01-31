const {Pool} = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'password',
    database: 'inventariosdb',
    port:'5432',
})

module.exports = {
    pool
}