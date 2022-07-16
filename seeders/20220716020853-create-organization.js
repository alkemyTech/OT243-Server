'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await  queryInterface.bulkInsert('Organizations', [{
      name: 'John',
      image: 'https://picsum.photos/200/300?grayscale',
      address: 'uruguay 270',
      phone:'11-1122334455',
      email:'example@example.com',
      welcomeText:'Bienvenido  a nuestro mundo',
      aboutUsText:'Somos blablabla',
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
