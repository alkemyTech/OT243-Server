'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      Comment.belongsTo(models.News, {
        foreignKey: 'newsId'
      });
    }
    }
  Comment.init({
    user_id: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    post_id: DataTypes.INTEGER,
    deleteAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comment',
    paranoid:true
  });
  return Comment;
};