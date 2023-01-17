const Sequelize = require('sequelize');
const configDB = require('../config/database');
const Model = require('../models/AdmModel')
const UsuarioModel = require("../models/Usuario")
const connection = new Sequelize(configDB);


Model.init(connection)
UsuarioModel.init(connection)





module.exports = connection