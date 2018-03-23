(() => {
    'use strict';

    describe('Service: Http', () => {

        var $rootScope,
            $httpBackend,
            HttpService,
            object = {
                Uid: '0101'
            },
            url = 'https://my.api.mockaroo.com/list-mock-contaazul.json?key=0f652150';

        beforeEach(module('weathernow'));

        beforeEach(inject((_HttpService_, _$rootScope_, _$httpBackend_) => {
            $httpBackend = _$httpBackend_;
            HttpService = _HttpService_;

            spyOn(HttpService, 'get').and.callThrough();
            spyOn(HttpService, 'post').and.callThrough();
            spyOn(HttpService, 'put').and.callThrough();
        }));

        it('Deve garantir o service foi instanciado', () => {
            expect(HttpService).toBeDefined();
        });

        it('Deve garantir que o método get foi chamado', () => {
            HttpService.get(url);
            expect(HttpService.get).toHaveBeenCalled();
        });

        it('Deve garantir que o método post foi chamado', () => {
            HttpService.post(url, object);
            expect(HttpService.post).toHaveBeenCalled();
        });

        it('Deve garantir que o método put foi chamado', () => {
            HttpService.put(url, object);
            expect(HttpService.put).toHaveBeenCalled();
        });

    });
})();
