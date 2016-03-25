/*
 * diseasetargetviz
 * https://github.com/ayushsharma/diseasetargetviz
 *
 * Copyright (c) 2016 ayushsharma
 * Licensed under the MIT license.
 */

'use strict';

global.$ = require('jquery');
var arch = require('./architecture'),
    viz  = require('./viz'),
    restapi = require('./restapi'),
    filters = require('./filters');

var diseasetargetviz = function (config) {


  var selected_datatypes = config.datatypes;
  var diseases = config.disease;
  var selected_diseases = [];
  var selected_pathways = [];

  $('#'+config.dom.viz+',#'+config.dom.filter+',#'+config.dom.pathway).html("Loading...")

  config.disease.map(function (argument) {
     if(argument.value==="true"){
      selected_diseases.push(argument);
     }
  })
  /*
    Setting DOM for visualizatons: Configuration has the IDs of divisions in which
    visualization has to be drawn.
  */


  /*
  Call the cttv.api rest module and make linear calls to CTTV APIs, Complete the
  promise and draw the visualization along with filters.
  */
  restapi(selected_diseases,selected_datatypes,selected_pathways).then(function(resp){
    $('#'+config.dom.viz+',#'+config.dom.filter+',#'+config.dom.pathway).html("");
    arch(config);
    viz(resp);
    filters(resp,diseases,selected_datatypes,selected_diseases);
    console.log(resp)
  });


};

module.exports = diseasetargetviz;
