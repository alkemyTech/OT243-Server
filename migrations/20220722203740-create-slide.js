'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('organizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,  
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,  
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deleteAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('slides');

  }
};
