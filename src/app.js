require("dotenv").config();
const express = require('express')
const bodyParser = require("body-parser");


const app = express();
const Router = require("./routes/router")
const UsuarioRouter = require('./routes/UsuarioRoute')
const bcrypt = require('bcrypt')


app.use(bodyParser.json());
require('./database') // iniciando database

app.use(UsuarioRouter)
app.use(Router)


app.listen(3000)