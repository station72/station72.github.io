const gulp              = require('gulp');
const config            = require('../package.json').config;
const plumber           = require('gulp-plumber');
const notify            = require('gulp-notify');
const rename            = require('gulp-rename');
const cssnano           = require('gulp-cssnano');

gulp.task('css:min', function(){
    return gulp.src([
        'src/css/main.css',
    ])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(cssnano())
    .pipe(rename({
       suffix: '.min' 
    }))
    .pipe(gulp.dest('src/css/'))
});

gulp.task('css:copy', function () {
    return gulp.src([
            'src/libs/normalize.css/normalize.css',
            'src/libs/bootstrap/dist/css/bootstrap-grid.min.css',
            'src/css/**/*.min.css',
            'src/libs/lightbox2/dist/css/lightbox.min.css'
        ])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('css',['css:min', 'css:copy']);