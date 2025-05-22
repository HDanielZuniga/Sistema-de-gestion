require('dotenv').config(); // ← ¡IMPORTANTE! Activa la lectura del archivo .env

const sequelize = require('./config/database');

sequelize.authenticate()
  .then(() => {
    console.log(' Conexión establecida con PostgreSQL');
  })
  .catch((error) => {
    console.error(' Error al conectar con PostgreSQL:', error);
  });
