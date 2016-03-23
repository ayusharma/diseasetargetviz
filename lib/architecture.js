
var architecture = function(config){



    var div = document.createElement('div');
    var parentViz = document.getElementById(config.dom.viz)
    if(parentViz)
      parentViz.appendChild(div).className = "target-disease-viz"
    else
      alert("Check config")


    var div = document.createElement('div');
    var parentFilters = document.getElementById(config.dom.filter)
    if(parentFilters)
    parentFilters.appendChild(div).className = "datatypes-filter"
    else
      alert("Check config")


}

module.exports = architecture;
