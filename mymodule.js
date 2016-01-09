module.exports = function filterFile(dirname, extname, callback){
	var fs = require('fs');
	var path = require('path');
	var fileList = [];
	fs.readdir(dirname, function(err, list){
		if (err) return callback(err);
		// console.log(list);
		list.forEach(function(file){
			if(path.extname(file) === "."+extname)
				fileList.push(file);
		});
		return callback(null, fileList);
	});
};
