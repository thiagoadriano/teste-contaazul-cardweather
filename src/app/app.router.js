(function() {
    'use strict';

    angular
        .module('weathernow')
        .config(AppRouter);

    /* @ngInject */
    function AppRouter($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }
}());
