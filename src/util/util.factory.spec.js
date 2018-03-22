describe('Util Helpers: Factory', () => {
    application.initModule();
    var util,
        tt,
        sku = {'IdProduto':73,'CodigoSku':'TCLT006RJ_MIGRACAO','CodigoSkuCartao':'TCLTE06RJ_MIGRACAO','TipoPlano':'Chip','TipoPagamento':1,'TipoPagamentoDescricao':'Fatura','Nome':'TIM Controle Light','NomeCompleto':'Tim Chip - TIM Controle Light','Descricao': {'ligacoes':{'titulo':'Ligações Ilimitadas','descricao': 'para celular e fixo Vivo do Brasil com o código 15.'}, 'sms' : {'titulo': 'SMS Ilimitado', 'descricao': 'SMS ilimitado para qualquer operadora do Brasil.'},'timTim':{'Titulo':'TIM-TIM','Descricao':'Ligue à vontade para outros telefones TIM, em chamadas locais e Longa Distância Nacional.'},'minutos':{'Titulo':'25 min','Descricao':'locais para outras operadoras.'},'LIGAÇÕES LOCAIS E DDD PARA OUTRAS OPERADORAS':{'titulo':'Ligações locais e DDD para outras operadoras','descricao':'São 100 minutos para fazer ligações para <b>celulares</b> e <b>fixos</b> de outras operadoras do Brasil, usando o código 21.','imagem':'//cdn.celulardireto.com.br/Claro/Imagens/Features/ligacoeslocais.png'},'INTERNET':{'titulo':'Internet','descricao':'O seu plano tem 2GB de internet para você ficar conectado onde estiver. Além disso, dependendo da sua localidade, poderá usufruir da tecnologia 4GMax. Consulte a cobertura em sua região.','imagem':'//cdn.celulardireto.com.br/Claro/Imagens/Features/internet.png'},'teste':{'Title':'25 min','Description':'locais para outras operadoras.'},'testeTitutlo':{'titulo':'25 min'},'testeDescricao':{'Descricao':'25 min'}},'DescricaoCurta':null,'Complemento':{'dados_valor':'2GB','ddd_descricao':'-','ddd_valor':'-','minutos_offnet_descricao':'Ligações locais para outras operadoras.','minutos_offnet_valor':'25 Minutos','minutos_onnet_descricao':'Ligações de TIM para TIM ilimitadas','minutos_onnet_valor':'Valor de Minutos Ilimitado','sms_descricao':'-','sms_valor':'-'},'Valor':'39,99','ValorComDesconto':'39,99','ValorSemDesconto':'0,00','ValorAparelho':'0,00','Ativo':true,'MaximoDependentes':0,'MaximoDependentesGratis':0,'SkuTipoPessoa':3,'SkuTipoPessoaDescricao':'Pessoa Física e Pessoa Juridica','Ddd':21,'CodigosSkusOperadora':null,'SkuDependentes':[],'PermiteVendaCartaoCredito':false,'SkusServico':[],'Ddds':null,'Opcoes':'','Ordem':0,'ValorDebitoAutomatico':'0,00'};

    beforeEach(module(($urlRouterProvider) => {
        $urlRouterProvider.deferIntercept();
    }));

    beforeEach(function() {
        inject(($injector, $timeout) => {
            util = $injector.get('Util');
            tt = $timeout;
        });
    });


    it('Check Enum should be defined', () => {
        expect(util).toBeDefined();
    });

    it('Must return capitalized text ', () => {
        expect(util.captalize('TESTE')).toEqual('Teste');
        expect(util.captalize('TESTE de teste Teste')).toEqual('Teste de Teste Teste');
    });

    it('Must return mask celphone text', () => {
        expect(util.maskCellphone(21, 999999999)).toEqual('(21) 99999-9999');
        expect(util.maskCellphone('22', '888888888')).toEqual('(22) 88888-8888');
    });

    it('Must return new sku object parsed', () => {
        var parse = util.parseSku(sku);
        expect(parse).toBeDefined();
        expect(parse.descricoes instanceof Array).toBeTruthy();
        expect(parse.descricoes.length).toEqual(8);
        expect(parse.codigoSku).toBeDefined();
        expect(parse.valor).toBeDefined();
        expect(parse.valor.real).toEqual('39');
    });

    it('Must focus on a field passed by ID', () => {
        spyOn(util, 'inputFocus').and.callThrough();
        expect(util.inputFocus).toBeDefined();
        util.inputFocus('testeFoco');
        tt.flush();
        expect(util.inputFocus).toHaveBeenCalled();
    });

    it('You should verify that the use of runtime is correct', () => {
        var dbc = util.debounce();
        var teste = false;
        function call() {
            teste = true;
        };

        expect(dbc).toBeDefined();
        expect(dbc instanceof Function).toBeTruthy();
        expect(teste).toBeFalsy();
        dbc(call);
        expect(teste).toBeFalsy();
        dbc(call);
        expect(teste).toBeFalsy();
        tt.flush();
        expect(teste).toBeTruthy();
    });
});
