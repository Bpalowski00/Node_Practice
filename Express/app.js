let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	res.json({ name: "1", last: '2' });
});

app.listen(port);
