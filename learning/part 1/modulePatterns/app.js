const stuff = require("./stuff");

//stuff is now the module.exports object with all the properties set to it
console.log(stuff.counter(['me','you']));
console.log(stuff.adder(1,3));
console.log(stuff.adder(stuff.pi,2));
