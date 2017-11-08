var fs = require('fs');
// fs is the core file system module

//read a file
//readfileSYync method
//syncronice methods force the code inside to run through before it moves on
var readme = fs.readFileSync('readme.txt','utf8');

// done


// how to write a file
// we are writing the read file to a new file
fs.writeFileSync('writeMe.txt', readme);





/*
//async event emitter needs a callnback function as a third param
// to run when the eventlistener is done

//eg.

var readme = fs.readFile('readme.txt','utf8' function(err,data){
console,log(data);
});

// done
// now the code doesnt get blocked
// other code gets fired if this takes too long





*/



// deleting a file
// fs.unklink('writeMe.txt');
