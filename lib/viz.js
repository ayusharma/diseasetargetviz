global.$ = require('jquery');
var d3 = require('d3');
var utils = require('./utils');


var viz = function(data){

  console.log(data);

  d3.select("svg").remove();

  var width = $('#rootDiv').width(),
            height = 1000000,
            margin = {top:50,bottom:100,right:50,left:50};

  var w = width-margin.left-margin.right,
      h = height-margin.top-margin.bottom;



  var svg =  d3.select(".target-disease-viz")
              .append("svg")
              .attr({
                 "width":w + margin.left + margin.right,
                 "height":h + margin.top + margin.bottom
               })
             .append("g")
             .attr("transform","translate("+margin.left+","+margin.top+")");


   var diseases =  svg.append('g').attr("class","disease").selectAll("circle")
                   .data(data)
                   .enter()
                   .append("circle")
                   .attr({
                     "id": function(d,i){
                       console.log(d.data[0].disease.name)
                       return 'node-'+utils.replace(d.data[0].disease.name);
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
                          return d.data[0].disease.name;
                        })
                        .style({
                          "font-size":"10px"
                        })


}

module.exports = viz;
