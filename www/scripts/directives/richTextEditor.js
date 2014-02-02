define(["directives/module", "services/componentFactory"], function (directives, componentFactory) {
    directives.directive("saRichTextEditor", ["componentFactory", function (componentFactory) {
        return componentFactory.getRichTextEditorDefinition();
    }]);
});