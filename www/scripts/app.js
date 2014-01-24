define(["angular", "controllers/loader", "services/loader", "directives/loader", "ngRoute", "uiRouter"],
 function (angular) {
     var module = angular.module('studyApp', ['studyApp.controllers', 'studyApp.services', 'studyApp.directives', 'ngRoute', 'ui.router'])
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
                  action: "details"
              }
          })
          .state('articles.new', {
              url: "/articles/new",
              templateUrl: "views/article.html",
              controller: "DetailsCtrl",
              data: {
                  action: "create"
              }
          })
      });

     return module;
 });


