var http = require("http");
var bl = require("bl");
// var collect = "";
http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	response.pipe(bl(function(err, data){
		if (err) return console.error(err);
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});
