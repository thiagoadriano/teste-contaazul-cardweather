(() => {
    'use strict';
    describe('Componente: headerApp', () => {
        var $component;

        beforeEach(module('weathernow'));

        beforeEach(inject((_$componentController_) => {
            $component = _$componentController_;
        }));

        it('Deve garantir o componente sendo instanciado', () => {
            var ctrl = $component('headerApp', null, {});
            expect(ctrl).toBeDefined();
        });
    });
})();
