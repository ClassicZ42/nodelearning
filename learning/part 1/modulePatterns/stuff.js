//this is a pattern
//to export the code
// while writing it
//set code as property's of the module exports object

module.exports.counter = function(arr){

  return 'There are'+ arr.length + 'elements in this array';
};

module.exports.adder = function(a,b){

  return `The sum of the numbers is ${a+b}`;
};

module.exports.pi  = 3.142;
/*

or you can do this

module.exports = {
  counter : counter,
  adder : adder,
  pi : pi
}
*/
