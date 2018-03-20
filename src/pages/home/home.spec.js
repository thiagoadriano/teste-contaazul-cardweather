describe('Home: Controller', () => {
    weathernow.initModule();
    var $ctrl,
        HomeController,
        scope;

    beforeEach(module(($urlRouterProvider) => {
        $urlRouterProvider.deferIntercept();
    }));

    beforeEach(inject((_$controller_, _$rootScope_) => {
        $ctrl = _$controller_;
        scope = _$rootScope_.$new();
        HomeController = $ctrl('HomeController', { $scope: scope });
    }));

    it('HomeController should be defined', () => {
        expect(HomeController).toBeDefined();
    });


});
