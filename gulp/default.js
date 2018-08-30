const gulp              = require('gulp');
const cache             = require('gulp-cache');
const del               = require('del');

gulp.task('clear-img-cache', function(){
    cache.clearAll();
})

gulp.task('del', function(){
    del.sync('dist');
});

gulp.task('default', [
                      'less', 'less:watch', 
                      'sass', 'sass:watch',
                      'html', 'html:watch', 
                      'js', 'js:watch', 
                      'img', 'img:watch',
                      'css',
                      'server'
                    ]);