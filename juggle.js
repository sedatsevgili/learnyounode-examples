var http = require('http');
var bl = require('bl');

function getContents(url, callback) {
	http.get(url, function(response) {
		response.setEncoding('utf8');
		response.pipe(bl(function(err,data) {
			callback(url, data.toString());	
		}));
	});
}

var responses = [];
var responseCount = 0;

function collect(url, response) {
	responses[url] = response;
	responseCount++;
	if(responseCount == 3) {
		finalize();
	}
}

function finalize() {
	for (var i = 2; i <= 4; i++) {
		console.log(responses[process.argv[i]]);
	}
}

for (var i = 2; i <= 4; i++) {
	getContents(process.argv[i], collect)
}
