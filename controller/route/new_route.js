module.exports = function(app){
  var newHandler = require('./controller/new_controller.js');

  app.route('/new/get_global').get(newHandler.getGlobalNews);
};
