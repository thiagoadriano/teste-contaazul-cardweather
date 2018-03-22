(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('footerCard', FooterCard());

    function FooterCard() {
        return {
            bindings: {
                humidity: '@',
                lastUpdate: '@',
                pressure: '@',
                viewData: '<'
            },
            templateUrl: 'components/footer-card/footer-card.component.html'
        };
    }
})();
