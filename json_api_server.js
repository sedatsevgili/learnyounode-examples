var http = require('http');
var url = require('url');

if (process.argv.length > 2) {
	http.createServer(requestListener).listen(Number(process.argv[2]));
}

function requestListener(request, response) {
	if(request.method != 'GET') {
		return response.end('only GET method is allowed.');
	}

	var parsedUrlData = url.parse(request.url, true);
	var date = new Date(parsedUrlData.query['iso']);
	response.writeHead(200, {'Content-Type': 'application/json'});
	data = [];

	if(parsedUrlData.pathname == '/api/parsetime') {
		data = {'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()};
	}

	if(parsedUrlData.pathname == '/api/unixtime') {
		data = {'unixtime': date.getTime()};
	}
	response.write(JSON.stringify(data));
	return response.end();
}
