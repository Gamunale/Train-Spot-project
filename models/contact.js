const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Contact extends Model {}

Contact.init(
  {
    username: {
        type: DataTypes.STRING,
        allowNull: false
      },
     phone_no: {
       type: DataTypes.INTEGER,
       allowNull: false
     }
    }, 
    {
      sequelize,
    }   
);

module.exports = Contact
