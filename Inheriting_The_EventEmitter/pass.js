'use strict';

var EventEmitter = require('events');
// No need for util since EventEmitter exteneds 
// var util = require('util');

let test = class Greeter extends EventEmitter {
	constructor() {
		super();
		this.greeting = " Hello"
	}
	// Method prototype
	greet(data) {
		console.log(`${this.greeting}: ${data}`);
		this.emit('greet', data);
	}

}
module.exports = test;