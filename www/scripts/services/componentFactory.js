define(["services/module", "components/webComponentFactory"], function (services, WebFactory) {
    services.factory("componentFactory", function () {
        //Determine which concrete factory object should be used for creating components according to the app execution environment (web/mobile)
        var factory = new WebFactory();
        return factory;
    });
});