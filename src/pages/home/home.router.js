(function() {
    'use strict';

    angular
        .module('weathernow')
        .config(HomeRouter);

    /* @ngInject */
    function HomeRouter($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                component: 'homePage'
            });
    }
}());
