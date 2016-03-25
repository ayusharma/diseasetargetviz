
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

    var div = document.createElement('div');
    var parentPathways = document.getElementById(config.dom.pathway)
    if(parentPathways)
    parentPathways.appendChild(div).className = "datatypes-pathways"
    else
      alert("Check config")

    var div = document.createElement('div');
    var parentDisease = document.getElementById(config.dom.disease)
    if(parentDisease)
    parentDisease.appendChild(div).className = "filter-diseases"
    else
      alert("Check config")


}

module.exports = architecture;
