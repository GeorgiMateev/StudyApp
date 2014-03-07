define(["controllers/module"],
 function (controllers) {
     controllers.controller('LoginCtrl', ["$scope", "$state", "$stateParams", "securityService",
      function ($scope, $state, $stateParams, securityService) {
          $scope.login = function () {
              var name = $scope.saUsername;
              var pass = $scope.saPassword;

              securityService.login(name, pass)
                  .then(function (data) {
                      var state = $stateParams.action || "articles.list";
                      $state.go(state);
                  }, function (error) {
                      $scope.error = true;
                      $scope.errorMessage = error.message;
                  });
          };

          $scope.register = function () {
              var name = $scope.saNewUsername;
              var pass1 = $scope.saNewPassword1;
              var pass2 = $scope.saNewPassword2;

              var fields = {
                    Email: $scope.saNewEmail
                  };

              if (pass1 !== pass2) {
                  $scope.registerError = true;
                  $scope.errorMessage = "The passwords don't match.";
              }

              securityService.register(name, pass1, fields)
                  .then(function (data) {
                      var state = $stateParams.action || "articles.list";
                      $state.go(state);
                  }, function (error) {
                      $scope.registerError = true;
                      $scope.errorMessage = error.message;
                  });
          };

          $scope.facebookLogin = function () {
              securityService.loginWithFacebook();
          }
      } ]);
 });