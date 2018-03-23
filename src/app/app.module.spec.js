(() => {
    'use strict';
    describe('Module: weathernow', () => {
        var dependencies = [];

        beforeEach(module('weathernow'));

        const hasModule = module => dependencies.indexOf(module) >= 0;

        it('Deve garantir que os módulos foram definidos', () => {
            expect(hasModule('weathernow')).toBeDefined();
        });
    });
})();