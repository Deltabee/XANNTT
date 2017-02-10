/*Transfer Ctrl*/

app.controller('transferCtrl', ['$scope','$http','ApiURL', function($scope, $http, ApiURL){
	var url = ApiURL+'getExchangeRate';
	$scope.multiplier = 1;
	$scope.transfer = {};
	$http.get(url).success(function(Res){
		if (Res.hasOwnProperty('success')) {
			var data = JSON.parse(Res.success);
			$scope.multiplier = parseFloat(data.exchange_rate);
		}
	});
	$scope.changeAmount = function(){
		$scope.transfer.amount = parseFloat($scope.transfer.hours)*$scope.multiplier;
	}
}]);