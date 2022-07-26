'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Slide.belongsTo(models.organization, {
        foreignKey: 'id',
        targetKey: 'organizationId'
      })
    }
  };
  Slide.init({
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
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Slide',
    paranoid: true
  });

  return Slide;
};