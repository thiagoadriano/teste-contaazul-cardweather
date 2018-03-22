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
            controller: _controller,
            templateUrl: 'components/card-error/card-error.component.html'
        };
    }
    
    function _controller() {
        var vm = this;
    }
})();
