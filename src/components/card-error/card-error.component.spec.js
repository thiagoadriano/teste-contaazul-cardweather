(() => {
    'use strict';
    describe('Componente: errorCard', () => {
        var $component;

        beforeEach(module('weathernow'));

        beforeEach(inject((_$componentController_) => {
            $component = _$componentController_;
        }));

        it('Deve garantir o componente sendo instanciado', () => {
            var ctrl = $component('errorCard', null, {});
            expect(ctrl).toBeDefined();
        });

        it('Deve garantir o funcionamento dos bindings', () => {
            var ctrl = $component('errorCard', null, {
                onRefresh: angular.noop,
                visible: true
            });
            expect(ctrl.visible).toBeTruthy();
            expect(typeof ctrl.onRefresh).toEqual('function');

            ctrl.visible = false;
            ctrl.onRefresh = null;

            expect(ctrl.visible).toBeFalsy();
            expect(ctrl.onRefresh).toBeNull();
        }); 

        it('Deve garantir que o binding de função foi chamado', () => {
            var bool = false,
                click = function(){
                    bool = true;
                },
                ctrl = $component('errorCard', null, {
                    onRefresh: click
                });

            spyOn(ctrl, 'onRefresh').and.callThrough();

            expect(bool).toBeFalsy();
            
            ctrl.onRefresh();
            expect(ctrl.onRefresh).toHaveBeenCalled();
            expect(bool).toBeTruthy();
        });
    });
})();