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
      } ]);
 });