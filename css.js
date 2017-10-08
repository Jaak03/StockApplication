angular.module('newApp',[])
.controller('newconttroller',funtion($scope){
	var stocklist =[stock1,stock2,stock3];
	$scope.stocklist = stocklist;
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
});