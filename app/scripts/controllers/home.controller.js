angular.module('app')
  .controller('HomeController', function ($scope, $http) {

    var root = 'https://leonardoads.pythonanywhere.com/OrganizeBaby/default/api';

      $scope.listaPais = [];

    $http({
      method: "GET",
      url: root + '/pais.json',
    }).then(function mySucces(response) {
        $scope.listaPais = response.data.content;
        console.log($scope.listaPais);
    }, function myError(response) {
    });

  });