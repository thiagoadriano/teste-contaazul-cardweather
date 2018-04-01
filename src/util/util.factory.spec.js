(() => {
    'use strict';
    describe('Util: Factory', () => {
        var util, moment;
        
        beforeEach(module('weathernow'));

        beforeEach(inject(($injector) => {
            util = $injector.get('Util');
            moment = $injector.get('moment');
        }));


        it('Deve garantir que está instanciado', () => {
            expect(util).toBeDefined();
        });

        it('Deve garantir que está capitularizando o texto ', () => {
            expect(util.Converter.textCaptalize('TESTE')).toEqual('Teste');
            expect(util.Converter.textCaptalize('TESTE de teste Teste')).toEqual('Teste de Teste Teste');
            expect(util.Converter.textCaptalize('novo teste')).toEqual('Novo Teste');
        });

        it('Deve garantir que está devolvendo as metricas corretas', () => {
            var data = {
                    main: {
                        humidity: 75.3,
                        pressure: 854.654,
                        temp: 25.85
                    }
                }, 
                dataError = {
                        main: {
                        humidity: 75.3,
                        pressure: 854.654,
                        temperature: 25.85
                    }
                },
                metricaResult = util.mapMetrics(data),
                metricaError = util.mapMetrics("qualquerCoisa"),
                metricaErrorTemp = util.mapMetrics(dataError);

            expect(metricaResult.humidity).toEqual(75);
            expect(metricaResult.pressure).toEqual(854);
            expect(metricaResult.temperature).toEqual(25);

            expect(metricaError.humidity).toEqual(0);
            expect(metricaError.pressure).toEqual(0);
            expect(metricaError.temperature).toEqual(0);

            expect(metricaErrorTemp.humidity).toEqual(0);
            expect(metricaErrorTemp.pressure).toEqual(0);
            expect(metricaErrorTemp.temperature).toEqual(0);
        });

        it('Deve garantir que está retornando corretamente a próxima atualização', () => {
            var data = moment('23/2/2018 2:18:45', 'dd/M/yyyy h:mm:ss'), 
                dataTeste = new Date(2018, 2, 23, 2, 18, 45),
                dataResult = util.nextUpdate(data);
            dataTeste.setMinutes(dataTeste.getMinutes() + 10);
            expect(dataResult).toBeLessThan(dataTeste.getTime());
        });

        it('Deve garantir que conversao de minutos para milisegundos está correta', () => {           
            expect(util.Converter.minutesToMilliseconds("1")).toBeNull();
            expect(util.Converter.minutesToMilliseconds({})).toBeNull();
            expect(util.Converter.minutesToMilliseconds()).toBeNull();
            expect(util.Converter.minutesToMilliseconds(true)).toBeNull();

            expect(util.Converter.minutesToMilliseconds(10)).toEqual(600000);            
            expect(util.Converter.minutesToMilliseconds(60)).toEqual(3.6e+6);            
            expect(util.Converter.minutesToMilliseconds(17)).toEqual(1.02e+6);            
            expect(util.Converter.minutesToMilliseconds(5)).toEqual(300000);            
        });

        it('Deve garantir que conversao de milisegundos para minutos está correta', () => {           
            expect(util.Converter.millisecondToMinutes("1")).toBeNull();
            expect(util.Converter.millisecondToMinutes({})).toBeNull();
            expect(util.Converter.millisecondToMinutes()).toBeNull();
            expect(util.Converter.millisecondToMinutes(true)).toBeNull();

            expect(util.Converter.millisecondToMinutes(600000)).toEqual(10);            
            expect(util.Converter.millisecondToMinutes(3.6e+6)).toEqual(60);            
            expect(util.Converter.millisecondToMinutes(1.02e+6)).toEqual(17);            
            expect(util.Converter.millisecondToMinutes(300000)).toEqual(5);            
        });

        it('Deve garantir que conversao de segundos para milisegundos está correta', () => {           
            expect(util.Converter.secondsToMillisecond("1")).toBeNull();
            expect(util.Converter.secondsToMillisecond({})).toBeNull();
            expect(util.Converter.secondsToMillisecond()).toBeNull();
            expect(util.Converter.secondsToMillisecond(true)).toBeNull();

            expect(util.Converter.secondsToMillisecond(1)).toEqual(1000);            
            expect(util.Converter.secondsToMillisecond(35)).toEqual(35000);            
            expect(util.Converter.secondsToMillisecond(10)).toEqual(10000);            
            expect(util.Converter.secondsToMillisecond(57)).toEqual(57000);            
        });

        it('Deve garantir que está devolvendo a diferença em milisegundos dos minutos para a próxima requisição', () => {           
            let time1 = moment('20/03/2018 10:40:00', 'dd/MM/yyyy hh:mm:ss'),
                time2 = moment('20/03/2018 10:42:00', 'dd/MM/yyyy hh:mm:ss');
            
            expect(util.Converter.minutesToMilliseconds(2)).toEqual(util.getNextRefresh(time2, time1));
        });

        it('Deve garantir que está devolvendo a diferença em milisegundos dos segundos para a próxima requisição', () => {           
            let time1 = moment('20/03/2018 10:40:00', 'dd/MM/yyyy hh:mm:ss'),
                time2 = moment('20/03/2018 10:40:30', 'dd/MM/yyyy hh:mm:ss');
            
            expect(util.Converter.secondsToMillisecond(30)).toEqual(util.getNextRefresh(time2, time1));
        });

        it('Deve garantir que está realizando o contador', () => {
            let timer = ()=>{},
                teste = false,
                callback = () => teste = true;
            
            expect(teste).toBeFalsy();

            util.timerRefresh(timer, callback, 700);

            setTimeout(() => {
                expect(teste).toBeTruthy();
            },800);
        });

        it('Deve garantir que o formato correto do retorno do tempo', () => {
            var data = moment('23/2/2018 2:18:45', 'dd/M/yyyy h:mm:ss'),
                timeResult = util.timeNow(data);

            expect(timeResult).toBeDefined();
            expect(timeResult).toEqual('02:18:45 AM');
        });
    });
})();