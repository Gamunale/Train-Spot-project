const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Train extends Model {}

Train.init(
  {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      train_no: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      seat_no: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      food: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },  
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'train',
      }  
);

module.exports = Train;
