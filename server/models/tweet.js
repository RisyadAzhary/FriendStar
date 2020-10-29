'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tweet.belongsTo(models.User)
    }
  };
  Tweet.init({
    content: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please input tweet'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please input tweet'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Tweet',
  });
  return Tweet;
};