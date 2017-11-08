// you can require core modules
// the event module is a core modules
const events = require( 'events');

// use EventEmitter constructor given by events module
// to create an eventListener
// remember to use new

const myEmitter = new events.EventEmitter();

// call  the eventEmitter object and .on and give your event a name
// add a callback function
//.on creates a listener for eventName event
myEmitter.on('eventName',function(msg){
  console.log(msg)
});

//emit the event to make the above funnction run

myEmitter.emit('eventName','eventName event has emited')
