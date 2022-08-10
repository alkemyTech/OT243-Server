'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await  queryInterface.bulkInsert('Slides', [{
      imageUrl: 'https://picsum.photos/200/300?grayscale',
      text: 'Slide 1',
      order: 2,
      organizationId: 1,
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
