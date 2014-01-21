define(["directives/module"], function (directives) {
    directives.directive("saInputTextField", function () {
        return {
            restrict: "AE",
            templateUrl: "scripts/templates/inputTextField.html",
            //scope: {
            //    item: "="
            //},
            link: function (scope, element, attrs) {
                //scope.action = "details";

                //scope.$watch("action", function (newValue, oldValue) {
                //    scope.action = eventArgs.action;
                //});
            }
        }
    });
});