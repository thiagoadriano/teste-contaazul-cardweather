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
            templateUrl: 'components/temperature-card/temperature-card.component.html'
        };
    }
})();
