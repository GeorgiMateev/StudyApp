require.config({
    paths: {
        angular: "../bower_components/angular/angular",
        ngRoute: "../bower_components/angular-route/angular-route",
        jquery: "../bower_components/jquery/jquery",
        bootstrap: "../bower_components/bootstrap/dist/js/bootstrap",
        domReady: "../bower_components/requirejs-domready/domReady"
    },
    shim: {
        angular: {
            deps: ["jquery"],
            exports: "angular"
        },
        ngRoute: {
            deps: ["angular"]
        }
    }
});

require(["domReady", "angular", "app"],
 function (domReady, angular, app) {
    domReady(function () {
        angular.bootstrap(document, ['studyApp']);
    });
});