require("dotenv").config();
const Model = require('../models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

module.exports = {
    get : async (req,res) =>{
        const user = await Model.findAll();

      res.json({user});
     },

    post : async (req,res)=>{
        const {name,email,password,confirmpassword} =  req.body
        
        if(!name){
            return res.status(422).json({msg: "O NOME É OBRIGATORIO"})
        }
        if(!email){
            return res.status(422).json({msg: "O NOME É OBRIGATORIO"})
        }
        if(!password){
            return res.status(422).json({msg: "O NOME É OBRIGATORIO"})
        }
        if(password !== confirmpassword){
            return res.status(422).json({msg: "Senhas não conferem"})
        }
        // password create

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt)

        try{

            const usersave = await Model.create({name, email, password:passwordHash, confirmpassword:passwordHash})
            res.json(usersave)

        }catch (error){
            console.log(error)
            res.status(500).json({msg: "ERRO NO SERVIDOR, TENTE NOVAMENTE MAIS TARDE!"})
        }
    },
    postLogin :async (req,res)=>{
        const {email,password} = req.body;
        if(!email){
            return res.status(422).json({msg: "O Email É OBRIGATORIO"})
        }
        if(!password){
            return res.status(422).json({msg: "O Senha É OBRIGATORIO"})
        }

        const user = await Model.findOne({where:{email:email}})

        if(!user) {
            return res.status(404).json({msg: "EMAIL NÃO CADASTRADO"})
        }
        const checkPassword = await bcrypt.compare(password,user.password)
        if(!checkPassword){
            return res.status(422).json({msg: "Senha inválida"})
        }
        try{
            const secret = process.env.SECRET
            const token = jwt.sign({
                id: user._id
            
            },
            secret,
            )
            res.status(200).json({msg:"AUTENTIFICAÇÃO DO TOKEN COM SUCESSO", token })
        }catch(error){
            console.log(error)
            res.status(500).json({msg: "ERRO NO SERVIDOR, TENTE NOVAMENTE MAIS TARDE!"})            
        }

    },
    getId : async (req,res)=>{
        const {id} = req.params
        const user = await Model.findOne({where:{id:id}})

        if(!user){
            return res.status(440).json({msg: "usuario não encontrado"})
        }
        res.json(user)


    }

}
