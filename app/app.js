angular.module('app', ['ngRoute'])

  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginController as loginCtrl',
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
      })
        .when('/cadastro.pai', {
            templateUrl: 'views/cadastro-pai.html',
            controller: 'CadastroPaiController as cadastroPaiCtrl',
        })
      .otherwise({redirectTo: '/'});

  });