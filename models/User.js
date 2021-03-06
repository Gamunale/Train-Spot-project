const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      
      name:DataTypes.STRING,
      email:{
          type:DataTypes.STRING,
          unique:true,
          allowNull:false
      },
      password:DataTypes.STRING
    });
  
    User.beforeCreate(function(user){
        user.password = bcrypt.hashSync(user.password,bcrypt.genSaltSync(10),null);
    })
    User.associate = function(models){
        User.hasMany(models.Blog)
    }
  
    return User;
  };