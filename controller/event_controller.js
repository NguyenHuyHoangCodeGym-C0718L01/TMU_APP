var sequelize = require('sequelize');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var {Events, Info, News, Place} = require('./models/cofig/sequelize');

exports.getGlobalEvents = (req, res) =>{
  Events.findAll({
    where:{

    }
  }).then(events => res.json(events));
};
