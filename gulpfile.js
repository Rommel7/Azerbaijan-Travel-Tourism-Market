var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp
    .src('app/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    //   .pipe(browserSync.reload({stream: true}))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
  browserSync.init({

    server: {
      baseDir: 'app'
    }
  });

  gulp.watch('app/sass/*.scss', ['styles']);
  gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve']);
