define(["angular", "controllers/loader", "services/loader", "ngRoute"],
 function (angular) {
     var module = angular.module('studyApp', ['studyApp.controllers', 'studyApp.services', 'ngRoute'])
      .config(function ($routeProvider, $locationProvider) {
          $routeProvider
          .when('/', {
              reloadOnSearch: false,
              templateUrl: "views/masterDetail.html",
              controller: "MasterDetailsCtrl",
              resolve: {                  
                  templates: function () {
                      return {
                          master: "views/master.html",
                          details: "views/article.html"
                      }
                  },
                  modelService: function (ArticlesService) {
                      return ArticlesService;
                  }
              }              
          }).otherwise({
              redirectTo: '/'
          });
      });

     return module;
 });


