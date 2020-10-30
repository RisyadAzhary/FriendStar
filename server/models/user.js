'use strict';
const { hashPassword } =  require("../helpers/bcrypt")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Tweet)
    }
  };
  User.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please input first name'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please input first name'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please input last name'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please input last name'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please input username'
      },
      unique: {
        args: true,
        msg: 'Username already in use'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please input username'
        },
        notContains: {
          args: ' ',
          msg: "username can't contain space"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please input email'
      },
      unique: {
        args: true,
        msg: 'Email already in use'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Email is incorrect'
        },
        notEmpty: {
          args: true,
          msg: 'Please input email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please input password'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please input password'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate (user, option) {
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};