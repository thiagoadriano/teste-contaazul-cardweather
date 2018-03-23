(() => {
    'use strict';
    describe('Componente: footerApp', () => {
        var $component;

        beforeEach(module('weathernow'));

        beforeEach(inject((_$componentController_) => {
            $component = _$componentController_;
        }));

        it('Deve garantir o componente sendo instanciado', () => {
            var ctrl = $component('footerApp', null, {});
            expect(ctrl).toBeDefined();
        });
    });
})();