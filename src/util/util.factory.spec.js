(() => {
    'use strict';
    describe('Util: Factory', () => {
        var util;
        
        beforeEach(module('weathernow'));

        beforeEach(inject(($injector) => {
            util = $injector.get('Util');
        }));


        it('Deve garantir que está instanciado', () => {
            expect(util).toBeDefined();
        });

        it('Deve garantir que está capitularizando o texto ', () => {
            expect(util.captalize('TESTE')).toEqual('Teste');
            expect(util.captalize('TESTE de teste Teste')).toEqual('Teste de Teste Teste');
        });

        it('Deve garantir que está devolvendo as metricas corretas', () => {
            var data = {
                    main: {
                        humidity: 75.3,
                        pressure: 854.654,
                        temp: 25.85
                    }
                }, 
                metricaResult = util.mapMetrics(data);

            expect(metricaResult.humidity).toEqual(75);
            expect(metricaResult.pressure).toEqual(854);
            expect(metricaResult.temperature).toEqual(25);
        });

        it('Deve garantir que está retornando corretamente a próxima atualização', () => {
            var data = new Date(2018, 2, 23, 2, 18, 45), 
                dataTeste = new Date(2018, 2, 23, 2, 18, 45),
                dataResult = util.nextUpdate(data);
            
            dataTeste.setMinutes(dataTeste.getMinutes() + 10);

            expect(dataResult).toEqual(dataTeste.getTime());
        });

        it('Deve garantir que o formato correto do retorno do tempo', () => {
            var data = new Date(2018, 2, 23, 2, 18, 45), 
                timeResult = util.timeNow(data);
            expect(timeResult).toBeDefined();
        });
    });
})();