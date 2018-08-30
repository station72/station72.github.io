const gulp              = require('gulp');
const config            = require('../package.json').config;
const plumber           = require('gulp-plumber');
const notify            = require('gulp-notify');
const fileinclude       = require('gulp-file-include');

gulp.task('html', function () {
    return gulp.src(['src/*.html'])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
          }))      
        .pipe(gulp.dest(config.dest.html));
});

gulp.task('html:watch', function () {
    return gulp.watch('src/**/*.html', ['html']);
});