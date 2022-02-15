const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ticket extends Model {}

Ticket.init(
  {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ticketNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
      },
      seatNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
      },
      dateOfTravel: {
        type: DataTypes.DATE,
        allowNull: false,
       
      }
    },  
    {
        sequelize,
      }  
);

module.exports = Ticket
