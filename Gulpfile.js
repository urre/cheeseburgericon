/*-------------------------------------------------------------------

	Clean and optimize SVG icon

	Usae: $ gulp

-------------------------------------------------------------------*/

var gulp = require('gulp');
var svgo = require('gulp-svgo');
var cleanSketch = require('gulp-clean-sketch');
var size = require('gulp-size');

gulp.task('default', function () {
    gulp.src('src/*.svg')
        .pipe(cleanSketch())
        .pipe(svgo())
        .pipe(size())
        .pipe(gulp.dest('icon'));
});