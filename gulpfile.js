var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

var sassOptions = {
  errLogConsole: true,
  outputStyle: 'expanded'
}

gulp.task('sass',function(){
  return gulp
    .src('./dev/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['sass'], function(){
  browserSync.init({
    reloadDelay: 2000,
    server: "./dist"
  });

  gulp.watch("./dev/sass/**/*.scss", ['sass']);
  gulp.watch("./dist/*.html").on( 'change', browserSync.reload);

});

gulp.task('default', ['watch']);
