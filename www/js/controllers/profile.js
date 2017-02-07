/*Profile Ctrl*/

app.controller('profileCtrl', ['$scope','$state','$http','ApiURL','$timeout', function($scope, $state,$http, ApiURL, $timeout){
	$scope.onSubmit = false;
	$scope.updateDetails = function(){
		$scope.onErr = false;
		$scope.onSubmit = false;
		$http.post(ApiURL+'editUser', $scope.userData).success(function(res){
			if (res.hasOwnProperty('error')) {
				$scope.onSubmit = false;

				$scope.onErr = true;

				$scope.Message = res.error;
			}else{
				window.localStorage.setItem('userDetails', JSON.stringify($scope.userData));
				$scope.onErr = false;
				$scope.onSubmit = true;

				$scope.Message = "Your Profile Updated Successfully!";
				$timeout(function(){
					$state.go('app.profile');
				}, 2000);
			}
			
		})
	}
}]);