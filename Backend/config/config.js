require('dotenv').config(); // ESTA LÍNEA ES FUNDAMENTAL

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,     // eventos_system
  process.env.DB_USER,     // postgres
  process.env.DB_PASS,     // admin
  {
    host: process.env.DB_HOST, // localhost
    dialect: 'postgres',
  }
);

module.exports = sequelize;
