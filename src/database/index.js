const Sequelize = require('sequelize');
const configDB = require('../config/database');
const Model = require('../models/AdmModel')
const UsuarioModel = require("../models/Usuario")
const ControleInternoModel = require('../models/ControleInterno/ModelControleInterno')


const connection = new Sequelize(configDB);


Model.init(connection)
UsuarioModel.init(connection)
ControleInternoModel.init(connection)




module.exports = connection