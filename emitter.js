function Emiter() {
	this.event = {};
}
// Event Listeners
// on is typical method used
Emiter.prototype.on = function (type, listener) {
	this.event[type] = this.event[type] || [];
	this.event[type].push(listener);
}

// Emit is another common term
Emiter.prototype.emit = function (type) {
	if (this.event[type]) {
		this.event[type].forEach(function (listener) {
			listener();
		})
	}
}

module.exports = Emiter;