console.log("hello world");
// eventEmitters
console.log("===================")
var events = require('events')
var eventEmitter = new events.EventEmitter();

function ring(){
    console.log("ring ring ring")
    eventEmitter.emit('ringbell', 'welcome')
}

eventEmitter.on('doorOpen', ring)
eventEmitter.on('ringbell',function(mes){console.log(mes)})
eventEmitter.emit('doorOpen')

