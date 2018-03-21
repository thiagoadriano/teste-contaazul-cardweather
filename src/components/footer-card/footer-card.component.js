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
            controller: _FooterCardController,
            templateUrl: 'components/footer-card/footer-card.component.html'
        };
    }

    /* @ngInject */
    function _FooterCardController() {
        var vm = this;
    }

})();
