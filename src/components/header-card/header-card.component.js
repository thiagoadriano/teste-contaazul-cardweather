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
            controller: _HeaderCardController,
            templateUrl: 'components/header-card/header-card.component.html'
        };
    }

    /* @ngInject */
    function _HeaderCardController() {
        var vm = this;
    }

})();
