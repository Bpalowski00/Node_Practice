var EventEmitter = require('events');
var util = require('util');
//// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
/// Creating the constructor
function Say() {
	this.greeting = 'Hello';
}
//// Passing constructor with eventemmiter 
///This gives EventEmitter acces to object of Say
//// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
util.inherits(Say, EventEmitter);
// Creating prototype of object SAY creating new method and passing in the emit with greet magic sting to trigger

//// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
///// Pass due  
Say.prototype.greet1 = function () {
	this.emit('pass');
}

////// Fail
Say.prototype.greet2 = function () {
	this.emit('Not going to pass');
}

////// Pasing Data
Say.prototype.greet3 = function (data) {
	this.emit('testData', data);
}

/// Creating a new prototype object
let greeter1 = new Say();
let greeter2 = new Say();
let greeter3 = new Say();


//// //// //// //// //// //// //// //// //// //// //// //// //// //// 
//// this will look for type pass and will be able to run
greeter1.on('pass', function () {
	console.log("hello greeter 1");
})
//// this will look for type "fail" and will fail
greeter2.on('fail', function () {
	console.log("hello greeter 22");
})
//// this will pass in data
greeter3.on('testData', function (data) {
	console.log("hello greeter 3 " + "this is the data " + data);
})

//// //// //// //// //// //// //// //// //// //// //// //// //// //// 

// returning only greet 1 method due to EventEmitter  Majic string " greet1"
greeter1.greet1();
greeter2.greet2();
/// Passing in the data
greeter3.greet3("Brian ");