var concat  = require('gulp-concat');
var cssmin  = require('gulp-cssmin');
var gulp    = require('gulp');
var uglify  = require('gulp-uglify');

gulp.task('rex', function () {
  
  return gulp.src([
                  './bower_components/rex/dist/rex.min.js'
                , './bower_components/rex/dist/rex-h.min.js'
                , './bower_components/rex/dist/rex-http.min.js'
                , './bower_components/rex/dist/rex-module.min.js'
                , './bower_components/rex/dist/rex-route.min.js'
              ])
             .pipe(concat('rex.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dist/'));
  
});

gulp.task('js', ['rex'], function () {
  
  return gulp.src(['./app/**/*.js'])
             .pipe(concat('app.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dist/'));
  
});

gulp.task('css', function () {
  
  return gulp.src(['./content/css/**/*.css'])
             .pipe(concat('style.css'))
             .pipe(cssmin())
             .pipe(gulp.dest('./dist/'));
  
});

gulp.task('watch', function() {
  gulp.watch('./app/**/*.js', ['js']);
  gulp.watch('./content/css/**/*.css', ['css']);
});

gulp.task('default', ['js', 'css']);