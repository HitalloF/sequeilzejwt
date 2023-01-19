const Model = require('../../models/ControleInterno/ModelControleInterno')


module.exports = {

    

    get : async (req,res)=>{
        const data = await Model.findAll();
        res.status(200).json(data)
    },

    post : async (req,res) =>{

        const {oficio, asssunto, setor} = req.body
        const anexo = req.file.path
       
        try{
       
            const filesave = await Model.create({oficio,setor,asssunto,anexo})
            res.status(200).json(filesave)
        }catch(err){
            console.log(err)    
            res.status(500).json({msg: "ERRO NO SERVIDOR, TENTE NOVAMENTE MAIS TARDE!"})
            console.log(oficio,anexo,asssunto,setor)

        }        
    }


}