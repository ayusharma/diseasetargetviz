var d3 = require('d3');

var viz = function(){

  var diseases = {};

  diseases['names'] = [
        {"name":"Familial cold urticaria","code":"Orphanet_47045"},
        {"name":"Asthma","code":"EFO_0000270"},
  ]



  var width = $('#rootDiv').width(),
            height = 1000000,
            margin = {top:50,bottom:100,right:50,left:50};

  var w = width-margin.left-margin.right,
      h = height-margin.top-margin.bottom;

}

module.exports = viz;
