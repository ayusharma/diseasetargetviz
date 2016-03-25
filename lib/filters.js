var d3 = require('d3');
var viz = require('./viz');
var cttvRestApi = require("cttv.api");
var restapi = require('./restapi');



var filters = function(data,diseases,selected_datatypes,selected_diseases,selected_pathways){

  console.log(data)


var selected_diseases = selected_diseases;

function datatypes_pathways(data,selected_datatypes) {

  var datatypes = [];
  var pathways = [];
  var selected_datatypes = selected_datatypes;
  var selected_pathways = [];
  //creates the datatype array
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

  //creates the pathways array
  data.map(function(k){
    k.facets.pathway_type.buckets.map(function(p){
      if(pathways.map(_.property('key')).indexOf(p.key) < 0 ){
        var pathways_obj = {};
        pathways_obj['key'] = p.key;
        pathways_obj['label'] = p.label;
        pathways_obj['count'] = p.doc_count;
        pathways_obj['value'] = false;
        pathways.push(pathways_obj)
      } else {
        var m = _.find(pathways,function(o){
          return o.key === p.key
        })
        m.count = m.count + p.doc_count
      }
    })
  })


  //check for the selected datatypes which has been defined in
  //configuration.
  selected_datatypes.map(function(mm){
    var kk = _.find(datatypes,function(o){
      return o.key === mm
    })
    kk.value = true;
  })

  d3.select(".datatypes-pathways").selectAll("span").remove();
  d3.select(".datatypes-filter").selectAll("span").remove();

  var filtersDatatypes = d3.select(".datatypes-filter").selectAll("span")
                        .data(datatypes)
                        .enter()
                        .append("span")
                        .html(function(d){
                          if(d.value === true)
                            return "<input type='checkbox' class='filter-checkbox' value="+d.value+" checked> "+d.key+" "+d.count+"<br>"
                          else
                            return "<input type='checkbox' class='filter-checkbox' value="+d.value+"> "+d.key+" "+d.count+"<br>"
                        })
                        .on('change',function(d){
                          if ( this.childNodes[0].value === 'false'){
                              this.childNodes[0].value = 'true';
                              selected_datatypes.push(d.key)
                          } else {
                            this.childNodes[0].value = 'false';
                            selected_datatypes.pop(d.key)
                          }
                          restapi(selected_diseases,selected_datatypes,selected_pathways).then(function(resp){
                            viz(resp)
                          });
                        })



    var filtersPathways = d3.select(".datatypes-pathways").selectAll("span")
                          .data(pathways)
                          .enter()
                          .append("span")
                          .html(function(d){
                              return "<input type='checkbox' class='filter-checkbox' value="+d.value+"> "+d.label+" "+d.count+"<br>"
                          })
                          .on('change',function(d){
                            if ( this.childNodes[0].value === 'false'){
                                this.childNodes[0].value = 'true';
                                selected_pathways.push(d.key)
                            } else {
                              this.childNodes[0].value = 'false';
                              selected_pathways.pop(d.key)
                              }
                            restapi(selected_diseases,selected_datatypes,selected_pathways).then(function(resp){
                              viz(resp)
                            });
                          })

        }

  datatypes_pathways(data,selected_datatypes);

  var filtersDisease = d3.select(".filter-diseases").selectAll("span")
                      .data(diseases)
                      .enter()
                      .append("span")
                      .html(function(d){
                        if(d.value === "true")
                          return "<input type='checkbox' class='filter-checkbox' value="+d.value+" checked> "+d.name+"<br>"
                        else
                          return "<input type='checkbox' class='filter-checkbox' value="+d.value+"> "+d.name+"<br>"
                      })
                      .on('change',function(d){
                          if ( this.childNodes[0].value === 'false'){
                              this.childNodes[0].value = 'true';
                              selected_diseases.push(d)
                          } else {
                            this.childNodes[0].value = 'false';
                            // selected_diseases.pop(d);
                            _.remove(selected_diseases, function(currentObject) {
                                return currentObject.name === d.name;
                            });
                            if(selected_diseases.length === 0){
                              d3.select(".datatypes-pathways").selectAll("span").remove();
                              d3.select(".datatypes-filter").selectAll("span").remove();
                              viz([])
                            }
                          }
                          restapi(selected_diseases,selected_datatypes,selected_pathways).then(function(resp){
                              datatypes_pathways(resp,selected_datatypes);
                              viz(resp)
                            });

                      })

}

module.exports = filters;
