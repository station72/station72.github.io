const gulp              = require('gulp');
// const gls               = require('gulp-live-server');
const browserSync       = require('browser-sync').create();

  gulp.task('server:start', function(){

    browserSync.init({
      server: {
        baseDir: 'dist/'
      },
      notify: true
    });

    return gulp.watch('dist/**/*').on('change', browserSync.reload);
  });

  gulp.task('server', ['server:start']);