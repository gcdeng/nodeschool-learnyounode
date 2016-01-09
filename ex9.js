var http = require("http");
var bl = require("bl");
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var count = 0;
var result = [];

function printResult(){
  for (var i in result) {
    console.log(result[i]);
  }
}

function getMessage(index){
  var collect = "";
  http.get(process.argv[2+index], function(response){
    response.pipe(bl(function(err, data){
      if (err) {
        return console.error(err);
      }
      result[index]=data.toString();
      count++;
      if(count == 3) printResult();
    }));
  });
}

for (var i = 0; i < 3; i++) {
  getMessage(i);
}
