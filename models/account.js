const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Account extends Model {}

Account.init(
  {
    username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
      }
    },  
    {
      sequelize,
    }  
);

module.exports = Account
