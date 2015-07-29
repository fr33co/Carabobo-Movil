angular.module('starter', ['ionic', 'ngCordova','starter.controllers', 'starter.filter'])

.run(function($ionicPlatform, $rootScope, $location) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.home', {
        url: "/home",
        views: {
            'menuContent': {
                templateUrl: "templates/home.html",
                controller: "HomeCtrl"    
            }
        }
    })

    .state('app.entry', {
        url: '/entry/:index',
        views:{
            'menuContent': {
                controller: 'EntryCtrl',
                templateUrl: 'templates/entry.html',
            }
        }
    })
    .state('app.sports', {
        url: "/deportes",
        views: {
            'menuContent': {
                templateUrl: "templates/deportes.html",
                controller: 'SportsCtrl'
            }
        }
    })
    .state('app.venezuela', {
        url: "/venezuela",
        views: {
            'menuContent': {
                templateUrl: "templates/venezuela.html",
                controller: 'VzlaCtrl'
            }
        }
    })
    .state('app.mundo', {
        url: "/mundo",
        views: {
            'menuContent': {
                templateUrl: "templates/mundo.html",
                controller: 'MundoCtrl'
            }
        }
    })
    .state('app.aragua', {
        url: "/aragua",
        views: {
            'menuContent': {
                templateUrl: "templates/aragua.html",
                controller: 'AraguaCtrl'
            }
        }
    })
    .state('app.cultura', {
        url: "/cultura",
        views: {
            'menuContent': {
                templateUrl: "templates/cultura.html",
                controller: 'CulturaCtrl'
            }
        }
    })
    .state('app.culture', {
        url: "/culture",
        views: {
            'menuContent': {
                templateUrl: "templates/culture.html",
                controller: 'CultureCtrl'
            }
        }
    })
    .state('app.institucionales', {
        url: "/institucionales",
        views: {
            'menuContent': {
                templateUrl: "templates/institucionales.html",
                controller: 'InstitucionalesCtrl'
            }
        }
    })
    .state('app.infraestructura', {
        url: "/infraestructura",
        views: {
            'menuContent': {
                templateUrl: "templates/infraestructura.html",
                controller: 'InfraestructuraCtrl'
            }
        }
    })
;    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});