// MODULE
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
// For one of my changes in this update for the class, I learned to replace the function with an array where the function lives so that minification doesn't destroy my dependency injections
angularApp.controller('mainController', ['$scope', '$log', function ($scope, $log, $filter, $resource) {
    $scope.name = 'Nicola';
    $scope.formattedName = $filter('uppercase')($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.formattedName);
    
    console.log($resource);
}]);