'use strict';

const paths = {
        assets: 'src/assets',
        dev: '.dev',
        prod: '.prod',
        src: 'src'
    },
    CacheBuster = require('gulp-cachebust'),
    cacheBust = new CacheBuster({
        random: true,
        checksumLength: 16
    });

module.exports = {
    assets: {
        fonts: `${paths.assets}/fonts/**/*`,
        htmls: `${paths.src}/**/*.html`,
        images: `${paths.assets}/imgs/**/*`,
        js: `${paths.assets}/js/**/*`,
        svgs: `${paths.assets}/svgs/**/*`,
        stylesBundles: `${paths.src}/**/*.sass`,
        stylesVendors: [
            './node_modules/normalize.css/normalize.css'
        ],
        scriptsBundles: [
            `${paths.src}/app/app.module.js`,
            `${paths.src}/**/*.js`,
            `!${paths.src}/**/*.spec.js`
        ],
        scriptsVendors: require('../vendors_js.json')
    },
    base: __dirname.replace(require('path').basename(__dirname), ''),
    buildHash: cacheBust,
    prod: {
        fonts: `${paths.prod}/assets/fonts`,
        images: `${paths.prod}/assets/imgs`,
        js: `${paths.prod}/assets/js`,
        path: `${paths.prod}/`,
        styles: `${paths.prod}/assets/styles`,
        svgs: `${paths.prod}/assets/svgs`
    },
    dev: {
        fonts: `${paths.dev}/assets/fonts`,
        images: `${paths.dev}/assets/imgs`,
        js: `${paths.dev}/assets/js`,
        path: `${paths.dev}/`,
        styles: `${paths.dev}/assets/styles`,
        svgs: `${paths.dev}/assets/svgs`
    },
    paths: paths,
    projectModule: 'weathernow',
    server: {
        browser: require('os').platform() === 'win32' ? 'chrome' : 'google chrome',
        mainHTML: `${paths.src}/index.html`,
        port: 3000,
        portUi: 3001,
        uri: 'http://localhost:3000/'
    }
};
