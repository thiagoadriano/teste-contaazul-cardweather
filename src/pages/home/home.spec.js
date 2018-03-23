(() => {
    'use strict';
    describe('Home: Controller', () => {
        var $component,
            $window;

        beforeEach(module('weathernow'));

        beforeEach(inject((_$componentController_) => {
            $component = _$componentController_;
        }));


        it('Deve garantir o componente sendo instanciado', () => {
            var ctrl = $component('homePage', null, {});
            expect(ctrl).toBeDefined();
        });

        it('Deve garantir a troca de card', () => {
            var ctrl = $component('homePage', null, {});
            expect(ctrl.selectedCity).toEqual('Urubici');

            ctrl.selectCity('New York');
            expect(ctrl.selectedCity).toEqual('New York');
        });

        it('Deve garantir a chamada inicial do compoente', () => {
            var ctrl = $component('homePage', null, {});
            spyOn(ctrl, '$onInit').and.callThrough();

            ctrl.$onInit();
            expect(ctrl.$onInit).toHaveBeenCalled();
        });
    });
})();

