var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

gulp.task('sass',function(){
  return gulp
    .src('./dev/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: "./dist"
  });

  gulp.watch("./dev/sass/**/*.scss", ['sass']);
  gulp.watch("./dist/*.html").on( 'change', browserSync.reload);

});

gulp.task('default', ['serve']);
