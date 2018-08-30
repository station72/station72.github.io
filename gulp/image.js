const gulp              = require('gulp');
const imageMin          = require('gulp-imagemin');
const pngQuant          = require('imagemin-pngquant');
const cache             = require('gulp-cache');
const watch             = require('gulp-watch');

gulp.task('img', function(){
    return gulp.src('src/img/**/*')
        .pipe(cache(imageMin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            une: pngQuant()
        })))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('img:lightbox', function(){
    return gulp.src('src/libs/lightbox2/src/images/**/*')
        .pipe(gulp.dest('dist/images'))
});

gulp.task('img:watch', function(){
    gulp.start(['img:lightbox']);
    return watch('src/img/**/*', function(){
        return gulp.start(['img']);
    });
});