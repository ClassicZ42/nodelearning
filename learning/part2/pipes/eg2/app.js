var http = require('http');
var fs = require('fs');

// basic server with read write streams and a pip
var server = http.createServer(function(req,res){

      console.log('Request was made to ' + req.url);
      res.writeHead(200, {'Content-Type': 'text/plain'})

      // read and write stream with pipe for eg 1
      var myReadStream = fs.createReadStream(__dirname +'/readme.txt','utf8');
      var myWriteStream = fs.createWriteStream(__dirname +'/writeme.txt','utf8')
      myReadStream.pipe(myWriteStream);
      
      res.end('This data is being sent.');

});

server.listen(3000,'127.0.0.1')
console.log('Server is listening on port 3000');
