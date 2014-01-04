define(["services/module", "services/everliveService"], function (services) {
    services.service("ArticlesService", ["EverliveService", ArticlesService]);

    function ArticlesService(server) {
        this.server = server;
    }
    ArticlesService.prototype = {
        constructor: ArticlesService,

        allArticles: function () {
            return this.server.allArticles();
        }
    }
});