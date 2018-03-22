(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('headerCard', HeaderCard());

    function HeaderCard() {
        return {
            bindings: {
                title: '@'
            },
            templateUrl: 'components/header-card/header-card.component.html'
        };
    }
})();
