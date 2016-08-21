var ls = require('./ls.js');

if(process.argv.length >= 4) {
	ls(process.argv[2], process.argv[3], function(err, data) {
		if(err) {
			console.log("there is an error :/");
			return;
		}
		for(key in data) {
			console.log(data[key]);
		}
	});
}
