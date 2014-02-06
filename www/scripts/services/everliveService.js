define(["everlive", "services/module"], function (Everlive, services) {
    services.service("EverliveService", ["$q", EverliveService]);

    function EverliveService($q) {
        this.$q = $q;
        this.initialize();
    }
    EverliveService.prototype = {
        constructor: EverliveService,

        initialize: function (token) {
            var apiKey = '8qaUUGsklz3hoNUq';
            if (token) {
                this.el = new Everlive({
                    apiKey: apiKey,
                    token: token
                });
            }
            else {
                this.el = new Everlive(apiKey);
            }
        },

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

            this.el.data("Article")
                .create(article,
                    function (data) {
                        delay.resolve(data.result);
                    },
                    function (error) {
                        delay.reject(JSON.stringify(error));
                    });

            return delay.promise;
        },

        updateArticle: function (value) {
            var delay = this.$q.defer();
            var self = this;

            this.el.data("Article")
                .updateSingle(value,
                    function (data) {
                        delay.resolve(data.result);
                    },
                    function (error) {
                        delay.reject(JSON.stringify(error));
                    });

            return delay.promise;
        },

        currentUser: function () {
            var delay = this.$q.defer();
            var self = this;

            this.el.Users.currentUser()
                .then(function (data) {
                    delay.resolve(data.result);
                },
                function (error) {
                    delay.reject(JSON.stringify(error));
                });

            return delay.promise;
        },

        getToken: function () {
            return this.el.setup.token;
        },

        login: function (username, password) {
            var delay = this.$q.defer();
            var self = this;

            this.el.Users.login(username, password,
                function (data) {
                    delay.resolve(data.result.access_token);
                }, function (error) {
                    delay.reject(error);
                });

            return delay.promise;
        },

        logOut: function () {
            //create new everlive instance without authentication token
            this.initialize();
        }
    }
});