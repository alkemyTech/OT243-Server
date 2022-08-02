'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */ 
    await queryInterface.bulkInsert("Categories", [{
        name:"algo",
        description:"categoria de ejemplo",
        image:"https://ayudaenaccion.org/uploads/2022/02/RS12046_IMG-20190508-WA0002.jpg",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name:"algo2",
        description:"categoria de ejemplo2",
        image:"https://ayudaenaccion.org/uploads/2022/02/RS12046_IMG-20190508-WA0002.jpg",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
