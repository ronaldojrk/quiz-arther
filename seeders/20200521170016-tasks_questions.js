'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('task_questions', [
      {
        id: 1,
        task_id: 1,
        question_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        task_id: 1,
        question_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        task_id: 1,
        question_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        task_id: 1,
        question_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        task_id: 1,
        question_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        task_id: 1,
        question_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        task_id: 2,
        question_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        task_id: 2,
        question_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        task_id: 2,
        question_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        task_id: 2,
        question_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        task_id: 2,
        question_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        task_id: 2,
        question_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        task_id: 3,
        question_id: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        task_id: 3,
        question_id: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 15,
        task_id: 3,
        question_id: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 16,
        task_id: 3,
        question_id: 16,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 17,
        task_id: 3,
        question_id: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 18,
        task_id: 3,
        question_id: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {



    return queryInterface.bulkDelete('task_questions', null, {});

  }
};
