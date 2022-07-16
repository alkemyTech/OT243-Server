'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Testimonials', [
      {
        name: 'John Doe',
        image: 'Johns avatar',
        content: 'Johns content',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Sergio Denis',
        image: 'Sergio avatar',
        content: 'Sergio content',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
