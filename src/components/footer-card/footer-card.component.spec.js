describe('Header Card: Component', () => {
    weathernow.initModule();

    var component,
        $componentController;

    beforeEach(inject((_$rootScope_, _$componentController_) => {
        $componentController = _$componentController_;
    }));

    it('Make sure the component is working', () => {
        component = $componentController('header-card', null, {
          title: 'Teste'
        });
        expect(component).toBeDefined();
        expect(component.title).toEqual('Teste');
    });
});
