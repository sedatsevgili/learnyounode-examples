var fs = require('fs');
var path = require('path');

if (process.argv.length >= 4) {
	fs.readdir(process.argv[2], function(err, list) {
		for (var index in list) {
			file_path = list[index];
			if (path.extname(file_path) == '.' + process.argv[3]) {
				console.log(file_path);
			}
		}
	});

}
