angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    $scope.loginData = {};
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) { $scope.modal = modal; });
    $scope.closeLogin = function() { $scope.modal.hide(); };
    $scope.login = function() { $scope.modal.show(); };
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);
        $timeout(function() { $scope.closeLogin(); }, 1000);
    };
})

.controller('HomeCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Carabobo Movíl";
        $rootScope.VISIBLE = false;
        $rootScope.ocultar = function(){
          $scope.VISIBLE = !$scope.VISIBLE;
        }
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://carabobo.gob.ve/feed/");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
               $location.path('/app/home');
            } else {
                console.log("Error - "+result.error.message);
            }
        });
    }
    $ionicPlatform.ready(function() {
        console.log("Started up!!");
        google.load("feeds", "1",{callback:initialize});
        $ionicLoading.hide();
    });
}])

.controller('AraguaCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Desarrollo Social";
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcdesarrollosocial");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
               $location.path('/app/home');
            } else {
                console.log("Error - "+result.error.message);
            }
        });
    }
    $ionicPlatform.ready(function() {
        console.log("Started up!!");
        google.load("feeds", "1",{callback:initialize});
        $ionicLoading.hide();
    });
}])

.controller('VzlaCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Salud";
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcSalud");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                $location.path('/app/home');
            } else {
                console.log("Error - "+result.error.message);
            }
        });
    }
    $ionicPlatform.ready(function() {
        console.log("Started up!!");
        google.load("feeds", "1",{callback:initialize});
        $ionicLoading.hide();
    });
}])

.controller('MundoCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Deportes";
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcdeportes");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                $location.path('/app/home');
            } else {
                console.log("Error - "+result.error.message);
            }
        });
    }
    $ionicPlatform.ready(function() {
        console.log("Started up!!");
        google.load("feeds", "1",{callback:initialize});
        $ionicLoading.hide();
    });
}])

.controller('CulturaCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Educación";
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbceducacion");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                $location.path('/app/home');
            } else {
                console.log("Error - "+result.error.message);
            }
        });
    }
    $ionicPlatform.ready(function() {
        console.log("Started up!!");
        google.load("feeds", "1",{callback:initialize});
        $ionicLoading.hide();
    });
}])

.controller('SportsCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Seguridad Ciudadana";
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcSeguridadCiudadana");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                $location.path('/app/home');
            } else {
                console.log("Error - "+result.error.message);
            }
        });
    }
    $ionicPlatform.ready(function() {
        console.log("Started up!!");
        google.load("feeds", "1",{callback:initialize});
        $ionicLoading.hide();
    });
}])

.controller('CultureCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Cultura";
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcCultura");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                $location.path('/app/home');
            } else {
                console.log("Error - "+result.error.message);
            }
        });
    }
    $ionicPlatform.ready(function() {
        console.log("Started up!!");
        google.load("feeds", "1",{callback:initialize});
        $ionicLoading.hide();
    });
}])

.controller('InstitucionalesCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Institucionales";
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcInstitucionales");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                $location.path('/app/home');
            } else {
                console.log("Error - "+result.error.message);
            }
        });
    }
    $ionicPlatform.ready(function() {
        console.log("Started up!!");
        google.load("feeds", "1",{callback:initialize});
        $ionicLoading.hide();
    });
}])

.controller('InfraestructuraCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Infraestructura y Vialidad";
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcInfraestructuraYVialidad");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                $location.path('/app/home');
            } else {
                console.log("Error - "+result.error.message);
            }
        });
    }
    $ionicPlatform.ready(function() {
        console.log("Started up!!");
        google.load("feeds", "1",{callback:initialize});
        $ionicLoading.hide();
    });
}])

.controller('EntryCtrl', ['$scope', '$rootScope', '$location', '$stateParams', function($scope, $rootScope, $location, $stateParams) {
    console.log('EntryCtrl called');
    if(!$rootScope.entries) $location.path('/');
    $rootScope.notHome = true;
    $scope.index = $stateParams.index;
    $scope.entry = $rootScope.entries[$scope.index];
    $scope.readEntry = function(e) { window.open(e.link, "_blank"); };
}])
;
