'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {

     return queryInterface.createTable('adms', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      setor: {
        type: Sequelize.STRING,
        allowNull: false
      },

    });
   
  },

   down (queryInterface, Sequelize) {

     return queryInterface.dropTable('adms');
  
  }
};