// require http core module
var http = require('http');


// use method (createservermethod) to create server
//store it in a var
// callback function with req and res params
var server = http.createServer(function(req,res){
      // log everytime a request is made to the server
      console.log('Request was made to ' + req.url);

      // write a response header with a status of 200 meaning ok

      // and an anonoumous object with content type property with a value of text/plain(data type)
      res.writeHead(200, {'Content-Type': 'text/plain'})


      // use res.end to end response header and send some data
      res.end('This data is being sent.');


});


//set up a listener for the port 3000 and ip ( loopback adress in this case)


server.listen(3000,'127.0.0.1')
console.log('Server is listening on port 3000');
