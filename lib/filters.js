var d3 = require('d3');
var viz = require('./viz');
var cttvRestApi = require("cttv.api");
var restapi = require('./restapi');



var filters = function(data,diseases){

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
                  if ( this.childNodes[0].value === 'false'){
                      this.childNodes[0].value = 'true';
                      selected_datatypes.push(d.key)
                      restapi(diseases,selected_datatypes).then(function(resp){
                        console.log(selected_datatypes)
                        viz(resp)
                      });

                  } else {
                    this.childNodes[0].value = 'false';
                    selected_datatypes.pop(d.key)
                    restapi(diseases,selected_datatypes).then(function(resp){
                      console.log(selected_datatypes)
                      viz(resp)
                    });

                  }
                })

  // var filters = d3.select(".target-disease-filter").selectAll("input")
  //               .data(datatypes)
  //               .enter()
  //               .append('label')
  //               .attr('for',function(d,i){ return 'a'+i; })
  //               .text(function(d) { return d.key; })
  //               .append("input")
  //               .attr("type", "checkbox")
  //               .attr("value",function(d,i){
  //                 return d.value;
  //               })
  //               .attr("id", function(d,i) { return 'a'+i; })
  //               .on("change",function(d){
  //                 console.log(this.value)
  //                  var inv = this.value
  //                  if ( inv === 'false'){
  //                      inv = 'true';
  //                      selected_datatypes.push(d.key)
  //                      restapi(diseases,selected_datatypes).then(function(resp){
  //                        console.log(selected_datatypes)
  //                        viz(resp)
  //                      });
  //
  //                  } else {
  //                    inv = 'false';
  //                    selected_datatypes.pop(d.key)
  //                    restapi(diseases,selected_datatypes).then(function(resp){
  //                      console.log(selected_datatypes)
  //                      viz(resp)
  //                    });
  //
  //                  }
  //                })
              
}

module.exports = filters;
