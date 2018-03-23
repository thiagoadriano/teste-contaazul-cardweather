(() => {
    'use strict';
    describe('Service: Weather', () => {
        var WeatherService;

        beforeEach(module('weathernow'));

        beforeEach(inject((_$injector_) => {
            WeatherService = _$injector_.get('WeatherService');
            spyOn(WeatherService, 'getMetrics').and.callThrough();
        }));

        it('Deve garantir o service foi instanciado', () => {
            expect(WeatherService).toBeDefined();
        });

        it('Deve garantir que o get aos dados está sendo executado', () => {
            WeatherService.getMetrics('London');
            expect(WeatherService.getMetrics).toHaveBeenCalled();
        });
    });
})();
