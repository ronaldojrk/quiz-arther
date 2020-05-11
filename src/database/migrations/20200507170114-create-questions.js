'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', { 
      id:{
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

      },
      enunciated: {
        type: Sequelize.STRING(1234) ,
        allowNull: false,

      },
      
      alternativetrue: {
        type: Sequelize.STRING(1234) ,
        allowNull: false,

      },
      alternativea: {
        type: Sequelize.STRING(1234) ,
        allowNull: false,

      },
      alternativeb: {
        type: Sequelize.STRING(1234) ,
        allowNull: false,

      },
      alternativec: {
        type: Sequelize.STRING(1234) ,
        allowNull: false,

      },
      timelimite: {
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
    return queryInterface.dropTable('questions');
  }
};
