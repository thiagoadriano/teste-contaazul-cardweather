(() => {
    'use strict';

    describe('Service: Http', () => {

        var $rootScope,
            $httpBackend,
            HttpService,
            object = {
                Uid: '0101'
            },
            url = 'http://api.openweathermap.org/data/2.5/find?q=ubirici,br&units=metric&appid=acfcabc0159b253aa081c9fe3bbc8af2';

        beforeEach(module('weathernow'));

        beforeEach(inject((_HttpService_, _$rootScope_, _$httpBackend_) => {
            $httpBackend = _$httpBackend_;
            HttpService = _HttpService_;

            spyOn(HttpService, 'get').and.callThrough();
        }));

        it('Deve garantir o service foi instanciado', () => {
            expect(HttpService).toBeDefined();
        });

        it('Deve garantir que o método get foi chamado', () => {
            HttpService.get(url);
            expect(HttpService.get).toHaveBeenCalled();
        });

        it('Deve garantir chamada com retorno sucesso', () => {
            var mockResponse = {
                data: { success: true, message: "Success!" }
            };
    
            $httpBackend.expectGET(url)
                .respond(mockResponse);
    
            HttpService.get(url).then((data) => {
                expect(data).toEqual(mockResponse);
            });
    
            $httpBackend.flush();
        });

    });
})();
