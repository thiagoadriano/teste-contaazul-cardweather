(() => {
    'use strict';
    describe('Componente: footerCard', () => {
        var $component;

        beforeEach(module('weathernow'));

        beforeEach(inject((_$componentController_) => {
            $component = _$componentController_;
        }));

        it('Deve garantir o componente sendo instanciado', () => {
            var ctrl = $component('footerCard', null, {});
            expect(ctrl).toBeDefined();
        });

        it('Deve garantir o funcionamento dos bindings', () => {
            var ctrl = $component('footerCard', null, {
                humidity: 80,
                lastUpdate: '03:20:57 AM',
                pressure: 850,
                viewData: true
            });
            expect(ctrl.viewData).toBeTruthy();
            expect(ctrl.humidity).toEqual(80);
            expect(ctrl.pressure).toBeGreaterThanOrEqual(850);
            expect(ctrl.lastUpdate).toEqual('03:20:57 AM');
        }); 
        
    });
})();

