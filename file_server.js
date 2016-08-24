var fs = require('fs');
var http = require('http');

if (process.argv.length >= 4) {
	var port = process.argv[2];

	http.createServer(http_server_handler).listen(port);
}

function http_server_handler(request, response) {
	fs.createReadStream(process.argv[3]).pipe(response);
}
