var ob = {
	name: 'boo',
	greet: function () {
		console.log(`Hello ${this.name}`);
	}
}
ob.greet();
// .call overrides the this
ob.greet.call({ name: "yes" });
// Aplly allows you to pass in an array of parameters
ob.greet.apply({ name: "que" }, []);
