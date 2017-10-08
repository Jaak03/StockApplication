var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/stocklist',function (req, res){
	console.log("I received a GEt request")
});

app.listen(3000);
console.log("Server running on port 3000");
