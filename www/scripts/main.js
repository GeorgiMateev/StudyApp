require.config({
    paths: {
        angular: "../bower_components/angular/angular",
        uiRouter: "../vendor/angular-ui-router/angular-ui-router",
        ngRoute: "../bower_components/angular-route/angular-route",
        ngSanitize: "../bower_components/angular-sanitize/angular-sanitize",
        jquery: "../bower_components/jquery/jquery",
        bootstrap: "../bower_components/bootstrap/dist/js/bootstrap",
        domReady: "../bower_components/requirejs-domready/domReady",
        underscore: "../vendor/everlive/src/underscore",
        rsvp: "../vendor/everlive/src/rsvp-latest.amd",
        reqwest: "../vendor/everlive/src/reqwest",
        jstz: "../vendor/everlive/src/jstz",
        everlive: "../vendor/everlive/src/everlive",
        tinyMce: "../vendor/tinymce/tinymce.min"
    },
    shim: {
        angular: {
            deps: ["jquery"],
            exports: "angular"
        },
        ngSanitize: {
            deps: ["angular"]
        },
        ngRoute: {
            deps: ["angular"]
        },
        uiRouter: {
            deps: ["angular"]
        },
        underscore: {
          exports: "_"
        }
    }
});

require(["domReady", "angular", "app"],
 function (domReady, angular, app) {
     domReady(function () {
         angular.bootstrap(document, ['studyApp']);
     });
 });