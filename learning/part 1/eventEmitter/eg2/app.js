const events = require( 'events');
// new core module caled util
var util = require('util');

//create a object constructor

var Person = function(name){
  this.name = name;
};

//inherit event emitter
//we want Person objects to inherit event emtitter
util.inherits(Person, events.EventEmitter);


var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');


//people objecta array
var people = [james,mary,ryu];
//taking whatever person object being passed through and attach a listener to it
// e
people.forEach(function(person){
  // set an event listerner for a speak event
  person.on('speak', function(msg){

    // this code fires when event goes off
    console.log(person.name+' said '+ msg);
  });
});

// trigger speak event
james.emit('speak','\:\'I can talk.\'');
