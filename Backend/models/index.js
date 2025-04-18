// models/index.js
const sequelize = require('../config/database');
const User = require('./User');

const db = {};
db.sequelize = sequelize;
db.User = User;

module.exports = db;
