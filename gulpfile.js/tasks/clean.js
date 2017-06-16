var del    = require('del');
var config = require('../config');

module.exports = {
    js: function(cb) {
        return del([config.scripts.dist], cb);
    },
    css: function(cb) {
        return del([config.styles.dist], cb);
    }
}
