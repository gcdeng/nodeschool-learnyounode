var http = require('http');
var _url = require("url");

function parseTime(isoString) {
  var iso_date = new Date(isoString);
  var iso_JSON = {};
  iso_JSON.hour = iso_date.getHours();
  iso_JSON.minute = iso_date.getMinutes();
  iso_JSON.second = iso_date.getSeconds();
  return iso_JSON;
}

http.createServer(function(req, res){
  var result;
  if (req.method != "GET") {
    return req.end("only GET request");
  }

  var parseURL = _url.parse(req.url, true);
  console.log(parseURL);
  var isoString = parseURL.query.iso.toString();
  console.log(isoString);
  if (parseURL.pathname == '/api/parsetime') {
    result = parseTime(isoString);
    console.log(result);
  } else if (parseURL.pathname == '/api/unixtime') {
    var unixtime_JSON = {};
    unixtime_JSON.unixtime = (new Date(isoString)).getTime();
    result = unixtime_JSON;
    console.log(result);
  }

  if(result){
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
  }

}).listen(process.argv[2]);
