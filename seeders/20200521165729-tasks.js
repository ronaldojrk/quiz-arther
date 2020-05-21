'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('tasks', [
      {
        id: 1,
        title: 'Atividade de Lógica',
        description: 'Essa atividade é feita para testa sua lógica',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        title: 'Atividade de Informatica',
        description: 'Essa atividade é feita para testa seu conhecimento sobre a informatica',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        title: 'Atividade de Lógica parte 2',
        description: 'Essa atividade é feita para testa sua lógica',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {



    return queryInterface.bulkDelete('tasks', null, {});

  }
};
