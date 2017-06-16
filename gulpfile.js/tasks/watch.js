var config = require('../config');
var gulp   = require('gulp');
var path   = require('path');

module.exports = function() {
    gulp.watch(path.join(config.scripts.src, '**', '*.js'), ['scripts:bundle']);
    gulp.watch(path.join(config.styles.src, '**', '*.scss'), ['styles']);
};
