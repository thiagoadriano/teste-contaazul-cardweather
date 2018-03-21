'use strict';

var application = {
    initModule: function initModule() {
        beforeEach(() => {
            module('weathernow', ($provide) => {

            });
        });
    }
};

describe('Module: weathernow', () => {
    var module,
        dependencies = [];

    const hasModule = module => dependencies.indexOf(module) >= 0;

    application.initModule();

    it('Defined Modules', () => {
        expect(hasModule('weathernow')).toBeDefined();
    });
});
