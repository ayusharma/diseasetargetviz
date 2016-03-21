// global.jQuery = require('jquery');
// var bootstrap = require('bootstrap');

var architecture = function(config){

  var div = document.createElement('div');

  //setting up a row element
  var parent = document.getElementById(config.id).appendChild(div);
  parent.className = "target-disease-viz"



  //setting up a left column element
  // parent.innerHTML = '<div class="col-md-12"></div>'


}

module.exports = architecture;
