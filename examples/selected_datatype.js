var app = require("diseasetargetviz");

var config  = {
	"dom":{
			"viz":"rootDiv",
			"filter":"filter",
			"pathway":"pathway"
		},
	"disease" :[
		{"name":"Familial cold urticaria","code":"Orphanet_47045"},
		{"name":"Asthma","code":"EFO_0000270"},
		{"name":"Heart Failure","code":"EFO_0003144"},
		{"name":"Blood Pressure","code":"EFO_0004325"},
	],
	"datatypes":["genetic_association"]
}

app(config);
