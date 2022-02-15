const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Train extends Model {}

Train.init(
  {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      trainNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
      },
      seatNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
      },
      food: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },  
    {
        sequelize,
      }  
);

module.exports = Train
