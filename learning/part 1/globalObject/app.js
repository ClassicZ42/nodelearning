//console.log works in node but it logs to node console or nodemon
console.log('First log');


//node tells you what directory you are in
// __dirname
console.log(__dirname+' dirname log');


//node tells you what file you are in
console.log(__filename+' filename log');



//setTimeOut is used to run code after time then stop
setTimeout(function(){
    console.log('3 seconds past timer log');

},3000);

//setInterval like setTimeOut but runs code every 2 seconds and repeats every 2 seconds
let time = 0;
let timer= setInterval(function(){
  time += 2;
  // stop timer loop if it reaches 10 seconds
  if(time >= 10){
    clearInterval(timer);
  };
  console.log(time + ' seconds have past ,, interval loop logs')


},2000);
