var fs = require('fs');
buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var arr = str.split('\n');
console.log(arr.length - 1);