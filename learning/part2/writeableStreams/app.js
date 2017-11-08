var http = require('http');
var fs = require('fs');
// start with a readstream
var myReadStream = fs.createReadStream(__dirname +'/readme.txt','utf8');
// add a write stream var that creates a writeme.txt
var myWriteStream = fs.createWriteStream(__dirname +'/writeme.txt','utf8')
myReadStream.on('data',function(chunk){
        console.log('new chunk recieved')
        // use a write method to write everytime a chunk is recieved
        myWriteStream.write(chunk);
});
