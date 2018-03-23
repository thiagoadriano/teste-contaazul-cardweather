(() => {
    'use strict';
    describe('Componente: temperatureCard', () => {
        var $component;

        beforeEach(module('weathernow'));

        beforeEach(inject((_$componentController_) => {
            $component = _$componentController_;
        }));

        it('Deve garantir o componente sendo instanciado', () => {
            var ctrl = $component('headerCard', null, {});
            expect(ctrl).toBeDefined();
        });

        it('Deve garantir o funcionamento do binding', () => {
            var ctrl = $component('temperatureCard', null, {
                value: undefined
            });
            expect(ctrl.value).toBeUndefined();

            ctrl.value = -4;
            expect(ctrl.value).toBeLessThanOrEqual(0);

            ctrl.value = 10;
            expect(ctrl.value).toBeGreaterThanOrEqual(10);
        });
    });
})();