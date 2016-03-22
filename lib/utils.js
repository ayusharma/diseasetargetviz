
var utils = {};


utils.replace = function(term){
  return term.replace(/[\s'-+/".,]/g, "").toLowerCase()
}




module.exports = utils;
