var fs = require('fs');
var path = require('path');
// console.log(path.basename(process.argv[2], process.argv[3]));
var reg = "."+process.argv[3];
// console.log(reg);
fs.readdir(process.argv[2], function(err, list){
	if (err) console.log("read error");
	list.forEach(function(file){
		if(path.extname(file) === "."+process.argv[3])
			console.log(file);
	});
});
