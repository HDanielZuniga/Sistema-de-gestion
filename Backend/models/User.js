// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // CORRECTO: extraemos .sequelize
const bcrypt = require('bcrypt');

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
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Encriptar antes de guardar
User.beforeCreate(async (user, options) => {
  user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;
