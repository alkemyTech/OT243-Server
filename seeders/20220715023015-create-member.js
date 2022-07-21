'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Members', [{
        name: 'MemTest',
        facebookUrl: 'https://www.facebook.com/',
        instagramUrl: 'https://www.instagram.com/',
        linkedinUrl:'https://www.linkedin.com/',
        image: 'https://picsum.photos/200/300',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text' ,
        createdAt: new Date,
        updatedAt: new Date
    }], {});
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
