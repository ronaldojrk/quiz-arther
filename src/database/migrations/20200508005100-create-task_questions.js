'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('task_questions', { 
      id:{
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

      },

      task_id: {
        type: Sequelize.INTEGER ,
        allowNull: false,
        references:{model:'tasks', key :'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      question_id: {
        type: Sequelize.INTEGER ,
        allowNull: false,
        references:{model:'questions', key :'id'},
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
    return queryInterface.dropTable('task_questions');
  }
};

