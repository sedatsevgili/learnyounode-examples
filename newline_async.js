var fs = require('fs');

var lineCount = undefined;

if (process.argv.length >= 2) {
	fs.readFile(process.argv[2], function(err, fileContents) {
		lineCount = fileContents.toString().split('\n').length - 1;
		console.log(lineCount);
	})
}


