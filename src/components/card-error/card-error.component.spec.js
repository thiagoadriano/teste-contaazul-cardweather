describe('Error Card: Component', () => {
    weathernow.initModule();

    var component,
        $componentController;

    beforeEach(inject((_$rootScope_, _$componentController_) => {
        $componentController = _$componentController_;
    }));

    it('Make sure the component is working', () => {
        component = $componentController('error-card', null, {
          clickAction: angular.noop
        });
        expect(component).toBeDefined();
    });
});
