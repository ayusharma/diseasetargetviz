var cttvRestApi = require("cttv.api");
var Promise = require('es6-promise').Promise;
var cttvRestHandler = cttvRestApi().prefix("https://www.targetvalidation.org/api/latest/")


var restapi = function(diseases,selected_datatypes){

      return new Promise(function(resolve,reject){
        var data = [];
        diseases.names.map(function(x,i){
          if(selected_datatypes.length) {
            var url = cttvRestHandler.url.associations({disease:x.code,filterbydatatype:selected_datatypes});
          } else {
            var url = cttvRestHandler.url.associations({disease:x.code});
          }
          cttvRestHandler.call(url).then(function (resp) {
             data.push(resp.body)
             if(data.length === diseases['names'].length) {
                  resolve(data)
              }
          })
        })
      })

}

module.exports = restapi;
