var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.end('Hello');
})

var port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log('http://localhost:' + port);
})