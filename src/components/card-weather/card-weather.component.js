(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('cardWeather', CardWeather());

    function CardWeather() {
        return {
            bindings: {
              city: '<',
            },
            controller: _controller,
            templateUrl: 'components/card-weather/card-weather.component.html'
        };
    }

    /* @ngInject */
    function _controller() {
        var vm = this;
        vm.showError = false;
        vm.showLoad = false;
        vm.reload = reload;

        function reload() {

        }

    }

})();
