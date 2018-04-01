(function() {
    'use strict';

    angular
        .module('weathernow')
        .run(AppRun);

    /* @ngInject */
    function AppRun(amMoment) {
        amMoment.changeLocale('pt-br');
    }
}());
