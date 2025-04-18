// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Este es el objeto conectado

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'Users', // Importante para que coincida con la migración
  timestamps: true,
});

module.exports = User;
