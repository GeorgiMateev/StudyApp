define(["everlive", "services/module"], function (Everlive, services) {
    services.service("SecurityService", ["EverliveService", "$cookieStore", "$q", SecurityService]);

    function SecurityService(server, $cookieStore, $q) {
        this.server = server;
        this.$cookieStore = $cookieStore;
        this.currentUser = null;
        this.initialize();
    }
    SecurityService.prototype = {
        constructor: SecurityService,

        initialize: function () {
            var token = this.server.getToken();
            if (!token) {
                token = this.$cookieStore.get("studyApp.token");

                if (token) {
                    this.server.initialize(token);
                }
            }

            var self = this;

            this.server.currentUser()
                .then(function (user) {
                    self.currentUser = user;
                }, function (error) {
                    //TODO: notify for expired session
                    return false;
                });
        },

        isGranted: function () {
        },

        isAuthenticated: function () {
            var token = this.server.getToken();
            if (!token) {
                token = this.$cookieStore.get("studyApp.token");

                if (token) {
                    this.server.initialize(token);
                }
            }
            return !!token;
        },

        login: function (username, password) {
            var self = this;

            return this.server.login(username, password)
                .then(function (token) {
                    self.$cookieStore.put("studyApp.token", token);
                })
                .then(function () {
                    self.server.currentUser()
                        .then(function (user) {
                            self.currentUser = user;
                            return user;
                        }, function (error) {
                            return false;
                        });
                });

        },

        logOut: function () {
            this.$cookieStore.remove("studyApp.token");
            this.server.logOut();
            this.currentUser = null;
        }
    }
});