

[![NPM version](http://img.shields.io/npm/v/diseasetargetviz.svg)](https://www.npmjs.org/package/diseasetargetviz)


## Installation

From Git:

````bash
git clone https://github.com/ayusharma/diseasetargetviz
cd diseasetargetviz
npm install
npm run build-browser
````


Install the module with NPM: `npm install diseasetargetviz`

HTML :

```html

    <!-- Div for disease  -->
    <div id="disease"> </div>
    
    <!-- Div for Visualization -->
    <div id="rootDiv"> </div>

    <!-- Div for Filters -->
    <div id="filter"> </div>

    <!-- Div for pathway -->
    <div id="pathway"> </div>
```

JS :

```javascript
//Initalise the application
var app = require('diseasetargetviz');

//define confing in JSON.
var config  = {
  "dom":{
      "viz":"rootDiv",      //Inialize the rootDiv div
      "filter":"filter",    //Inialize the filter div
      "pathway":"pathway",  //Inialize the patway div
      "disease":"disease"   //Inialize the disease div
    },
  "disease" :[
    {"name":"Familial cold urticaria","code":"Orphanet_47045","value":"true"},
		{"name":"Asthma","code":"EFO_0000270","value":"false"},
		{"name":"Heart Failure","code":"EFO_0003144","value":"false"},
		{"name":"Blood Pressure","code":"EFO_0004325","value":"false"}
  ],
  "datatypes":[]
  //Available Datatypes :
  //"genetic_association"
  //"somatic_mutation"
  //"known_drug"
  //"rna_expression"
  //"affected_pathway"
  //"animal_model"
  //"literature"
  //You can select a datatype at start.

}

//calling the app variable
	app(config);
```

## Run it locally

```bash
npm run w
```
and visit : http://localhost:9090/examples/hello.html

## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/ayushsharma/diseasetargetviz/issues).

## License

The MIT License

Copyright (c) 2016, ayushsharma

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
