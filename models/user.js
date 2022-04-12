'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Truck, { 
        foreignKey: 'userId', 
        as: 'trucks',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      User.hasMany(models.Review, {
        foreignKey: 'userId',
        as: 'reviews',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};