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
        vm.citys = [{city: 'Nuuk', country: 'GL'}, {city: 'Urubici', country: 'BR'}, {city: 'Nairob', country: 'KE'}];
    }

})();
