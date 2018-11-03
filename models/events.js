const sequelize = require('sequelize');

module.exports = (sequelize, type) =>{
  return sequelize.define('event', {
    idEvent: {
      type: type.INTEGER NOT NULL,
      primaryKey: true
    },
    name: type.TEXT NULL,
    text: type.TEXT NULL,
    startTime: type.DATE NULL,
    endTime: type.DATE NULL,
    link: type.TEXT NULL,
    image: type.BLOB NULL,
    place: type.STRING NULL,
    idUser: type.STRING NULL,
    upvote: type.INT NULL,
    downvote: type.INT NULL,
    idPlace: {
      type: type.INT NOT NULL,
      primaryKey: true
    },
    idGroup: type.INT NULL,
    idType: {
      type: type.INT NOT NULL,
      primaryKey: true
      }
  })
}
