(function() {
    'use strict';

    angular
        .module('weathernow')
        .constant('API_KEY', 'acfcabc0159b253aa081c9fe3bbc8af2')
        .constant('MINUTES_TIME_REFRESH', 10)
        .constant('API_URL', 'http://api.openweathermap.org/data/2.5/find');
}());
