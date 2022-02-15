const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Station extends Model {}

Station.init(
  {
    stationName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      arivalTime: {
        type: DataTypes.TIME,
        allowNull: false,
       
      },
      departureTime: {
        type: DataTypes.TIME,
        allowNull: false,
       
      }
    },  
    {
        sequelize,
      }  
);

module.exports = Station;
