(function() {
    'use strict';

    angular
        .module('weathernow')
        .config(AppConfig);

    /* @ngInject */
    function AppConfig($locationProvider, $logProvider, $compileProvider) {
        $locationProvider.html5Mode(true);
        $logProvider.debugEnabled(false);
        $compileProvider.debugInfoEnabled(false);
        $compileProvider.commentDirectivesEnabled(false);
        $compileProvider.cssClassDirectivesEnabled(false);
    }
}());
