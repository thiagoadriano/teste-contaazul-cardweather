'use strict';

const gulp = require('gulp'),
    config = require('./config');

// Task to move the fonts to environment
gulp.task('favicon', () => {
    return gulp
        .src(`${config.paths.src}/favicon.png`)
        .pipe(gulp.dest(global.pathDestination.path));
});
