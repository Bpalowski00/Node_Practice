////////////////////////////////////NODE EVENT EMMITER//////////////////////////////////////////////////////////////

/// Emitter file is not good anymore becasue we are now using a built in node emitter that does the same thing 
//var Emiter = require('./emitter');
//__________________________________________________________________________________________ Pt 1
// we are using ther JS core file evenets to be required events constructor takes on method and emit method
var Emiter = require('events');
// config is the object and event is the property 
var config = require('./config');
var emtr = new Emiter();

/// on method takes 
// emtr.on('blue', function () {
// 	console.log("code blue")
// })
// emtr.on('yellow', function () {
// 	console.log("code yellow")
// })
// emtr.on('red', function () {
// 	console.log("code red")
// })


// emtr.emit('blue');
// emtr.emit('yellow');

// emtr.emit('red');
// // Test 
// emtr.emit('test');

//__________________________________________________________________________________________ Pt2 

////Event emiter relies on "Magic Strings"!!!!!
// Magic String causes bugs due to typo
// Example on how to deal with Magic Strings you will need to pass in file will its property and value

emtr.on(config.event.GREET, function () {
	console.log("test 1");
})

emtr.on(config.event.FILE, function () {
	console.log("test 2");
})
emtr.on(config.event.FILEOPEN, function () {
	console.log("test 3");
})

emtr.emit(config.event.GREET);
emtr.emit('yellow');

emtr.emit(config.event.FILE);
// Test 
emtr.emit(config.event.FILEOPEN);