'use strict';

const gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    config = require('./config');

// Compress Images and move to dist folder
gulp.task('images', () => {
    return gulp
        .src(config.assets.images)
        .pipe(imagemin(
            [
                imagemin.gifsicle({interlaced: true}),
                imagemin.jpegtran({progressive: true}),
                imagemin.optipng({optimizationLevel: 7})
            ],
            {
                verbose: true
            }
        ))
        .pipe(gulp.dest(global.pathDestination.images));
});
