'use strict';
module.exports = function(sequelize, DataTypes) {
  var permission = sequelize.define('permission', {
    permissionName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return permission;
};