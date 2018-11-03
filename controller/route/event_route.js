module.exports = function(app){
  var eventHandler = require('./controller/event_controller.js');

  app.route('/event/get_global').get(eventHandler.getGlobalEvents);
};
