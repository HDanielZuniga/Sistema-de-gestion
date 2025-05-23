// models/User.js

module.exports = (sequelize, DataTypes) => {
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

  // Relación 1:N con Events
  User.associate = function(models) {
    User.hasMany(models.Event, {
      foreignKey: 'userId',
      as: 'eventos'
    });
  };

  return User;
};
