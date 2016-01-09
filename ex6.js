var mymodule = require('./mymodule.js');
mymodule(process.argv[2], process.argv[3], function(err ,fileList){
	if (err) console.log("mymodule.filterFile error");
	fileList.forEach(function(file){
		console.log(file);
	});
});
