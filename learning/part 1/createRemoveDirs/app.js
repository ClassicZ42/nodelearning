var fs = require('fs');

 //syncronice version

 // make a dir called stuff
 fs.mkdirSync('stuff')


// delete the dir
fs.rmdirSync('stuff');




// assync way ( remember async methods need to fire a callback function )

/*
// make a dir called stuff
//then read a file called readme
// write it's data to writeme
fs.mkdir('stuff', function(){
    fs.readFile('read','utf8',function(err,data){
     fs.writeFile('./stuff/writeMe.txt',data);
  });
});


// delete the dir
fs.rmdir('stuff');



*/
