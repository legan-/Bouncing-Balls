const webpackConfig = require('./webpack.config.js');

webpackConfig.entry = undefined;
webpackConfig.output = undefined;
webpackConfig.devServer = undefined;
webpackConfig.plugins = undefined;

module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/js/**/*spec.js'
    ],
    exclude: [

    ],
    preprocessors: {
      'src/js/**/*spec.js' : ['webpack'],
    },
    webpack: webpackConfig,
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
