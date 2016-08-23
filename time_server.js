var net = require('net');

if(process.argv.length > 2) {
	var server = net.createServer(connectionHandler);
	server.listen(process.argv[2]);
}

function connectionHandler(socket) {
	socket.write(formatDate(new Date()) + '\n');
	socket.end();
}

function formatDate(date) {
	return 	date.getFullYear() + '-' + zeroish(date.getMonth() + 1) + '-' + zeroish(date.getDate()) + ' ' + zeroish(date.getHours()) + ':' + zeroish(date.getMinutes());
	
}

function zeroish(value) {
	return value < 10 ? ('0' + value) : ('' + value);
}

