(() => {
    'use strict';
    describe('Componente: headerCard', () => {
        var $component;

        beforeEach(module('weathernow'));

        beforeEach(inject((_$componentController_) => {
            $component = _$componentController_;
        }));

        it('Deve garantir o componente sendo instanciado', () => {
            var ctrl = $component('headerCard', null, {});
            expect(ctrl).toBeDefined();
        });

        it('Deve garantir o funcionamento do binding', () => {
            var ctrl = $component('loadCard', null, {
                title: 'Teste'
            });
            expect(ctrl.title).toEqual('Teste');

            ctrl.title = 'Outra Coisa';
            expect(ctrl.title).toEqual('Outra Coisa');
        });
    });
})();