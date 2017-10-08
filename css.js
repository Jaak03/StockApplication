var app = angular.module('newApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http({
            url: 'http://localhost:3000/stocklist',
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',

            }
        })
    .then(function(response) {
        $scope.myData = response.data;
    });
});




