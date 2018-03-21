(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('temperatureCard', TemperatureCard());

    function TemperatureCard() {
        return {
            bindings: {
                value: '@'
            },
            controller: _TemperatureCardController,
            templateUrl: 'components/temperature-card/temperature-card.component.html'
        };
    }

    /* @ngInject */
    function _TemperatureCardController() {
        var vm = this;
    }

})();
