define(["services/module", "services/everliveService"], function (services) {
    services.service("ArticlesService", ["EverliveService", "$q", ArticlesService]);

    function ArticlesService(server, $q) {
        this.server = server;
        this.$q = $q;
        this.cachedItem = null;
    }
    ArticlesService.prototype = {
        constructor: ArticlesService,

        get: function () {
            return this.server.getArticles();
        },

        getById: function (id, fromCache) {
            var delay = this.$q.defer();

            if (fromCache && this.cachedItem && this.cachedItem.Id == id) {
                delay.resolve(this.cachedItem);
                return delay.promise;
            }
            else {
                return this.server.getArticleById(id);
            }
        },

        create: function (item) {
            return this.server.createArticle(item);
        },

        cacheItem: function (item) {
            this.cachedItem = item;
        },

        update: function (value) {
            return this.server.updateArticle(value);
        }
    }
});