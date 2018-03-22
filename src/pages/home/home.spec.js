'use strict';
describe('Home: Controller', () => {
    weathernow.initModule();
    var $ctrl,
        HomeController,
        scope;

    beforeEach(inject((_$controller_, _$rootScope_) => {
        HomeController = _$controller_('HomeController', { $scope: _$rootScope_.$new() });
    }));

    it('HomeController should be defined', () => {
        expect(HomeController).toBeDefined();
    });


});
