(function() {
    'use strict';

    angular
        .module('weathernow')
        .service('WeatherService', WeatherService);

    /* @ngInject */
    function WeatherService(HttpService, API_KEY, API_URL) {
        var query = {
          q: '',
          units: 'metric',
          appid: API_KEY
        };

        this.getMetrics = getMetrics;

        function getMetrics(cityState) {
          var _query = angular.copy(query);
          _query.q = cityState;
          return HttpService.get(API_URL, _query);
        }

    }
})();
