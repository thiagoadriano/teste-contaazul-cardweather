'use strict';

const gulp = require('gulp'),
    destination = require('./destination'),
    runSequence = require('run-sequence');


// Task to build
gulp.task('build', (done) => {
    _executeSequence(done, 'prod');
});
gulp.task('build:dev', (done) => {
    _executeSequence(done, 'dev');
});

// function to execute runSequence
function _executeSequence(done, enveroiment) {
    global.pathDestination = destination(enveroiment);
    return runSequence(
        'clean',
        'lint',
        'styles:bundles',
        'styles:vendors',
        'scripts:bundles',
        'scripts:vendors',
        ['fonts', 'images', 'svgs', 'html', 'favicon'],
        'clean:js',
        done
    );
}
