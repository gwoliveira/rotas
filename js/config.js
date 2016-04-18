angular.module("rotas", ["ngRoute"])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/principal', {
        templateUrl: 'view/principal.html',

      }).when('/sobre', {
        templateUrl: 'view/sobre.html',
      })

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  });
