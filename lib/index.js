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
    restapi = require('./restapi');


var filters = require('./filters');

var diseasetargetviz = function (config) {


  var diseases = {};
  var data = [];
  var selected_datatypes = [];



  //
  diseases['names'] = [
        {"name":"Familial cold urticaria","code":"Orphanet_47045"},
        // {"name":"Asthma","code":"EFO_0000270"},
  //       {"name":"Heart Failure","code":"EFO_0003144"},
  //       {"name":"Blood Pressure","code":"EFO_0004325"},
  ]

  //Settingup Arcthitechture
  arch(config)
  restapi(diseases,selected_datatypes).then(function(resp){
    console.log(resp)
    viz(resp)
    filters(resp,diseases);
  });

  //
  // function getData(selected_datatypes) {
  //
  // }

  // getData(selected_datatypes)

};

module.exports = diseasetargetviz;
