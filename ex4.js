var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(err, data){
	if (err) throw err;
	var line = data.split('\n');
	console.log(line.length-1);
});
