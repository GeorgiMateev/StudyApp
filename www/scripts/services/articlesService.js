define(["services/module", "services/everliveService"], function (services) {
    services.service("ArticlesService", ["EverliveService", ArticlesService]);

    function ArticlesService(server) {
        this.server = server;
    }
    ArticlesService.prototype = {
        constructor: ArticlesService,

        get: function () {
            return this.server.getArticles();
        },

        getById: function (id) {
            return this.server.getArticleById(id);
        },

        create: function (item) {
            return this.server.createArticle(item);
        }
    }
});