var d3 = require('d3');
var viz = require('./viz');
var cttvRestApi = require("cttv.api");



var filters = function(data){



  var  datatypes = [];
  var selected_datatypes = [];



  data.map(function(k){
    k.facets.datatypes.buckets.map(function(p){
      if(datatypes.map(_.property('key')).indexOf(p.key) < 0 ){
        var datatypes_obj = {};
        datatypes_obj['key'] = p.key;
        datatypes_obj['count'] = p.doc_count;
        datatypes_obj['value'] = false;
        datatypes.push(datatypes_obj)
      } else {
        var m = _.find(datatypes,function(o){
          return o.key === p.key
        })
        m.count = m.count + p.doc_count
      }
    })
  })

  var filters = d3.select(".target-disease-filter").selectAll("span")
                .data(datatypes)
                .enter()
                .append("span")
                .html(function(d){
                  return "<input type='checkbox' class='filter-checkbox' value="+d.value+"> "+d.key+" "+d.count+"<br>"
                })
                .on('change',function(d){
                  var inv = this.childNodes[0].value
                  if ( inv === 'false'){
                      this.childNodes[0].value = 'true';
                      selected_datatypes.push(d.key)
                  } else {
                    inv = 'false';
                    selected_datatypes.pop(d.key)
                  }

                  diseasetargetviz.getData(selected_datatypes)

                })
              }

module.exports = filters;
