var http = require('http');
var map = require('through2-map');

if (process.argv.length >= 3) {
	http.createServer(requestListener).listen(Number(process.argv[2]));	
}

function requestListener(request, response) {
	// check if request is post
	if(request.method != 'POST') {
		return response.end('sorry, you should POST something.');
	}

	request.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
}
