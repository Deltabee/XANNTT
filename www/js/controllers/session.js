/*Session Ctrl*/

app.controller('sessionsCtrl', ['$scope', '$compile','$filter', function($scope, $compile, $filter) {
    var userDetails = JSON.parse(window.localStorage.getItem('userDetails'));
    $scope.AllSessions = [];
    $scope.noSession = true;
    var noSession = angular.element(document.getElementsByClassName('noSession'));
        
    var add = function(dataAll) {
        $scope.AllSessions = [];
        var table = angular.element(document.getElementsByClassName('table'));
        table.empty();
        for (var property in dataAll) {
            if (dataAll.hasOwnProperty(property)) {
                data = dataAll[property];
                $scope.AllSessions.push(data);
                data.start_time = $filter('date')(data.start_time, 'dd-MMM-yy hh:mm:ss');
                var html = '<div class="row"><div class="col col-10"></div> <div class = "col col-80" ><div class = "box" ><div class = "row" ><div class = "col col-40" > <span>'+data.vendor_id+'</span></div ><div class = "col col-40" > <span > '+data.start_time+'</span></div><div class = "col col-20" > <span > <i class = "ion-close" ng-click=\'closeSession("' + data.session_id + '")\' > </i></span> </div> </div> </div> </div> <div class = "col col-10" > </div></div>';
                var ele = table.append(html);
                $compile(ele.contents())($scope);
            }
            console.log($scope.AllSessions)
            if ($scope.AllSessions.length > 0) {
                noSession.css('display', 'none');
            }else{
            	noSession.css('display', 'flex');
            }
        }
    }
    var remove = function(id) {
        console.log(id);
    }
    $scope.closeSession = function(data) {
        aprxyz.closeSession(data);
        var index = $scope.AllSessions.indexOf(data);
        $scope.AllSessions.splice(index, 1);
        if ($scope.AllSessions.length > 0) {
            noSession.css('display', 'none');
        }else{
        	noSession.css('display', 'flex');
        }
    }
    var aprxyz = new Revoke({ u: '1000006', v: '1000007', a: add, r: remove });
}]);
