module.exports = function(app){
  var infoPlaceHandler = require('./controller/info_place_controller.js');

  app.route('/info/get_info_place').get(infoPlaceHandler.getInfoPlace);
};
