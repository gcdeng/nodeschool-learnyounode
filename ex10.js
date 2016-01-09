var net = require('net');
var port = process.argv[2];

function zeroFill(i){
  return (i<10 ? "0":"")+i;
}

var date = new Date();
var data = date.getFullYear()+"-"+date.getMonth()+1+"-"+zeroFill(date.getDate())+" "+zeroFill(date.getHours())+":"+zeroFill(date.getMinutes())+"\n";
var server = net.createServer(function(socket){ //TCP server
  socket.end(data);
});
server.listen(port);
