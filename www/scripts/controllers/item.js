define(["controllers/module", "services/loader"], function (controllers) {
    controllers.controller("ItemCtrl", ["$scope", "$location", "item", "options", "modelService",
     function ($scope, $location, item, options, modelService) {
         $scope.item = item;
         $scope.options = options;
         $scope.create = function () {
             modelService.create($scope.item)
                 .then(function (data) {
                     $location.path("/article/" + data.Id);
                     $location.replace();
                 });
         };
     } ]);
})