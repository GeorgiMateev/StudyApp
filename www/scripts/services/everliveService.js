define(["everlive", "services/module"], function (Everlive, services) {
    services.service("EverliveService", ["$q", EverliveService]);

    function EverliveService($q) {
        this.$q = $q;
        this.el = new Everlive('8qaUUGsklz3hoNUq');
    }
    EverliveService.prototype = {
        constructor: EverliveService,

        allArticles: function () {
            var delay = this.$q.defer();

            this.el.data("Article").get()
                .then(function (data) {
                    delay.resolve(data.result);
                },
                function (error) {
                    delay.reject(JSON.stringify(error));
                });

            return delay.promise;
        }
    }
});