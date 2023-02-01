const express = require("express");
const morgan = require("morgan");
const routes = require('../src/routes/routes')
const app = express();
const cors = require('cors')

const port = 4000;
app.listen(port);

/* app.use(cors())
app.use(morgan('dev')) */

app.use(express.json());
app.use(routes)
app.use(express.urlencoded({extended:false}))

console.log(`server oon port ${port}`);
