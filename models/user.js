'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    userName: DataTypes.STRING,
    passWord: DataTypes.STRING,
    screenName: DataTypes.STRING,
    status: DataTypes.INTEGER                     
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        user.belongsToMany(models.role, {
          through: 'userRole'
        });
      }
    }
  });
  return user;
};