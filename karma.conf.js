module.exports = function(config) {
  config.set({

    plugins: [
      'karma-jasmine',
      'phantomjs',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'morgan'
    ],

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/lodash/lodash.js',
      'src/**/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'src/**/*.js': ['coverage']
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false
  });
};