describe('Load Card: Component', () => {
    weathernow.initModule();

    var component,
        $componentController;

    beforeEach(inject((_$rootScope_, _$componentController_) => {
        $componentController = _$componentController_;
    }));

    it('Make sure the component is working', () => {
        component = $componentController('card-load', null, {
          show: true
        });
        expect(component).toBeDefined();
        expect(component.show).toBeTrhuthy();
    });
});
