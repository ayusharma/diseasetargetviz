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

  // var conf = {
  //   "disease_url" : "https://www.targetvalidation.org/api/latest/association?disease=",
  //   "target_url"  : ""
  // }
  //
  // var diseases = {};
  // var data = [];
  //
  // diseases['names'] = [
  //       {"name":"Familial cold urticaria","code":"Orphanet_47045"},
  //       {"name":"Asthma","code":"EFO_0000270"},
  //       {"name":"Heart Failure","code":"EFO_0003144"},
  //       {"name":"Blood Pressure","code":"EFO_0004325"},
  // ]
  //
  // diseases.names.map(function(x,i){-
  //   $.get(conf.disease_url+x.code,function(resp){
  //     data.push(resp)
  //     viz(data);
  //   })
  // });


  //
  var cttvRestHandler = cttvRestApi().prefix("https://www.targetvalidation.org/api/latest/")

  var url = cttvRestHandler.url.associations({disease:"EFO_0000270"});
  console.log(cttvRestHandler.url)


  var diseaseData = cttvRestHandler.call(url).then(function (resp) {
    console.log(resp);
    return resp;
  })

  // diseaseData.then(function(data){
  //
  // })


};

module.exports = diseasetargetviz;
