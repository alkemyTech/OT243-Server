'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await  queryInterface.bulkInsert('Comments', [{
        user_id: 1,
        body: 'Soy el body de un comentario',
        news_id: 1,        
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
