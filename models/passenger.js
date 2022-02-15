const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Passenger extends Model {}

Passenger.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      phoneNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ticketNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },  
    {
        sequelize,
      }  
);

module.exports = Passenger
