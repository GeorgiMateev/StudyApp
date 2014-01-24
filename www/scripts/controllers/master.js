define(["controllers/module"], function (controllers) {
    controllers.controller("MasterCtrl", ["$scope", "$location", "$state", "modelService",
     function ($scope, $location, $state, modelService) {
         modelService.get()
                    .then(function (items) {
                        $scope.items = items;
                    });

         $scope.navigate = function (item) {
             modelService.cacheItem(item);
             $state.go("articles.details", {id: item.Id});
         };
     } ]);
});