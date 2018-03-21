(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('cardWeather', CardWeather());

    function CardWeather() {
        return {
            bindings: {
              infoData: '<',
              reload: '&',
              showLoad: '<',
              showError: '<'
            },
            controller: _controller,
            templateUrl: 'components/card-weather/card-weather.component.html'
        };
    }

    /* @ngInject */
    function _controller() {
        var vm = this;
    }

})();
