const { Model, DataTypes} = require('sequelize');

class adms extends Model {
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            numero:DataTypes.INTEGER,
            cargo:DataTypes.STRING,
            setor:DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = adms;