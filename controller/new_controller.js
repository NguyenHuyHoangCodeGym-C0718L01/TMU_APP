var sequelize = require('sequelize');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var {Events, Info, News, Place} = require('./models/cofig/sequelize');

exports.getGlobalNews = (req, res) =>{
  News.findAll({
    where:{

    }
  }).then(news => res.json(news));
};
