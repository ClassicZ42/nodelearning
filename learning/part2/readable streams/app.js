var http = require('http');
var fs = require('fs');
// use dirname and add filename concat encoding utf 8
var myReadStream = fs.createReadStream(__dirname +'/readme.txt','utf8');

// set up a listener to fire when data comes in
// use data event that creatReadStream inherits from eventEmitter
// .on means listen for event
// call back fires when chunck of data comes through
myReadStream.on('data',function(chunk){
        console.log('new chunk recieved')
        console.log(chunk);
});
