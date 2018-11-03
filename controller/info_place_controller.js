var sequelize = require('sequelize');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var {Events, Info, News, Place} = require('./models/cofig/sequelize');
var express = require('express');
var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

exports.getInfoPlace = (req, res) =>{
    Place.findById(req.body.ID).then(function(err, Place){
      if(err){
        throw err;
      }
      if(!place){
        res.status(401).json({message: 'Place not found'});
      }else if(place){
        res.send(Place);
        Info.findById(Place.idInfo).then(function(Info){
          res.send(Info);
        });
      }
    });
};
