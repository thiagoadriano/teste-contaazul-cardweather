// (() => {
//     'use strict';
//
//     describe('Service: StorageService', () => {
//         weathernow.initModule();
//         var StorageService,
//             blockStorage = {};
//
//         beforeEach(inject(($injector) => {
//             StorageService = $injector.get('StorageService');
//         }));
//
//         afterEach(() => {
//             blockStorage = {};
//         });
//
//         it('Service should be defined', () => {
//             expect(StorageService).toBeDefined();
//         });
//
//
//         it('You should check whether the returned values are as set', () => {
//             var teste1 = { novo: 'true' },
//                 teste2 = 21,
//                 teste3 = ['Information', [23,12], {teste: 'new'}, 50, [[10, 'teste'], ['teste', 45]]],
//                 teste4 = 'Teste 21 de inserção 23158';
//
//             StorageService.set('teste1', teste1);
//             StorageService.set('teste2', teste2);
//             StorageService.set('teste3', teste3);
//             StorageService.set('teste4', teste4);
//
//             expect(StorageService.get('teste1')).toEqual(teste1);
//             expect(StorageService.get('teste2')).toEqual(teste2);
//             expect(StorageService.get('teste3')).toEqual(teste3);
//             expect(StorageService.get('teste4')).toEqual(teste4);
//
//             expect(StorageService.get('teste1').novo).toBeTruthy();
//             expect(StorageService.get('teste3')[1][0]).toBeGreaterThanOrEqual(23);
//
//         });
//
//         it('verifies that the returned values are in the correct type', () => {
//             expect(typeof StorageService.get('teste1')).toEqual('object');
//             expect(typeof StorageService.get('teste2')).toEqual('number');
//             expect(StorageService.get('teste3') instanceof Array).toBeTruthy();
//             expect(typeof StorageService.get('teste4')).toEqual('string');
//         });
//
//
//         it('Must verify use of other apis', () => {
//             expect( StorageService.get('outro') ).toBeDefined();
//             StorageService.set('outro_teste', true);
//             StorageService.del('outro_teste');
//             expect( StorageService.get('outro_teste') ).toBeNull();
//             StorageService.reset();
//             expect( StorageService.get('outro') ).toBeNull();
//         });
//
//         it('You should check that the parameter specified in the del function is not a string', () => {
//             expect(StorageService.del(123)).toBeNull();
//             expect(StorageService.del([])).toBeNull();
//             expect(StorageService.del({})).toBeNull();
//             expect(StorageService.del(true)).toBeNull();
//             expect(StorageService.del('test')).toBeFalsy();
//         });
//
//         it('You should check that the parameter given in the set function is not a string', () => {
//             expect(StorageService.set(123)).toBeNull();
//             expect(StorageService.set([])).toBeNull();
//             expect(StorageService.set({})).toBeNull();
//             expect(StorageService.set(true)).toBeNull();
//             expect(StorageService.set('test')).toBeNull();
//             expect(StorageService.set('test', {test:true})).not.toBeNull();
//
//         });
//
//         it('You should check that the parameter given in the get function is not a string', () => {
//             expect(StorageService.get(123)).toBeNull();
//             expect(StorageService.get([])).toBeNull();
//             expect(StorageService.get({})).toBeNull();
//             expect(StorageService.get(true)).toBeNull();
//             expect(StorageService.get('test')).not.toBeNull();
//         });
//
//         it('You should check the recursion if it works as expected', () => {
//             var item = {package: {sku: {title: 'test', subtitle: 'subtest'}}};
//             StorageService.set('pckg', item);
//             expect(StorageService.get('pckg', 'package.sku.title')).toEqual(item.package.sku.title);
//             expect(StorageService.get('pckg', 'pck.sku.title')).toBeNull();
//             expect(StorageService.get('pckg', 'package')).toEqual(item.package);
//             expect(StorageService.get('pckg', 'package,ski')).toBeNull();
//             expect(StorageService.put('pckg', 'package,ski')).toBeNull();
//             expect(StorageService.put('pckg', 'package.sku.title', 'novo teste titulo')).toBeDefined();
//             expect(StorageService.put('pckg', 'package.sku,title', 'novo teste titulo')).toBeNull();
//             expect(StorageService.put('pckg', 'package', ['novo', true, {data: '01/01/0001'}])).toEqual({package: ['novo', true, {data: '01/01/0001'}]});
//         });
//
//
//     });
// })();
