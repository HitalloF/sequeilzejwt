const Model = require('../models/AdmModel')


module.exports = {
     get : async (req,res) =>{
        const adm = await Model.findAll();

      res.json({adm});
     },

     post : async (req,res)=>{
          res.json("Post")
     }
}