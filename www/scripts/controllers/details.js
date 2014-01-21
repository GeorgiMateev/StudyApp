define(["controllers/module", "services/loader", "directives/loader"], function (controllers) {
    controllers.controller("DetailsCtrl", ["$scope", "$location",
     function ($scope, $location) {
         $scope.$watch("action", function (newValue, oldValue) {
              $scope.$broadcast("changeAction", {action: newValue});
         });

         $scope.create = function () {
             $scope.modelService.create($scope.item)
                 .then(function (data) {
                     $scope.item.Id = data.Id;
                     $scope.item.CreatedAt = data.CreatedAt;

                     $scope.modelService.cacheItem($scope.item);

                     $location.search("new", null);
                     $location.search("id", data.Id);
                     $location.replace();
                 });
         };
     } ]);
})