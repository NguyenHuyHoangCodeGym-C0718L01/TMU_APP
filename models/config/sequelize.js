const sequelize = require('sequelize');
const eventModel = require('./models/events');
const infoModel = require('./models/infos');
const newModel = require('./models/news');
const placeModel = require('./models/places');

const sequelizeConnection = new sequelize('TEST', 'root', 'ironman1969', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Events = eventModel(sequelizeConnection, sequelize);
const Info = infoModel(sequelizeConnection, sequelize);
const News = newModel(sequelizeConnection, sequelize);
const Place = placeModel(sequelizeConnection, sequelize);

sequelizeConnection.sync({force: true}).then(()=>{
  console.log('Database connected');
});

module.exports ={
  Events,
  Info,
  News,
  Place
}
