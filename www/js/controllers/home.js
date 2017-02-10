/*Home Page*/
app.controller('HomeCtrl', ['$scope','$ionicHistory','$http','ApiURL', function($scope,$ionicHistory,$http,ApiURL){
	$scope.vendors = [];
	$http.get(ApiURL+'getVendorsList').success(function(Response){
		if (Response.hasOwnProperty('success')) {
			var data = JSON.parse(Response.success);
			angular.forEach(data, function(item, key){
				item.file = ApiURL+'uploads/'+item.lisence_file;
				$scope.vendors.push(item);
			});
		}
	});
}]);