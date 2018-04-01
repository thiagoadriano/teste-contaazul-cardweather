(() => {
    'use strict';
    describe('Componente: cardWeather', () => {
        var $component,
            storage;

        beforeEach(module('weathernow'));

        beforeEach(inject((_$componentController_, _StorageService_) => {
            $component = _$componentController_;
            storage = _StorageService_;
        }));
        

        it('Deve garantir o componente sendo instanciado', () => {
            var ctrl = $component('cardWeather', null, {});
            expect(ctrl).toBeDefined();
        });


        it('Deve garantir o funcionamento dos bindings', () => {
            var ctrl = $component('cardWeather', null, {
                city: 'são paulo',
                country: 'br',
                visibleMetrics: false
            });
            expect(ctrl.city).toEqual('são paulo');
            expect(ctrl.country).toEqual('br');
            expect(ctrl.visibleMetrics).toBeFalsy();
        });

        it('Deve garantir a mudança iniciais', () => {
            var ctrl = $component('cardWeather', null, {
                city: 'rio de janeiro',
                country: 'br',
                visibleMetrics: true
            });
            expect(ctrl.showError).toBeFalsy();
            expect(ctrl.showLoad).toBeFalsy();

            ctrl.reload();
            expect(ctrl.showError).toBeFalsy();
            expect(ctrl.showLoad).toBeTruthy();

            expect(ctrl.city).toEqual('rio de janeiro');
            expect(ctrl.country).toEqual('br');
            ctrl.$onInit();
            expect(ctrl.country).toEqual('BR');
            expect(ctrl.city).toEqual('Rio de Janeiro');

        });

        it('Deve garantir o funcionamento com métricas adicionadas', () => {
            var ctrl = $component('cardWeather', null, {
                city: 'Urubici',
                country: 'BR',
                visibleMetrics: true
            });
            spyOn(ctrl, '$onInit').and.callThrough();

            storage.set(`${ctrl.city}_${ctrl.country}`, {"humidity":77,"pressure":1019,"temperature":17,"lastUpdate":"03:22:01 PM","nextUpdate":1584940725000});
            ctrl.$onInit();
            expect(ctrl.$onInit).toHaveBeenCalled();
        });

       

    });
})();
