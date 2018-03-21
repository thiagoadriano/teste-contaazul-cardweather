(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('homePage', HomeComponent());

    function HomeComponent() {
        return {
            controller: _HomeController,
            templateUrl: 'pages/home/home.template.html'
        };
    }

    /* @ngInject */
    function _HomeController() {
        var vm = this;
    }

})();
