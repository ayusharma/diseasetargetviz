/*
 * diseasetargetviz
 * https://github.com/ayushsharma/diseasetargetviz
 *
 * Copyright (c) 2016 ayushsharma
 * Licensed under the MIT license.
 */

'use strict';


var arch = require('./architecture'),
    viz  = require('./viz')

var diseasetargetviz = function (config) {


  // console.log(config);
  arch(config);

};

module.exports = diseasetargetviz;
