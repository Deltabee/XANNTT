/*History Ctrl*/

app.controller('historyCtrl', ['$scope', '$http','ApiURL', function($scope, $http, ApiURL){
	var userDetails = JSON.parse(window.localStorage.getItem('userDetails'));
	var id = userDetails.id;
	$scope.VideoHistory = [];
	$scope.opnenModel = {};
	var data = {};
				

	$http.post(ApiURL+'getUserVideoHistory', {id: id}).success(function(response){
		if (response.hasOwnProperty('data')) {
			angular.forEach(response.data, function(item, key){
				var ViewHours = Math.floor(item.view_time / 3600);
				var ViewMinutes = Math.floor(item.view_time / 60)%60;
				var ViewSeconds = Math.floor(item.view_time %60);
				ViewHours = (ViewHours<10) ? '0'+ViewHours : ViewHours;
				ViewMinutes = (ViewMinutes<10) ? '0'+ViewMinutes : ViewMinutes;
				ViewSeconds = (ViewSeconds<10) ?    '0'+ViewSeconds : ViewSeconds;

				var timeLeft = ViewHours+':'+ViewMinutes+':'+ViewSeconds;
				item.view_time = timeLeft;

				var ViewHours = Math.floor(item.total_time_clocked / 3600);
				var ViewMinutes = Math.floor(item.total_time_clocked / 60)%60;
				var ViewSeconds = Math.floor(item.total_time_clocked %60);
				ViewHours = (ViewHours<10) ? '0'+ViewHours : ViewHours;
				ViewMinutes = (ViewMinutes<10) ? '0'+ViewMinutes : ViewMinutes;
				ViewSeconds = (ViewSeconds<10) ?    '0'+ViewSeconds : ViewSeconds;

				var timeLeft = ViewHours+':'+ViewMinutes+':'+ViewSeconds;
				item.total_time_clocked = timeLeft;

				data[key] = 1;
				$scope.VideoHistory.push(item);
			});
		}
	});
	
	$scope.openModal = function(index){
		if (data[index]==1) {
			$scope.opnenModel[index] = true;
			data[index] = 2;
		}else{
			$scope.opnenModel[index] = false;
			data[index] = 1;
		}
		
	}
}]);