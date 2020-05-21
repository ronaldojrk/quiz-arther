'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Zé',
        email: 'ze@gmail.com',
        password: '10',
        cash: 0,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {



    return queryInterface.bulkDelete('users', null, {});

  }
};
