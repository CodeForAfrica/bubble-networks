var autoprefixer = require('gulp-autoprefixer');
var config       = require('../config');
var errorHandler = require('../utilities/errorHandler');
var gulp         = require('gulp');
var join         = require('path').join;
var cssnano      = require('gulp-cssnano');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var gutil        = require('gulp-util');
var pixrem       = require('gulp-pixrem');

module.exports = function() {

    // What mode?
    gutil.log('Bundling CSS in', (config.production ? gutil.colors.red.bold('production') : gutil.colors.green.bold('development')), 'mode...');

    return gulp.src(join(config.styles.src, '*.scss'))
        .pipe(config.production ? gutil.noop() : sourcemaps.init())
        .pipe(sass(config.sass))
            .on('error', errorHandler)
        .pipe(autoprefixer(config.autoprefixer))
            .on('error', errorHandler)
        .pipe(pixrem({ rootValue: '16px' }))
        .pipe(config.production ? gutil.noop() : sourcemaps.write())
        .pipe(config.production ? cssnano({ autoprefixer: config.autoprefixer }) : gutil.noop())
        .pipe(gulp.dest(join(config.styles.dist)))

};
