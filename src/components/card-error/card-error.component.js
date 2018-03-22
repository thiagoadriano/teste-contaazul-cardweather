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
            templateUrl: 'components/card-error/card-error.component.html'
        };
    }
})();
