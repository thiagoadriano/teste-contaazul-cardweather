(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('headerApp', HeaderApp());

    function HeaderApp() {
        return {
            templateUrl: 'components/header-app/header-app.component.html'
        };
    }
})();
