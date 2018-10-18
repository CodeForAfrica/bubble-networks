var autoprefixer = require('gulp-autoprefixer');
var config       = require('../config');
var errorHandler = require('../utilities/errorHandler');
var gulp         = require('gulp');
var join         = require('path').join;
var cssnano      = require('gulp-cssnano');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var log          = require('fancy-log');
var through2     = require('through2');
var pixrem       = require('gulp-pixrem');

module.exports = function() {

    // What mode?
    log('Bundling CSS in', (config.production ? 'production' : 'development'), 'mode...');

    return gulp.src(join(config.styles.src, '*.scss'))
        .pipe(config.production ? through2.obj() : sourcemaps.init())
        .pipe(sass(config.sass))
            .on('error', errorHandler)
        .pipe(autoprefixer(config.autoprefixer))
            .on('error', errorHandler)
        .pipe(pixrem({ rootValue: '16px' }))
        .pipe(config.production ? through2.obj() : sourcemaps.write())
        .pipe(config.production ? cssnano({ autoprefixer: config.autoprefixer }) : through2.obj())
        .pipe(gulp.dest(join(config.styles.dist)))

};
