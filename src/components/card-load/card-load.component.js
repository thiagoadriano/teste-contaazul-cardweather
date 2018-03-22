(function() {
    'use strict';

    angular
        .module('weathernow')
        .component('loadCard', LoadCard());

    function LoadCard() {
        return {
            bindings: {
                visible: '<'
            },
            controller: _LoadCardController,
            templateUrl: 'components/card-load/card-load.component.html'
        };
    }

    /* @ngInject */
    function _LoadCardController() {
        var vm = this;
    }

})();
