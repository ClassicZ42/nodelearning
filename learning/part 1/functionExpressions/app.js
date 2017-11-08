//function with function as param
function callFunction(fun){
    //call the fun funciton
    fun();
};



// function expression
let saySup = function(){
  console.log('Sup Dude');
};


// call the call function and set saySup funcion as
// param so when fun(); gets called the anonamous
// saySup function code gets run
callFunction(saySup);
