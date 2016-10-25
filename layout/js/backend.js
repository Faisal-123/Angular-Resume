$(document).ready(function(){
    // typed.js call function
    $(".navbar-form [value]").typed({
        strings: ["Web Developer", "Web Designer" , "A freak .... " , "Faisal Hijazi ʚïɞ"],
        typeSpeed: 50
    });
});
// angular Routing code
var resumeApp = angular.module('resumeApp' , ['ngRoute']);

resumeApp.config(function ($routeProvider){
  $routeProvider

  .when('/', {
     templateUrl : 'pages/timeline.html',
     controller  : 'mainController'
   })

   .when('/about', {
     templateUrl : 'pages/about.html',
     controller  : 'aboutController'
   })
   .when('/portfolio', {
     templateUrl : 'pages/portfolio.html',
     controller  : 'portfolioController'
   })
   .when('/contact', {
     templateUrl : 'pages/contact.html',
     controller  : 'contactController'
   });
});
resumeApp.controller('mainController', function($scope) {
  $scope.message = 'animate-view';
});
resumeApp.controller('aboutController', function($scope) {
      $scope.message = 'animate-view';
});
resumeApp.controller('portfolioController', function($scope) {
      $scope.message = 'animate-view';
});
resumeApp.controller('contactController', function($scope) {
      $scope.message = 'animate-view';
});
