function AppCtrl(){
console.log("Hello world from controller");

var refresh = function(){
$http.get('/stocklist').uccess(function(response){
console.log("I got the data");
$scope.stocklist = response;
$scope.stock = "";
mongo
});
};

refresh();

$scope.addstock =function(){
	console.log($scope.stock);
	$http.post('/stocklist', $scope.stock).success(function(response){
		console.log(response);
		refresh();
	});
};

$scope.remove = function(id){
console.log(id);
$http.delete('/stocklist/' + id).success(function(response){
	refresh();
})
};

$scope.edit = function(id){
	console.log(id);
	$http.get('/stocklist/' = id).success(function(response){
		$scope.stock = response;
	})
};
$scope.update = function(){
	console.log($scope.stock._id);
	$http.put('/stocklist/' = $scoe.stock._id, $scope.stock).success(function(response){
		refresh();
	})
}

$scope.deselect = function(){
	$scope.stock="";
}

	
	
}