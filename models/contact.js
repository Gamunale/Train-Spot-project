const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Contact extends Model {}

Contact.init(
  {
    username: {
        type: DataTypes.STRING,
        allowNull: false
      },
     phone_no: {
       type: Datatypes.String,
       allowNull: false
     }
    }, 
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'contact',
    }   
);

module.exports = Contact
