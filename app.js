var express = require('express');
var accepts = require('accepts');
var useragent = require('express-useragent');
var app = express();

app.get('/', (req, res) => {
	var accept = accepts(req);
	var languages = accept.languages();
	var preferLanguages = languages[0];

	var ipAddr = req.headers["x-forwarded-for"];
	if (ipAddr){
		var list = ipAddr.split(",");
		ipAddr = list[list.length-1];
	} else {
		ipAddr = req.connection.remoteAddress;
	}

	var source = req.headers['user-agent'];
  	ua = useragent.parse(source);
  	var software = ua.os;

  	var result = {
  		'ipaddress': ipAddr,
  		'language': preferLanguages,
  		'software': software
  	}
	res.end(JSON.stringify(result));
})

var port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log('http://localhost:' + port);
})