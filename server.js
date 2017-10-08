var express = require('express'),
 app = express();

var controller = require('./controller');
app.use(express.static(__dirname + "/public"));

app.get('/stocklist',controller.list_all_stocks)

app.listen(3000);
console.log("Server running on port 3000");
