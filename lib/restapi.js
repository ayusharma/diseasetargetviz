var cttvRestApi = require("cttv.api");
var Promise = require('es6-promise').Promise;
var cttvRestHandler = cttvRestApi().prefix("https://www.targetvalidation.org/api/latest/")


var restapi = function(diseases,selected_datatypes,selected_pathways){

      return new Promise(function(resolve,reject){
        var data = [];
        diseases.names.map(function(x,i){
          var url_obj = {}
          url_obj["disease"] = x.code;

          if (selected_datatypes.length)
            url_obj["filterbydatatype"] = selected_datatypes;

          if (selected_pathways.length)
            url_obj["filterbypathway"] = selected_pathways;

          var url = cttvRestHandler.url.associations(url_obj);

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
