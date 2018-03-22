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
    function _HomeController($window) {
        var vm = this;
        vm.citys = [{city: 'Nuuk', country: 'GL'}, {city: 'Urubici', country: 'BR'}, {city: 'Nairobi', country: 'KE'}];
        vm.selectedCity = 'Urubici';

        vm.$onInit = onInit;
        vm.selectCity = selectCity;

        function onInit() {
            var _larg = $window.innerWidth;
            if (_larg < 1024) {
                vm.citys.sort(function(objA, objB) {
                    return objA.city < objB.city;
                });
            }
        }

        function selectCity(city) {
            vm.selectedCity = city;
        }
    }

})();
