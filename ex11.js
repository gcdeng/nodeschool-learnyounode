var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var filePath = process.argv[3];
var fileStream = fs.createReadStream(filePath);

http.createServer(function(req, res){
  res.writeHead(200, {'content-type' : 'text/plain'});
  fileStream.pipe(res);
}).listen(port);
