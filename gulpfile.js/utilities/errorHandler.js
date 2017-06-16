var config = require('../config')
var gutil = require('gulp-util');

module.exports = function(error) {
    gutil.log(gutil.colors.red.bold('Error' + (error.plugin ? ': ' + error.plugin : '')), '\n\n' + error.message, (error.codeFrame ?  '\n' + error.codeFrame : ''));

    process.exit(1);

    return;
};
