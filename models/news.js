const sequelize = require('sequelize');

module.exports = (sequelize, type) =>{
  return sequelize.define('new', {
    idNews: {
      type: type.INT NOT NULL,
      primaryKey: true
    },
    text: type.TEXT NULL,
    link: type.TEXT NULL,
    image: type.BLOB NULL,
    upvote: type.INTEGER NULL,
    downvote: type.INTEGER NULL,
    date: type.DATE NULL,
    idUser: {
      type: type.STRING NOT NULL,
      primaryKey: true
    },
    idGroup: type.INTEGER NOT NULL,
    idType: {
      type: type.INTEGER NOT NULL,
      primaryKey: true
    }
  })
}
