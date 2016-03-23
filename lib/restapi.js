var cttvRestApi = require("cttv.api");
var Promise = require('es6-promise').Promise;
var cttvRestHandler = cttvRestApi().prefix("https://www.targetvalidation.org/api/latest/")
var data = [];

var restapi = function(diseases,selected_datatypes){

      return new Promise(function(resolve,reject){

        diseases.names.map(function(x,i){
          var url = cttvRestHandler.url.associations({disease:x.code});
          cttvRestHandler.call(url).then(function (resp) {
             data.push(resp.body)
             if(data.length === diseases['names'].length) {
                  resolve( data)
              }
          })
        })


      })
  // return new Promise(
  //   function(res,rej){
  //     diseases.names.map(function(x,i){
  //       // if(selected_datatypes) {
  //       //   var url = cttvRestHandler.url.associations({disease:x.code});
  //       // } else {
  //       //   var url = cttvRestHandler.url.associations({disease:x.code});
  //       // }
  //
  //       var diseaseData = cttvRestHandler.call(url).then(function (resp) {
  //         data.push(resp.body)
  //         res(
  //         if(data.length === diseases['names'].length) {
  //           return data;
  //         }
  //         )
  //       })
  //     })
  //   },
  //   rej(
  //   return "hello";
  //   )
  //
  // )




}

// function Deferred() {
//     var d = {};
//     d.promise = new Promise(function(resolve, reject) {
//         d.resolve = resolve;
//         d.reject = reject;
//     });
//     return d;
// }


// function readFile(filename, enc){
//   return new Promise(function (fulfill, reject){
//     fs.readFile(filename, enc, function (err, res){
//       if (err) reject(err);
//       else fulfill(res);
//     });
//   });
// }

module.exports = restapi;
