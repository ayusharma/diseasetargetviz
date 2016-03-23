global.$ = require('jquery');
var d3 = require('d3');
var utils = require('./utils');
var _ = require('lodash');



var viz = function(data){

  console.log(data);

  d3.select("svg").remove();

  var targetSymbols = [],
      targetDiseases = [];

  data.map(function(k){
    k.data.map(function(l){
      targetSymbols.push({"symbol":l.target.symbol,"id":l.target.id})
    })
  })

  targetSymbols = _.uniq(targetSymbols)



  var width = 400,
            height =20000,
            margin = {top:50,bottom:100,right:50,left:50};

  var w = width-margin.left-margin.right,
      h = height-margin.top-margin.bottom;



  var svg = d3.select(".target-disease-viz")
              .append("svg")
              .attr({
                 "width":w + margin.left + margin.right,
                 "height":h + margin.top + margin.bottom
               })
             .append("g")
             .attr("transform","translate("+margin.left+","+margin.top+")");


  console.log("ckjnjk");
   var diseases =  svg.append('g').attr("class","disease").selectAll("circle")
                   .data(data)
                   .enter()
                   .append("circle")
                   .attr({
                     "id": function(d,i){
                       if (d.data.length) {
                         return 'node-'+utils.replace(d.data[0].disease.name);
                       } else {
                         return ""
                       }
                     },
                     "cx": 0,
                     "cy": function(d,i){
                       return i*30;
                     },
                     "r":3
                   })

   var diseasesText =  svg.append('g').attr("class","disease-text").selectAll("text")
                      .data(data)
                      .enter()
                      .append("text")
                      .attr({
                        "width": 100,
                        "height": 30,
                        "x": 10,
                        "y": function(d,i){
                          return i*30;
                        }
                      })
                      .text(function(d,i){
                        if (d.data.length) {
                          return d.data[0].disease.name;
                        } else {
                          return ""
                        }
                      })
                      .style({
                        "font-size":"10px"
                      })




var circlesTarget = svg.append('g').attr("class","circle-target").selectAll("circle")
                          .data(targetSymbols)
                          .enter()
                          .append("circle")
                          .attr({
                            "id":function (d,i) {
                              // console.log(d)
                              return 'circle-target-'+utils.replace(d.id);
                            },
                            "cx":300,
                            "cy":function(d,i){
                              return i*30;
                            },
                            "r": 3
                          })


    var textTarget = svg.append('g').attr("class","text-target").selectAll("text")
                                  .data(targetSymbols)
                                  .enter()
                                  .append("text")
                                  .attr({
                                    "id":function (d,i) {
                                      return 'text-target-'+utils.replace(d.id);
                                    },
                                    "x":310,
                                    "y":function(d,i){
                                      return i*30;
                                    },
                                  })
                                  .text(function(d,i){
                                      return d.symbol;
                                  })
                                  .style({
                                    "font-size":"10px"
                                  })


    var diseaseTargetline = svg.append('g').attr("class","disease-target-lines")
                            .selectAll("g")
                            .data(data)
                            .enter()
                            .append("g")
                            .attr("class",function(d){
                              if (d.data.length) {
                                return 'lines-'+utils.replace(d.data[0].disease.name);
                              } else {
                                return ""
                              }
                            })
                            .selectAll("line")
                            .data(function(d){
                              return d.data;
                            })
                            .enter()
                            .append("line")
                            .attr({
                              "id":function (d,i) {
                                // console.log(d)
                                return 'line-target-'+utils.replace(d.target.symbol);
                              },
                              "x1":function(d){
                                return $('#node-'+utils.replace(d.disease.name)).attr("cx")
                              },
                              "y1":function(d){
                                return $('#node-'+utils.replace(d.disease.name)).attr("cy")
                              },
                              "x2": function(d){
                                return $('#circle-target-'+utils.replace(d.target.id)).attr("cx")
                              },
                              "y2":function(d){
                                return $('#circle-target-'+utils.replace(d.target.id)).attr("cy")
                              },
                              "stroke":"red",
                              "stroke-width":"0.2"
                            })


}

module.exports = viz;
