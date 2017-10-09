var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db= mongojs('stocklist',['stocklist']);
var bodyparser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());

app.get('/stocklist',function (req, res){
	console.log("I received a GEt request")
	
	db.stocklist.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/stocklist',function(req,res){
	console.log(req.body);
	db.stocklist.insert(req.body, function(err,doc){
		res.json(doc);
	});
});
app.delete('/stocklist/:id',function(req,res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id: mongojs.objectId(id)},function(err,doc){
		res.json(doc);
	});
});


app.get('/stocklist/:id',function(req,res){
	var id = req.params.id;
	console.log(id);
	db.stocklist.findone({_id: mongojs.objectId(id)},function(err,doc){
	res.json(doc);
});
})

app.put('/stocklist/:id', function(req,res){
	var id = req.params.id;
	console.log(req.body.name);
	db.stocklist.findAndModify({query:{_id: mongojs.objectId(id)},
		update: {$set: {name :req.body.name, description: req.body.description, quantity: req.body.quantity,price: req.body.price}},
		new: true}, function(err,doc){
			res.json(doc);
		});
})

app.listen(3000);
console.log("Server running on port 3000");
