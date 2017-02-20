// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(0);
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })

    .state('forget-pin', {
        url: '/forget-pin',
        templateUrl: 'templates/forget-pin.html',
        controller: 'forgotPasswordCtrl'
    })

    .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'registrationCtrl'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('app.transfer', {
        url: '/transfer',
        views: {
            'menuContent': {
                templateUrl: 'templates/transfer.html',
                controller: 'transferCtrl'
            }
        }
    })

    .state('app.sessions', {
        url: '/sessions',
        views: {
            'menuContent': {
                templateUrl: 'templates/sessions.html',
                controller: 'sessionsCtrl'
            }
        }
    })

    .state('app.history', {
        url: '/history',
        views: {
            'menuContent': {
                templateUrl: 'templates/history.html',
                controller: 'historyCtrl'
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'profileCtrl'
            }
        }
    })

    .state('app.signout', {
        url: '/signout',
        views: {
            'menuContent': {
                templateUrl: 'templates/signout.html',
                controller: 'signoutCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('login');
});

app.value('ApiURL', 'http://xantt.xyz/');

app.controller('menuCtrl', ['$scope', '$ionicModal', '$timeout', '$ionicSideMenuDelegate', '$state', function($scope, $ionicModal, $timeout, $ionicSideMenuDelegate, $state) {
    $scope.userData = JSON.parse(window.localStorage.getItem('userDetails'));
    $scope.openMenuLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

}]);
