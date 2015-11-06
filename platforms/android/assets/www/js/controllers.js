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

.controller('HomeCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$http', '$timeout', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $http, $timeout) {
    //$rootScope.msj = false;
    function initialize() {
        console.log('googles init called');
        //$rootScope.msj = true;
        var feed = new google.feeds.Feed("http://carabobo.gob.ve/feed/");
        //console.log($rootScope.msj);         
        feed.setNumEntries(10);
        feed.load(function(result) {
            if(!result.error) {
                //$rootScope.msj = false;
                $rootScope.entries = result.feed.entries;
                console.log('Home Feeds');
                $ionicLoading.hide();
                //console.log($rootScope.msj + 'if');
            } else {
                //$rootScope.msj = true;
                //console.log($rootScope.msj + 'else');
                console.log("Error - "+result.error.message); 
                $ionicLoading.hide();      
                }
        });
    }

    $scope.doRefresh = function(){
        console.log('Trying Refresh')
        google.load("feeds", "1",{callback:initialize});
        $scope.$broadcast('scroll.refreshComplete');        
    }

    $scope.checkNetwork = function(){
        console.log('checking network');
        $ionicLoading.show({
            template: '<ion-spinner icon="android"></ion-spinner>',
            duration: 4000
        });
        google.load("feeds", "1",{callback:initialize});
        //console.log($rootScope.msj);
    }


    $scope.exit = function(){
        ionic.Platform.exitApp();
    }    
    
    $ionicPlatform.ready(function() {
        console.log("Started up!!");
        $scope.checkNetwork(); 
        //$ionicLoading.hide();
    });
}])

.controller('DesarrolloCtrl', ['$ionicPlatform', '$scope', '$rootScope', '$cordovaNetwork', '$ionicLoading', '$location', function($ionicPlatform, $scope, $rootScope, $cordovaNetwork, $ionicLoading, $location) {
    //$ionicLoading.show({ template: 'Cargando...' });
    function initialize() {
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcdesarrollosocial");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('Desarrollo Social Feeds');
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
        console.log('googles init called');
        var feed = new google.feeds.Feed("http://feeds.feedburner.com/gbcSalud");
        feed.setNumEntries(10);
        feed.load(function(result) {
            $ionicLoading.hide();
            if(!result.error) {
                $rootScope.entries = result.feed.entries;
                console.log('move');
                
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

.controller('EntryCtrl', ['$scope', '$rootScope', '$location', '$stateParams', '$cordovaSocialSharing', '$cordovaToast', function($scope, $rootScope, $location, $stateParams, $cordovaSocialSharing, $cordovaToast) {
    console.log('EntryCtrl called');
    if(!$rootScope.entries) $location.path('/');
    $rootScope.notHome = true;
    $scope.index = $stateParams.index;
    $scope.entry = $rootScope.entries[$scope.index];
    $scope.readEntry = function(e) { window.open(e.link,'_system', 'location=no'); return false;};
    
    $scope.ShareSocial = function(e){
        $cordovaSocialSharing.share("He leido esta noticia" + e.title," ", null, e.link)
        .then(function(success){
                $cordovaToast.showShortBottom('Noticia compartida con exito');           
            }, function(error){
                $cordovaToast.showShortBottom('Problemas al compartir noticia, intentelo nuevamente');
            });
            
    };
    /*
    Botones de Compartir  Twitter & Facebook
    var URL = "http://twitter.com/home?status=He%20leido%20%20esta%20noticia:%20";
    var HT = '%20%23GobiernoDeCarabobo';
    $scope.tweetEntry = function(e){ window.open(URL + e.link + HT, '_system', 'location=no'); return false;};

    var URLF = ' http://www.facebook.com/sharer.php?u=';
    var TF = '/&t=He%20leido%20esta%2noticia: ';
    $scope.fbEntry = function(e){ window.open(URLF + e.link + TF, '_system', 'location=no'); return false;};
    */
}]);
