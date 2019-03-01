var Emiter = require('./emitter');

var emtr = new Emiter();

emtr.on('test', function () {
	console.log("2")
})
emtr.on('test1', function () {
	console.log("1")
})
emtr.on('test', function () {
	console.log("2")
})
emtr.emit('test1');
emtr.emit('test');