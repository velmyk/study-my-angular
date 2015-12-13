var gulp = require('gulp'),
		jshint = require('gulp-jshint'),
		Server = require('karma').Server;


gulp.task('jshint', function() {
	return gulp.src('src/**/*.js')
		.pipe(jshint({"esnext": true}))
		.pipe(jshint.reporter('default'));
});

gulp.task('test', function(){  
	new Server({
		configFile:__dirname + '/karma.conf.js',
		singleRun: false
	}).start();
});

gulp.task('watch', function () {
	gulp.watch('src/**/*.js',['jshint']);
});


gulp.task('default', ['watch','test']);
