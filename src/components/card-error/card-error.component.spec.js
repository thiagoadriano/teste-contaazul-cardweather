describe('Error Card: Component', () => {
    var $component;

    //weathernow.initModule();

    beforeEach(module('weathernow'));

    beforeEach(inject((_$componentController_) => {
        $component = _$componentController_;
    }));

    it('Make sure the component is working', () => {
        var crtl = $component('errorCard', null, {
            onRefresh: angular.noop,
            visible: true
        });
        expect(crtl).toBeDefined();
    });
});
