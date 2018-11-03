const sequelize = require('sequelize');

module.exports = (sequelize, type) =>{
  return sequelize.define('info', {
    idInfo: {
      type: type.INTEGER NOT NULL,
      primaryKey: true
    },
    text: type.TEXT NULL,
    image: type.BLOB NULL,
    video: type.BLOB NULL
  })
}
