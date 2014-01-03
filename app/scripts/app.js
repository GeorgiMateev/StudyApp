define(["angular", "controllers/loader", "ngRoute"],
 function (angular) {
     var module = angular.module('studyApp', ['studyApp.controllers', 'ngRoute'])
      .config(function ($routeProvider) {
          $routeProvider
          .when('/', {
              templateUrl: 'views/main.html',
              controller: 'MainCtrl'
          })
          .otherwise({
              redirectTo: '/'
          });
      });

     return module;
 });


