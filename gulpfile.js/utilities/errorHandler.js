var config = require('../config')
var log = require('fancy-log');

module.exports = function(error) {
    log.error('Error' + (error.plugin ? ': ' + error.plugin : ''), '\n\n' + error.message, (error.codeFrame ?  '\n' + error.codeFrame : ''));

    process.exit(1);

    return;
};
