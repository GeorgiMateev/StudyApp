define(["angular", "controllers/loader", "services/loader", "directives/loader", "ngRoute", "uiRouter", "ngSanitize", "ngCookies"],
 function (angular) {
     var module = angular.module('studyApp', ['studyApp.controllers', 'studyApp.services', 'studyApp.directives', 'ngRoute', 'ngSanitize','ngCookies', 'ui.router'])
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
                  isGranted: function (securityService) {
                      return securityService.isAuthenticated();
                  },

                  display: {
                      action: "create"
                  }
              }
          })
          .state('login', {
              url: "/app/login",
              templateUrl: "views/login.html",
              controller: "LoginCtrl",
              resolve: {
                  securityService: function (SecurityService) {
                      return SecurityService;
                  }
              }
          })
      })
      .run(function ($rootScope, $state, SecurityService) {
          $rootScope.$on('$stateChangeStart', function (e, to) {
              if (to.data && angular.isFunction(to.data.isGranted)) {
                  var result = to.data.isGranted(SecurityService)
                   if (!result) {
                       e.preventDefault();
                       $state.go("login", { action: to.name }, { notify: true, location: "replace" });
                   }
              }
          });
      });

     return module;
 });


