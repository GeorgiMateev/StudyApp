define(["controllers/module", "services/loader"], function (controllers) {
    controllers.controller("MasterDetailsCtrl", ["$scope", "$location", "templates", "modelService",
     function ($scope, $location, templates, modelService) {
         $scope.templates = templates;
         $scope.modelService = modelService;

         var navigate = function () {
             var searchParams = $location.search();
             if (searchParams["new"]) {
                 $scope.view = "details";
                 $scope.action = "create";
                 $scope.item = {};
             }
             else if (searchParams["id"]) {
                 var id = searchParams["id"];
                 var fromCache = true;

                 modelService.getById(id, fromCache)
                    .then(function (item) {
                        $scope.item = item;
                    });
                 $scope.view = "details";
                 $scope.action = "details";
             }
             else {
                 modelService.get()
                    .then(function (items) {
                        $scope.items = items;
                    });
                 $scope.view = "master";
             }
         };

         navigate();

         $scope.$on("$routeUpdate", function (event, route) {
             navigate();
         });
     } ]);
});