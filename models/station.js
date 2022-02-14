const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Station extends Model {}

Station.init(
  {
    station_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      arival_time: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      departure_time: {
        type: DataTypes.STRING,
        allowNull: false,
       
      }
    },  
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'station',
      }  
);

module.exports = Station;
