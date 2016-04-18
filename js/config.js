app
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/principal', {
        templateUrl: 'view/principal.html',
        controller: 'PrincipalCtrl'
      })
      .when('/sobre', {
        templateUrl: 'view/sobre.html',
        controller: 'SobreCtrl'
      })
      .otherwise({
        redirectTo: '/principal'
      });


  });
