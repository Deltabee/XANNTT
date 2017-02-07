/*Login Ctrl*/

app.controller('loginCtrl', ['$scope','$state','$http', 'ApiURL', function($scope, $state, $http, ApiURL){
	$scope.loginData  = {};
	var userDetails = JSON.parse(window.localStorage.getItem('userDetails'));
	if (userDetails!=null) {
		$state.go('app.home');
	}
	$scope.doLogin = function(){
		var url = ApiURL+'customerLogin';

		$http.post(url, $scope.loginData).success(function(response){
			if (response.hasOwnProperty('success')) {
				window.localStorage.setItem('userDetails', JSON.stringify(response.success));
				$state.go('app.home');
			}else if (response.hasOwnProperty('error')) {
				alert(response.error);
			}else{
				alert('An Unknown Error Occured while loggin in !')
			}
		});
	}
}]);

/*Forgot Password Ctrl*/

app.controller('forgotPasswordCtrl', ['$scope', function($scope){
	
}]);

/*Rtegistration Ctrl*/

app.controller('registrationCtrl', ['$scope', function($scope){
	
}]);

/*Sign Out Ctrl*/

app.controller('signoutCtrl', ['$scope','$state','$ionicHistory','$http','ApiURL', function($scope, $state,$ionicHistory, $http, ApiURL){
	$scope.signOut = function(){
		$http.get(ApiURL+"customerLogout", {logout: 'customer'}).success(function(response,status,headers,config){
			window.localStorage.removeItem('userDetails');
	    	$state.go('login');
        }); 
	    
	}
	$scope.backToHome = function(){
		$ionicHistory.nextViewOptions({
		    disableBack: true
		});
		$state.go('app.home');
	}
}]);