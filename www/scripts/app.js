define(["angular", "controllers/loader", "services/loader", "ngRoute"],
 function (angular) {
     var module = angular.module('studyApp', ['studyApp.controllers', 'studyApp.services', 'ngRoute'])
      .config(function ($routeProvider) {
          $routeProvider
          .when('/', {
              templateUrl: 'views/main.html',
              controller: 'ListCtrl',
              resolve: {
                  items: function (ArticlesService) {
                      return ArticlesService.allArticles();
                  }
              }
          })
          .otherwise({
              redirectTo: '/'
          });
      });

     return module;
 });


