// (() => {
//     'use strict';
//
//     describe('Service: Http', () => {
//         weathernow.initModule();
//
//         var $rootScope,
//             $httpBackend,
//             HttpService,
//             error,
//             object = {
//                 Uid: '0101'
//             },
//             url = 'https://my.api.mockaroo.com/list-mock-contaazul.json?key=0f652150';
//
//         beforeEach(module(($urlRouterProvider) => {
//             $urlRouterProvider.deferIntercept();
//         }));
//
//         beforeEach(inject((_HttpService_, _$rootScope_, _$httpBackend_) => {
//             $httpBackend = _$httpBackend_;
//             HttpService = _HttpService_;
//
//             spyOn(HttpService, 'get').and.callThrough();
//             spyOn(HttpService, 'post').and.callThrough();
//             spyOn(HttpService, 'put').and.callThrough();
//         }));
//
//         it('HttpService should be defined', () => {
//             expect(HttpService).toBeDefined();
//         });
//
//         it('get method shoud be working', () => {
//             HttpService.get(url);
//             expect(HttpService.get).toHaveBeenCalled();
//         });
//
//         it('post method shoud be working', () => {
//             HttpService.post(url, object);
//             expect(HttpService.post).toHaveBeenCalled();
//         });
//
//         it('put method shoud be working', () => {
//             HttpService.put(url, object);
//             expect(HttpService.put).toHaveBeenCalled();
//         });
//
//     });
// })();
