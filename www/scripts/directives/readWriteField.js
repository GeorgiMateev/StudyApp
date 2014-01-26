define(["directives/module"], function (directives) {
    directives.directive("saReadWriteField", ["$q", function ($q) {
        return {
            restrict: "AE",
           repalce: true,
            transclude: "true",
            templateUrl: "scripts/templates/readWriteField.html",
            scope: {
                //Display options for the whole page
                display: "=display",

                //Data item
                item: "=item",

                //The item field's name which is bound to this field directive
                fieldName: "@fieldName",

                //Service which provides "update" method for the item property
                modelService: "=modelService"
            },
            link: function (scope, element, attrs, nullC, transclude) {
                transclude(scope, function (clone) {
                    element.before(clone);
                });

                //Dispplay options local for the field
                scope.fieldDisplay = {};
                scope.fieldDisplay.action = scope.display.action;

                //Sync the local display options with the parent ones
                scope.$watch("display.action", function (newValue, oldValue) {
                    scope.fieldDisplay.action = newValue;
                });

                scope.edit = function () {
                    scope.fieldDisplay.action = "edit";
                },
                scope.save = function () {
                    var value = {};
                    value["Id"] = scope.item.Id;
                    value[scope.fieldName] = scope.item[scope.fieldName];

                    scope.modelService.update(value)
                        .then(function (data) {
                            scope.fieldDisplay.action = "details";
                        });
                }
            }
        }
    } ]);
});