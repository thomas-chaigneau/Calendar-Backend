'use strict';
module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    startingDate: DataTypes.STRING,
    endingDate: DataTypes.STRING,
    frequency: DataTypes.STRING,
    daysSelected: DataTypes.STRING,
    contact: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {});
  Events.associate = function(models) {
    // associations can be defined here
  };
  return Events;
};