angular.module('starter', ['ionic', 'ngCordova','starter.controllers', 'starter.filter'])

.run(function($ionicPlatform, $rootScope, $location,$ionicPopup, $cordovaNetwork) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        
        /*if(window.Connection){      
            if(window.connection.type === Connection.NONE){
                $ionicPopup.confirm({
                    title: "Sin conexión de Datos",
                    content: "Para continuar, por favor conectese a su WiFi o Datos Móviles"
                })
                .then(function(result){
                    if(!result){
                        $ionic.Platform.exitApp();
                    }
                })                
            }
        }*/
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
    .state('app.seguridad', {
        url: "/seguridad",
        views: {
            'menuContent': {
                templateUrl: "templates/seguridad.html",
                controller: 'SeguridadCtrl'
            }
        }
    })
    .state('app.salud', {
        url: "/salud",
        views: {
            'menuContent': {
                templateUrl: "templates/salud.html",
                controller: 'SaludCtrl'
            }
        }
    })
    .state('app.deporte', {
        url: "/deporte",
        views: {
            'menuContent': {
                templateUrl: "templates/deporte.html",
                controller: 'DeporteCtrl'
            }
        }
    })
    .state('app.desarrollo', {
        url: "/desarrollo",
        views: {
            'menuContent': {
                templateUrl: "templates/desarrollo.html",
                controller: 'DesarrolloCtrl'
            }
        }
    })
    .state('app.educacion', {
        url: "/educacion",
        views: {
            'menuContent': {
                templateUrl: "templates/educacion.html",
                controller: 'EducacionCtrl'
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
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
