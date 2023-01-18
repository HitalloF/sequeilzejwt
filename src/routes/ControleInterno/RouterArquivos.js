const express = require('express');
const router = express.Router();
const Controller = require('../../controller/ControleInterno/ControllerArquivos')

router.get('/controleinterno/arquivos', Controller.get)

module.exports = router;
