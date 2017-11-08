// a module is just another JS file :)
// what if we wanted to use the code in counter.js here ?
// require the module son !!!
// ./ <- means current directory put the path to file in
//require paramater no need to put .js
//set it equal to a const var
const counter = require('./counter');

// call the function and log the string to the console
console.log(counter(['donnie','hanlie']));
