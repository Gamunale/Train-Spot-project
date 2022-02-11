const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

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
      date_of_birth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ticket_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },  
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'passenger',
      }  
);

module.exports = Passenger;
