'use strict';

var weathernow = {
    initModule: function initModule() {
        beforeEach(() => {
            module('weathernow', ($provide) => {
                $provide.constant('API_KEY', 'acfcabc0159b253aa081c9fe3bbc8af2')
                        .constant('TIME_REFRESH', 600000)
                        .constant('API_URL', 'http://api.openweathermap.org/data/2.5/find');
            });
        });
    }
};

describe('Module: application', () => {
    var module,
        dependencies = [];

    const hasModule = module => dependencies.indexOf(module) >= 0;

    weathernow.initModule();

    it('Defined Modules', () => {
        expect(hasModule('weathernow')).toBeDefined();
    });
});
