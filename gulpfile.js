var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less',function(){
	gulp.src('styles/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('styles'));
});

gulp.task('default',['less']);