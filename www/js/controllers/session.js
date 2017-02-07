/*Session Ctrl*/

app.controller('sessionsCtrl', ['$scope', '$compile', function($scope, $compile) {
    var userDetails = JSON.parse(window.localStorage.getItem('userDetails'));
    $scope.AllSessions = [];
    var add = function(dataAll) {
    	$scope.AllSessions = [];
        for (var property in dataAll) {
        	if (dataAll.hasOwnProperty(property)) {
                data = dataAll[property];
                $scope.AllSessions.push(data);
                console.log($scope.AllSessions)
            }
        }
    }
    var remove = function(id) {
    	console.log(id)
    }
    $scope.closeSession = function(data) {
        aprxyz.closeSession(data);
        var index = $scope.AllSessions.indexOf(data);
 		$scope.AllSessions.splice(index, 1); 
    }
    var aprxyz = new Revoke({ u: '1000006', v: '1000007', a: add, r: remove });
}]);
