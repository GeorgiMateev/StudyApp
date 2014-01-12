define(["controllers/module"], function (controllers) {
    controllers.controller("MasterCtrl", ["$scope", "$location", function ($scope, $location) {
        $scope.navigate = function (item) {
            $scope.modelService.cacheItem(item);
            $location.search("id", item.Id);
        };
    } ]);
});