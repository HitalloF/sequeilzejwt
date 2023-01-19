const { Model, DataTypes} = require('sequelize');

class controleArquivos extends Model {
    static init(sequelize){
        super.init({
            oficio:DataTypes.INTEGER,
            setor:DataTypes.STRING,
            asssunto:DataTypes.STRING,
            anexo:DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = controleArquivos;