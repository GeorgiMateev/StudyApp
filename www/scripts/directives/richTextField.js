define(["directives/module"], function (directives) {
    directives.directive("saRichTextField", function () {
        return {
            restrict: "AE",
            templateUrl: "scripts/templates/richTextField.html",
            link: function (scope, element, attrs) {
            }
        }
    });
});