(() => {
    'use strict';
    describe('Service: Weather', () => {
        var WeatherService,
            httpBackend,
            url = 'http://api.openweathermap.org/data/2.5/find?appid=acfcabc0159b253aa081c9fe3bbc8af2&q=ubirici,br&units=metric';

        beforeEach(module('weathernow'));

        beforeEach(inject((_$injector_, _$httpBackend_) => {
            WeatherService = _$injector_.get('WeatherService');
            httpBackend = _$httpBackend_;
            spyOn(WeatherService, 'getMetrics').and.callThrough();
        }));

        it('Deve garantir o service foi instanciado', () => {
            expect(WeatherService).toBeDefined();
        });

        it('Deve garantir que o get aos dados está sendo executado', () => {
            WeatherService.getMetrics('London');
            expect(WeatherService.getMetrics).toHaveBeenCalled();
        });

        it('Deve garantir chamada com retorno sucesso', () => {
            var mockResponse = {
                data: {
                    main: {
                        humidity: 75.3,
                        pressure: 854.654,
                        temperature: 25.85
                    }
                }
            };
    
            httpBackend.expectGET(url)
                .respond(mockResponse);
    
            WeatherService.getMetrics('ubirici,br').then((data) => {
                expect(data).toEqual(mockResponse);
            });
    
            httpBackend.flush();
        });

    });
})();
