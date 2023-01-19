require("dotenv").config();
require('./database') // iniciando database
const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const Router = require("./routes/router")
const UsuarioRouter = require('./routes/UsuarioRoute')
const controleinterno = require('./routes/ControleInterno/RouterArquivos')

app.use('/images', express.static('./images'))

app.use(bodyParser.json());

app.use(controleinterno)
app.use(UsuarioRouter)
app.use(Router)


app.listen(3000)