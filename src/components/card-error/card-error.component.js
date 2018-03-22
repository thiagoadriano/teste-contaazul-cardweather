(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('errorCard', ErrorCard());

    function ErrorCard() {
        return {
            bindings: {
                onRefresh: '&',
                visible: '<'
            },
            controller: _ErrorCardController,
            templateUrl: 'components/card-error/card-error.component.html'
        };
    }

    /* @ngInject */
    function _ErrorCardController() {
        var vm = this;
    }

})();
