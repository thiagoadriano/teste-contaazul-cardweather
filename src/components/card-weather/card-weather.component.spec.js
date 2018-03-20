describe('Card Weather: Component', () => {
    weathernow.initModule();

    var component,
        $componentController;

    beforeEach(inject((_$rootScope_, _$componentController_) => {
        $componentController = _$componentController_;
    }));

    it('Make sure the component is working', () => {
        component = $componentController('card-weather', null, {

        });

        component.$onInit();
        expect(component).toBeDefined();
    });



});
