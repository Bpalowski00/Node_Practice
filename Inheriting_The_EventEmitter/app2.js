//// ES6 class
'use strict';
var Greeter = require('./pass');

let greeter1 = new Greeter();
// let greeter2 = new Greeter();
// let greeter3 = new Greeter();

greeter1.on('greet', function (data) {
	console.log("hello greeter 1", data);
})


greeter1.greet("brian");
