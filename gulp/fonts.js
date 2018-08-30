const gulp              = require('gulp');
const plumber           = require('gulp-plumber');
const notify            = require('gulp-notify');

gulp.task('fonts', function () {
    return gulp.src([
            'src/libs/components-font-awesome/fonts/fontawesome-webfont.woff'
        ])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(gulp.dest('dist/fonts/'));
});