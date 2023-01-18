'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {

     return queryInterface.createTable('controleArquivos', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      oficio: {
        type: Sequelize.INTEGER,
        allowNull: false
      },  
      setor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      asssunto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      anexo: {
        type: Sequelize.BLOB,
        allowNull: false
      },

    });
   
  },

   down (queryInterface, Sequelize) {

     return queryInterface.dropTable('controleArquivos');
  
  }
};