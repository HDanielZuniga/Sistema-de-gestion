const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database').sequelize;

const db = {};

db.sequelize = sequelize;

// Importar modelos como funciones
db.User = require('./User')(sequelize, DataTypes);
db.Event = require('./Event')(sequelize, DataTypes);

// Ejecutar asociaciones si existen
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
