function AppCtrl($scope){
	console.log("Hello world from controller");

	stock1 ={
		name: 'Tim',
		description: 'Drill',
		quantity: '100',
		price: '100'
	};
	stock2 ={
		name: 'Ruan',
		description: 'Ball',
		quantity: '40',
		price: '12'
	};
	stock3 ={
		name: 'Jan',
		description: 'bigshaft',
		quantity: '433',
		price: '400'
	};
	
	var stocklist =[stock1,stock2,stock3];
	$scope.stocklist = stocklist;

}
exports.list_all_stocks = function(req, res) {
  
  	stock1 ={
		name: 'Tim',
		description: 'Drill',
		quantity: '100',
		price: '100'
	};
	stock2 ={
		name: 'Ruan',
		description: 'Ball',
		quantity: '40',
		price: '12'
	};
	stock3 ={
		name: 'Jan',
		description: 'bigshaft',
		quantity: '433',
		price: '400'
	};
	
	var stocklist =[stock1,stock2,stock3];
    res.json(stocklist);
  
};