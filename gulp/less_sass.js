const gulp              = require('gulp');
const less              = require('gulp-less');
const config            = require('../package.json').config;
const autoprefixer      = require('gulp-autoprefixer');
const cssnano           = require('gulp-cssnano');
const rename            = require('gulp-rename');
const sourcemaps        = require('gulp-sourcemaps');
const plumber           = require('gulp-plumber');
const notify            = require('gulp-notify');
const gulpMultiProcess  = require('gulp-multi-process')
const sass              = require('gulp-sass');

gulp.task('less', function () {
    return gulp.src([
            'src/less/main.less',
            'src/libs/components-font-awesome/less/font-awesome.less'
        ])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sourcemaps.init())
        .pipe(less().on('error', function (err) {
            console.log(err);
            this.emit('end');
        }))
        .pipe(autoprefixer({
            browsers: ['last 4 versions', 'ie 10'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('sass', function(){
    return gulp.src([
        'src/sass/*.sass', 
        'src/sass/*.scss'
    ])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 4 versions', 'ie 10'],
        cascade: false
    }))
    .pipe(cssnano())
    .pipe(rename({
        suffix: ".min",
        extname: ".css"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/'));    
});

gulp.task('less:watch', function () {
    return gulp.watch('src/less/**/*', function(){
        //https://github.com/stevelacy/gulp-less/issues/283
        gulpMultiProcess(['less'], function(){});
    });
});

gulp.task('sass:watch', function(){
    return gulp.watch('src/sass/**/*', ['sass']);
})