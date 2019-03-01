// Setting up the Prototype using a object litteral
let person = {
	first: '',
	last: '',
	test: function () {
		return this.first + " the " + this.last;
	}
}

// Create a new Object Person Prototype
///Object.create is a very simple,
// fast and clean way to set up inheritance,
// that is the prototype chain,
// that is objects being able to use properties

//// test 1
let j = Object.create(person);
j.first = "frank";
j.last = "toe";
console.log(j.test())
//// test 2
let b = Object.create(person);
b.first = "jj";
b.last = "plane";

console.log(b.test())
