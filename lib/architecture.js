
var architecture = function(config){

  var div = document.createElement('div');
  var parentViz = document.getElementById(config.vislualization.id)
  parentViz.appendChild(div).className = "target-disease-viz"


  var div = document.createElement('div');
  var parentFilters = document.getElementById(config.filters.id)
  parentFilters.appendChild(div).className = "target-disease-filter"



}

module.exports = architecture;
