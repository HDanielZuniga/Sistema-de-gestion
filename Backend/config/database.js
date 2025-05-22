// config/database.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Instancia de Sequelize que usarás en el código
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
  }
);

// Función de conexión
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
  }
};

module.exports = connectDB;
module.exports.sequelize = sequelize;
