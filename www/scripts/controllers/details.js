define(["controllers/module", "services/loader", "directives/loader"], function (controllers) {
    controllers.controller("DetailsCtrl", ["$scope", "$location", "$state", "$stateParams", "modelService",
     function ($scope, $location, $state, $stateParams, modelService) {
         var id = $stateParams.id;
         var fromCache = true;

         if (id) {
             modelService.getById(id, fromCache)
                .then(function (item) {
                    $scope.item = item;
                });
         }
         else {
             $scope.item = {};
         }

         $scope.modelService = modelService;
         $scope.display = $state.current.data.display;

         $scope.create = function () {
             modelService.create($scope.item)
                 .then(function (data) {
                     $scope.item.Id = data.Id;
                     $scope.item.CreatedAt = data.CreatedAt;

                     modelService.cacheItem($scope.item);

                     $state.go("articles.details", { id: $scope.item.Id }, { location: "replace" });
                 });
         };
     } ]);
})