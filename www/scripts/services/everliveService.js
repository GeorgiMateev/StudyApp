define(["everlive", "services/module"], function (Everlive, services) {
    services.service("EverliveService", ["$q", EverliveService]);

    function EverliveService($q) {
        this.$q = $q;
        this.el = new Everlive('8qaUUGsklz3hoNUq');
    }
    EverliveService.prototype = {
        constructor: EverliveService,

        getArticles: function () {
            var delay = this.$q.defer();

            this.el.data("Article").get()
                .then(function (data) {
                    delay.resolve(data.result);
                },
                function (error) {
                    delay.reject(JSON.stringify(error));
                });

            return delay.promise;
        },

        getArticleById: function (id) {
            var delay = this.$q.defer();

            this.el.data("Article").getById(id)
            .then(function (data) {
                delay.resolve(data.result);
            },
            function (error) {
                delay.reject(JSON.stringify(error));
            });

            return delay.promise;
        },

        createArticle: function (article) {
            var delay = this.$q.defer();
            var self = this;
            this.el.Users.login('admin',
                'admin@2',
                function (data) {
                    self.el.data("Article")
                        .create(article,
                            function (data) {
                                delay.resolve(data.result);
                            },
                            function (error) {
                                delay.reject(JSON.stringify(error));
                            });
                },
                function (error) {
                    alert(JSON.stringify(error));
                });



            return delay.promise;
        }
    }
});