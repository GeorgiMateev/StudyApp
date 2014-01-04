define(["controllers/module"], function (controllers) {
    controllers.controller("ListCtrl", ["$scope", "items", function ($scope, items) {
        $scope.items = items;
    } ]);
});