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
                /* Private methods */
                function setDisplayOptions(action) {
                    if (action === "create" || action === "edit") {
                        scope.fieldDisplay.action = action;
                        scope.fieldDisplay.mode = "edit";
                    }
                    else {
                        scope.fieldDisplay.action = "details";
                        scope.fieldDisplay.mode = "view";
                    }
                };

                //Assign the current scope to the transcuded content of the directive and append this content before the template
                transclude(scope, function (clone) {
                    element.before(clone);
                });

                //Set display options local for the field
                scope.fieldDisplay = {};
                setDisplayOptions(scope.display.action)

                //Sync the local display options with the parent ones
                scope.$watch("display.action", function (newValue, oldValue) {
                    setDisplayOptions(newValue);
                });

                scope.edit = function () {
                    //Save the original value so if the edit is canceled it can be restored
                    var original = scope.item[scope.fieldName];
                    scope.originalFieldValue = original;

                    scope.fieldDisplay.mode = "edit";
                },
                scope.save = function () {
                    var value = {};
                    value["Id"] = scope.item.Id;
                    value[scope.fieldName] = scope.item[scope.fieldName];

                    scope.modelService.update(value)
                        .then(function (data) {
                            scope.fieldDisplay.mode = "view";
                        });
                },
                scope.cancel = function () {
                    //Restore the field's original value
                    scope.item[scope.fieldName] = scope.originalFieldValue;

                    scope.fieldDisplay.mode = "view";
                }
            }
        }
    } ]);
});