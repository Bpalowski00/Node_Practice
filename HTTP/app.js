var http = require('http');
var fs = require('fs');

// Evenet Listener
http.createServer(function (req, res) {

	res.writeHead(200, { 'Content-Type': 'text/html' });

	fs.createReadStream(__dirname + '/i.html').pipe(res);

	res.end(html);


}).listen(1200, '127.0.0.1');