var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

require.config({
    baseUrl: "/base/www/scripts",

    paths: {
        jquery: "../bower_components/jquery/jquery",
        angular: "../bower_components/angular/angular",
        ngMocks: "../bower_components/angular-mocks/angular-mocks"
    },

    shim: {
        angular: {
            deps: ["jquery"],
            exports: "angular"
        },
        ngMocks: {
            deps: ['angular']
        }
    },

    deps: tests,

    callback: window.__karma__.start
});