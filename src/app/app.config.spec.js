(() => {
    'use strict';
    describe('App: Configurações', () => {
        var $locationProvider;

        beforeEach(() => {
            module((_$locationProvider_) => {
                $locationProvider = _$locationProvider_;
            });

            module('weathernow');
            inject();
        });

        it('Deve garantir que config foi definido', () => {
            expect($locationProvider.html5Mode()).toBeTruthy();
        });
    });
})();
