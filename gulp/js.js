const gulp              = require('gulp');
const config            = require('../package.json').config;
const plumber           = require('gulp-plumber');
const sourcemaps        = require('gulp-sourcemaps');
const babel             = require('gulp-babel');
const include           = require('gulp-include');
const uglify            = require('gulp-uglify');
const notify            = require('gulp-notify');
const concat            = require('gulp-concat');

gulp.task('js:custom', function () {
    return gulp.src(['src/js/**/*.js'])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('js:libs', function(){
    return gulp.src([
        'src/libs/jquery/dist/jquery.min.js',
        'src/libs/lightbox2/dist/js/lightbox.min.js',
        'src/libs/owl.carousel/dist/owl.carousel.min.js',
        // 'src/libs/bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js', ['js:custom', 'js:libs']);

gulp.task('js:watch', function () {
    return gulp.watch(config.src.js, ['js']);
});