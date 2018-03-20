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
                views: {
                    'conteudo': {
                        controller: 'HomeController as vm',
                        templateUrl: '/pages/home/home.template.html'
                    }
                }
            });
    }
}());
