
var utils = {};


utils.replace = function(term){
  return term.replace(/[\s'-+/".,]/g, "")
}




module.exports = utils;
