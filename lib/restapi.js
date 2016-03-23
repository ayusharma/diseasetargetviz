var cttvRestApi = require("cttv.api");
var cttvRestHandler = cttvRestApi().prefix("https://www.targetvalidation.org/api/latest/")


var restapi = function(diseases,selected_datatypes){
  var data = [];
  var k = diseases.names.map(function(x,i){
    if(selected_datatypes) {
      var url = cttvRestHandler.url.associations({disease:x.code});
    } else {
      var url = cttvRestHandler.url.associations({disease:x.code});
    }

    var diseaseData = cttvRestHandler.call(url).then(function (resp) {
      data.push(resp.body)
      if(data.length === diseases['names'].length) {
        return data;
      }

    })
  });

  return k;

}

module.exports = restapi;
