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
    cttvRestApi = require("cttv.api");

var diseasetargetviz = function (config) {

  var conf = {
    "disease_url" : "https://www.targetvalidation.org/api/latest/association?disease=",
    "target_url"  : ""
  }

  var diseases = {};
  var data = [];

  diseases['names'] = [
        {"name":"Familial cold urticaria","code":"Orphanet_47045"},
        {"name":"Asthma","code":"EFO_0000270"},
  ]

  diseases.names.map(function(x,i){-
    $.get(conf.disease_url+x.code,function(resp){
      data.push(resp)
      viz(data);
    })
  });


  //
  // var cttvRestHandler = cttvRestApi().prefix("https://www.targetvalidation.org/api/")
  // console.log(cttvRestHandler);
  // var url = cttvRestHandler.url.disease({"code":"EFO_0000270"});
  //

  //
  // var diseaseData = cttvRestHandler.call(url).then(function (resp) {
  //   console.log(resp)
  //   return resp;
  // })

  arch(config);

};

module.exports = diseasetargetviz;
