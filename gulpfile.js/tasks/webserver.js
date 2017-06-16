var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
module.exports = function() {
  	gulp.src('./')
    	.pipe(webserver({
      		livereload: true,
      		directoryListing: true,
	      	open: true,
	      	fallback: 'index.html'
    	}));
};