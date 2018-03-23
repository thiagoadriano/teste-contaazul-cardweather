(() => {
    'use strict';
    describe('Componente: loadCard', () => {

        var $component;

        beforeEach(module('weathernow'));

        beforeEach(inject((_$componentController_) => {
            $component = _$componentController_;
        }));
        

        it('Deve garantir o componente sendo instanciado', () => {
            var ctrl = $component('loadCard', null, {});
            expect(ctrl).toBeDefined();
        });

        it('Deve garantir o funcionamento do binding', () => {
            var ctrl = $component('loadCard', null, {
                visible: false
            });
            expect(ctrl.visible).toBeFalsy();

            ctrl.visible = true;
            expect(ctrl.visible).toBeTruthy();
        });
    });
})();