(() => {
    'use strict';

    describe('Service: Weather', () => {
        weathernow.initModule();
        var WeatherService;

        beforeEach(inject(($injector) => {
            WeatherService = $injector.get('WeatherService');
            spyOn(WeatherService, 'getMetric').and.callThrough();
        }));

        it('WeatherService should be defined', () => {
            expect(WeatherService).toBeDefined();
        });

        it('CreateCart method should be working', () => {
            WeatherService.getMetric('London');
            expect(WeatherService.getMetric).toHaveBeenCalled();
        });
    });
})();
