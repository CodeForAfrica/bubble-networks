var gulp 	   	 = require('gulp');
var fs 		   	 = require("fs");
var browserify 	 = require("browserify");
var babelify   	 = require("babelify");
var source 		 = require('vinyl-source-stream');
var config		 = require('../config');
var errorHandler = require('../utilities/errorHandler');
var uglify 		 = require('gulp-uglify');
var streamify	 = require('gulp-streamify');
var through2 		 = require('through2');
var join         = require('path').join;
var eslint 		 = require('gulp-eslint');


module.exports = {
	bundle: function(){

	    var files = [
        	'network-map.js'
    	];
    	// map them to our stream function
    	var tasks = files.map(function(entry) {
        	return browserify({ debug: true, entries: join(config.scripts.src, entry) })
				.transform(babelify, {presets: ["@babel/preset-env"]})
				.require(join(config.scripts.src, entry), { entry: true })
				.bundle()
				.on('error', errorHandler)
				.pipe(source(join(config.scripts.dist, 'network-map.min.js')))
				.pipe(config.production ? streamify(uglify()) : through2.obj())
		    	.pipe(gulp.dest('./'));
        	})
    	// create a merged stream
    	// return es.merge.apply(null, tasks);
	},
	lint: function() {
		gulp.src([join(config.scripts.src, '*.js'), join(config.scripts.src, '**/*.js')])
			.pipe(eslint())
			.pipe(eslint.format('stylish'));
	}
};
