// MODULE
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
angularApp.controller('mainController', function ($scope, $log, $filter, $resource) {
    $scope.name = 'Nicola';
    $scope.formattedName = $filter('uppercase')($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.formattedName);
    
    console.log($resource);
});