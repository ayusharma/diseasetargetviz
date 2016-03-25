var app = require("diseasetargetviz");

var config  = {
	"dom":{
			"viz":"rootDiv",
			"filter":"filter",
			"pathway":"pathway",
			"disease":"disease"
		},
	"disease" :[
		{"name":"Familial cold urticaria","code":"Orphanet_47045","value":"true"},
		{"name":"Asthma","code":"EFO_0000270","value":"false"},
		{"name":"Heart Failure","code":"EFO_0003144","value":"false"},
		{"name":"Blood Pressure","code":"EFO_0004325","value":"false"},
	],
	"datatypes":[]
}

app(config);