const express = require("express");
const morgan = require("morgan");
const routes = require('../src/routes/routes')
const app = express();
const cors = require('cors')
const fileUpload = require("express-fileupload")

const port = 4000;
app.listen(port);

/* app.use(cors())
app.use(morgan('dev')) */
app.use(cors())
app.use(express.json());
app.use(routes)
app.use(express.urlencoded({extended:false}))
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
    debug:true
}))

app.use((err,req,res,next)=> {
    return res.json({
        message: err.message
    })
})


console.log(`server oon port ${port}`);
