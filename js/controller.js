var app = angular.module('coreApp', []);

app.controller('BooksListCtrl', function($scope, $http) {
    $scope.showAll = true;

    $http({
      method: 'GET',
      url: '/books.json'
    }).then(function successCallback(response) {
        $scope.books = response.data;
      }, function errorCallback(response) {
        $scope.errorData = true;
      });

});