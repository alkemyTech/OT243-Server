'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', [{
      name: 'Peter Punck',
      phone: '+5493517735484',
      email: 'snreynoso@gmail.com',
      message: 'Hola pa!',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
