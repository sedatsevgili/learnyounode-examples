var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extension, callback) {
	fs.readdir(dirname, function(err, list) {
		if(err) {
			return callback(err);
		}
		var filteredFiles = [];
		for (var index in list) {
			file_path = list[index];
			if(path.extname(file_path) == '.' + extension) {
				filteredFiles.push(file_path);
			}
		}
		callback(null, filteredFiles);
	});
}
