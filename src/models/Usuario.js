const { Model, DataTypes} = require('sequelize');

class usuarios extends Model {
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            email:DataTypes.STRING,
            password:DataTypes.STRING,
            confirmpassword:DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = usuarios;