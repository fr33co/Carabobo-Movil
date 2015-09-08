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
          $rootScope.VISIBLE = !$rootScope.VISIBLE;
          }
        
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://carabobo.gob.ve/feed/");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {

                $rootScope.entries = result.feed.entries;
                console.log('move');
               //$location.path('/app/home');
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

.controller('DesarrolloCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Desarrollo Social";
        $rootScope.VISIBLE = false;
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcdesarrollosocial");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
               //$location.path('/app/home');
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

.controller('SaludCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Salud";
        $rootScope.VISIBLE = false;
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcSalud");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                //$location.path('/app/home');
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

.controller('DeporteCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Deportes";
        $rootScope.VISIBLE = false;
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcdeportes");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                //$location.path('/app/home');
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

.controller('EducacionCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Educación";
        $rootScope.VISIBLE = false;
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbceducacion");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                //$location.path('/app/home');
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

.controller('SeguridadCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        $rootScope.TITLE = "Seguridad Ciudadana";
        $rootScope.VISIBLE = false;
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcSeguridadCiudadana");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                //$location.path('/app/home');
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
        $rootScope.VISIBLE = false;
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcCultura");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                //$location.path('/app/home');
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
        $rootScope.VISIBLE = false;
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcInstitucionales");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                //$location.path('/app/home');
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
        $rootScope.VISIBLE = false;
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcInfraestructuraYVialidad");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                //$location.path('/app/home');
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
    $rootScope.VISIBLE = false;
    if(!$rootScope.entries) $location.path('/');
    $rootScope.notHome = true;
    $scope.index = $stateParams.index;
    $scope.entry = $rootScope.entries[$scope.index];
    $scope.readEntry = function(e) { window.open(e.link, "_blank"); };
    var URL = "http://twitter.com/home?status=He%20leido%20%20esta%20noticia:%20";
    var HT = '%20%23GobiernoDeCarabobo';
    $scope.tweetEntry = function(e){ window.open(URL + e.link + HT, "_blank");};
}]);
