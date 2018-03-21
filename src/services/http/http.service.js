(function() {
    'use strict';

    angular
        .module('weathernow')
        .service('HttpService', HttpService);

    /* @ngInject */
    function HttpService($http, $rootScope) {
        this.get  = get;
        this.post = post;
        this.put  = put;

        function _error(error) {
            throw error;
        }

        function _success(data, status, headers, config) {
            return data.data;
        }

        function get(url, params) {
            return $http
                .get(url, { params: params })
                .then(_success)
                .catch(_error);
        }

        function post(url, params) {
            return $http
                .post(url, params)
                .then(_success)
                .catch(_error);
        }

        function put(url, params) {
            return $http
                .put(url, params)
                .then(_success)
                .catch(_error);
        }
    }
})();
