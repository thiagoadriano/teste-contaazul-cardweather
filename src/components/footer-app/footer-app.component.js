(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('footerApp', FooterApp());

    function FooterApp() {
        return {
            templateUrl: 'components/footer-app/footer-app.component.html'
        };
    }
})();
