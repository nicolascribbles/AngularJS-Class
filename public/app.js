// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);
angularApp.config(function ($routeProvider) {
  
  $routeProvider
  .when('/', {
    templateUrl: '/pages/main.html',
    controller: 'mainController' 
  })
  .when('/second/', {
    templateUrl: '/pages/second.html',
    controller: 'secondController'
  })
  .when('/second/:num', {
    templateUrl: '/pages/second.html',
    controller: 'secondController'
  });
  
});
angularApp.service('nameService', function(){
  var self = this;
  this.name = 'Nicola Reyes';
  this.namelength = function(){
    return self.name.length;
  }
});
// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$http', '$location', '$log', 'nameService', function ($scope, $filter, $http, $location, $log, nameService) {
  
  $scope.name = nameService.name;
  
  $scope.$watch('name', function(){
   nameService.name = $scope.name;
  });
  
  $scope.handle = '';
  $scope.lowercaseHandle = function() {
    return $filter('lowercase')($scope.handle);
  };
  $scope.characters = 5;


  $scope.alertClick = function() {
    alert("Clicked!");
    console.log('click!!!');
  };
  var rulesrequest = new XMLHttpRequest();

  $http.get('/api')
    .success(function(result){
      $scope.rules = result;
    })
    .error(function(data, status) {
      console.log(data);
    });

  $scope.newRule = '';
  $scope.addRule = function(){
    $http.post('/api', {
      RuleName: $scope.newRule
    })
    .success(function(result){
      $scope.rules = result;
      $scope.newRule = '';
    })
    .error(function(data, status){
      console.log(data);
    })
  };
  $log.info($location.path());
  $log.log(nameService.name);
  $log.log(nameService.namelength());

}]);
angularApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService',  function ($scope, $log, $routeParams, nameService) {
  $scope.handle = 'nicolascribbles';
  $scope.num = $routeParams.num || 1;
  $scope.name = nameService.name;
  $scope.$watch('name', function(){
    nameService.name = $scope.name;
  });
}]);

// Commented Code
//   THIS IS THE NATIVE WAY  
//    rulesrequest.onreadystatechange = function() {
//      $scope.$apply(function(){
//        if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
//
//            $scope.rules = JSON.parse(rulesrequest.responseText);
//
//            $scope.$digest();
//        }});
//    };
//    
//    rulesrequest.open("GET", "http://localhost:3000/api");
//    rulesrequest.send();

    
//    $scope.$watch('handle', function(newValue, oldValue){
//      
//      console.info('Changed!');
//      console.log('Old: ' + oldValue);
//      console.log('New: ' + newValue);
//      
//    });
//
//    $timeout(function(){$scope.handle = 'newtwitterhandle';}, 3000);
// Commented Code