(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('footerApp', FooterApp());

    function FooterApp() {
        return {
            controller: _FooterAppController,
            templateUrl: 'components/footer-app/footer-app.component.html'
        };
    }

    /* @ngInject */
    function _FooterAppController() {
        var vm = this;
    }

})();
