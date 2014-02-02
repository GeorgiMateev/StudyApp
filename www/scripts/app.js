define(["angular", "controllers/loader", "services/loader", "directives/loader", "ngRoute", "uiRouter", "ngSanitize"],
 function (angular) {
     var module = angular.module('studyApp', ['studyApp.controllers', 'studyApp.services', 'studyApp.directives', 'ngRoute', 'ngSanitize', 'ui.router'])
      .config(function ($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise("/");

          $stateProvider
          .state('articles', {
              abstract: true,
              template: '<ui-view/>',
              resolve: {
                  modelService: function (ArticlesService) {
                      return ArticlesService;
                  }
              }
          })
          .state('articles.list', {
              url: "/",
              templateUrl: "views/master.html",
              controller: "MasterCtrl"
          })
          .state('articles.details', {
              url: "/:id",
              templateUrl: "views/article.html",
              controller: "DetailsCtrl",
              data: {
                  display: {
                      action: "details"
                  }                  
              }
          })
          .state('articles.new', {
              url: "/articles/new",
              templateUrl: "views/article.html",
              controller: "DetailsCtrl",
              data: {
                  display: {
                      action: "create"
                  }
              }
          })
      });

     return module;
 });


