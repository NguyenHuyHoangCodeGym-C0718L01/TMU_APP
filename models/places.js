const sequelize = require('sequelize');

module.exports = (sequelize, type) =>{
  return sequelize.define('place', {
    idPlace: {
      type: type.INTEGER NOT NULL,
      primaryKey: true
    },
    name: type.STRING NULL,
    idEvent: {
      type: type.INTEGER NOT NULL,
      primaryKey: true
    },
    idInfo: {
      type: type.INTEGER NOT NULL,
      primaryKey: true
    },
    idBeacon: type.STRING NULL,
    idGPS: type.STRING NULL
  })
}
