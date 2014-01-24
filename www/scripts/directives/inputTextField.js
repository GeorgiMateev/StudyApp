define(["directives/module"], function (directives) {
    directives.directive("saInputTextField", function () {
        return {
            restrict: "AE",
            templateUrl: "scripts/templates/inputTextField.html",
            link: function (scope, element, attrs) {
            }
        }
    });
});