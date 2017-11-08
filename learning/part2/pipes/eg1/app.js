var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname +'/readme.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname +'/writeme.txt','utf8')

// pipes make it easy to connect the read and write string without a manual
// event listener
// use the PIPE() method but can only be used on readable srings

myReadStream.pipe(myWriteStream); // this code does everything the writeable stream did ( go look )
