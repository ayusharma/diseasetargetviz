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

  var diseases = {},
      data = [],
      selected_datatypes = [];

  diseases['names'] = config.disease;

  /*
    Setting DOM for visualizatons: Configuration has the IDs of divisions in which
    visualization has to be drawn.
  */
  arch(config)

  /*
  Call the cttv.api rest module and make linear calls to CTTV APIs, Complete the
  promise and draw the visualization along with filters.
  */
  restapi(diseases,selected_datatypes).then(function(resp){
    viz(resp)
    filters(resp,diseases);
  });


};

module.exports = diseasetargetviz;
