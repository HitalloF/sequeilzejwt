const Model = require('../../models/ControleInterno/ModelControleInterno')

module.exports = {

    get : async (req,res)=>{
        const data = await Model.findAll();
        res.status(200).json(data)
    },

    post : async (req,res) =>{
        
        const {oficio, setor, asssunto, anexo} = req.body
        
        if(!oficio){
            return res.status(422).json({msg: "O OFICIO E OBRIGATORIO"})
        }
        if(!setor){
            return res.status(422).json({msg: "O SETOR É OBRIGATORIO"})
        }
        if(!asssunto){
            return res.status(422).json({msg: "O ANEXO É OBRIGATORIO"})
        }
        if(!anexo){
            return res.status(422).json({msg: "O ANEXO É OBRIGATORIO"})
        }


    }


}