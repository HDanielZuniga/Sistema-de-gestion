// config/database.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(' Conexión a la base de datos exitosa.');
    await sequelize.sync({ alter: true });
    console.log(' Modelos sincronizados.');
  } catch (error) {
    console.error(' Error al conectar a la base de datos:', error);
    throw error;
  }
};

//  Exportar ambos de forma correcta
module.exports = {
  connectDB,
  sequelize
};
