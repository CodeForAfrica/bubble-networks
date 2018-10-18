var config     = require('./config');
var gulp       = require('gulp');

// Load tasks
var clean      = require('./tasks/clean');
var scripts    = require('./tasks/scripts');
var styles     = require('./tasks/styles');
var watch      = require('./tasks/watch');
var webserver  = require('./tasks/webserver');
var data       = require('./tasks/data');

// Define tasks and dependencies
gulp.task('clean:css', clean.css);
gulp.task('clean:js', clean.js);

gulp.task('scripts:lint', scripts.lint);
gulp.task('scripts:bundle', ['scripts:lint'], scripts.bundle);
gulp.task('styles', styles);

gulp.task('data:sort', data.sort)

gulp.task('watch', watch);

// Build
gulp.task('build', ['clean:css', 'clean:js'], function() {
    gulp.start(['scripts:bundle', 'styles']);
});

gulp.task('webserver', webserver);

gulp.task('default', ['watch', 'webserver']);

gulp.task('data', ['data:sort']);
