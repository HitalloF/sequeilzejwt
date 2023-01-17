require("dotenv").config();
const express = require('express');
const jwt = require("jsonwebtoken")
const router = express.Router();


const Controller = require('../controller/UsuarioController');

router.post('/usuario/save', Controller.post);
router.post('/login', Controller.postLogin)
router.get('/usuarios', Controller.get)

router.get('/:id',checkToken, Controller.getId)


function checkToken(req,res,next){
    authHead = req.headers['authorization']
    const token = authHead && authHead.split(" ")[1]

    if(!token){
        return res.status(401).json({msg: "ACESSO NEGADO"})
        console.log(token)
    }
    try{
        const secret =process.env.SECRET

        jwt.verify(token,secret)
        next()
        console.log(token)
    }catch(error){
        return res.status(400).json({msg:"TOKEN INCORRETO"})
    }
}


module.exports = router;    

