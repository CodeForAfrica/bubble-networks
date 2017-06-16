var path = require('path');

module.exports = {
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'Android 4',
            'ie >= 9',
            'iOS >= 6'
        ]
    },
    sass: {
        errLogToConsole: true
    },
    scripts: {
        dist: path.join('dist', 'javascript'),
        src: 'src/scripts'
    },
    styles: {
        dist: path.join('dist', 'css'),
        src: 'src/styles'
    },
    production: true
};
