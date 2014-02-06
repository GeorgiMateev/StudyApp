define(["controllers/module"], function (controllers) {
    controllers.controller("UserbarCtrl", ["$scope", "SecurityService",
     function ($scope, SecurityService) {
         $scope.securityService = SecurityService;

         $scope.$watch("securityService.currentUser", function (newValue, oldValue) {
             if (newValue) {
                 $scope.logged = true;
                 $scope.username = newValue.Username;
             }
             else {
                 $scope.logged = false;
             }
         });


         $scope.logOut = function () {
             SecurityService.logOut();
         }
     } ]);
});