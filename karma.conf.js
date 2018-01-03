let webpackConfig = require('./webpack.config.js');
delete webpackConfig.entry;

// karma.conf.js
module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            'test/**/*.spec.js'
        ],
        preprocessors: {
            'test/**/*.spec.js': ['webpack']
        },
        // use the webpack config
        webpack: webpackConfig,
        // avoid walls of useless text
        webpackMiddleware: {
            noInfo: true
        },
        singleRun: true,
        reporters: ['spec'],
    })
};
