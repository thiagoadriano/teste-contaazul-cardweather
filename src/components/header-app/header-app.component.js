(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('headerApp', HeaderApp());

    function HeaderApp() {
        return {
            controller: _HeaderAppController,
            templateUrl: 'components/header-app/header-app.component.html'
        };
    }

    /* @ngInject */
    function _HeaderAppController() {
        var vm = this;
    }

})();
