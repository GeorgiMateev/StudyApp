define(["angular", "controllers/loader", "services/loader", "ngRoute"],
 function (angular) {
     var module = angular.module('studyApp', ['studyApp.controllers', 'studyApp.services', 'ngRoute'])
      .config(function ($routeProvider, $locationProvider) {
          $routeProvider
          .when('/', {
              templateUrl: 'views/main.html',
              controller: 'ListCtrl',
              resolve: {
                  items: function (ArticlesService) {
                      return ArticlesService.get();
                  }
              }
          })
          .when('/article/:articleId', {
              templateUrl: "views/article.html",
              controller: "ItemCtrl",
              resolve: {
                  item: function (ArticlesService, $route) {
                      var id = $route.current.params.articleId;
                      return ArticlesService.getById(id);
                  },
                  options: function () {
                      return {
                          edit: false
                      }
                  },
                  modelService: function (ArticlesService) {
                      return ArticlesService
                  }
              }
          })
          .when("/article", {
              templateUrl: "views/article.html",
              controller: "ItemCtrl",
              resolve: {
                  item: function () {
                      return {}
                  },
                  options: function () {
                      return {
                          edit: true
                      }
                  },
                  modelService: function (ArticlesService) {
                      return ArticlesService
                  }
              }
          })
          .otherwise({
              redirectTo: '/'
          });
      });

     return module;
 });


