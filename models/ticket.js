const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Ticket extends Model {}

Ticket.init(
  {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ticket_no: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      seat_no: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      date_of_travel: {
        type: DataTypes.STRING,
        allowNull: false,
       
      }
    },  
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'ticket',
      }  
);

module.exports = Ticket;
