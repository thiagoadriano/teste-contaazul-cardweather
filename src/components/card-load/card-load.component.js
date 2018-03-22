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
            templateUrl: 'components/card-load/card-load.component.html'
        };
    }
})();
