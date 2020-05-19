'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('records', { 
      id:{
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

      },
      pontos: {
        type: Sequelize.DOUBLE ,
        allowNull: false,

      },
      acerto: {
        type: Sequelize.INTEGER ,
        allowNull: false,

      },
      totalquest: {
        type: Sequelize.INTEGER ,
        allowNull: false,

      },
      
      user_id: {
        type: Sequelize.INTEGER ,
        allowNull: false,
        references:{model:'users', key :'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      task_id: {
        type: Sequelize.INTEGER ,
        allowNull: false,
        references:{model:'tasks', key :'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      created_at: {
        field: 'created_at',
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        field: 'updated_at',
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('records');
  }
};
