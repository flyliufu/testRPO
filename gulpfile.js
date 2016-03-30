var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('serve', function() {
    $.connect.server({
        livereload: true
    });
});
gulp.task('less',function(){
	gulp.src('app/styles/**/*.less')
	.pipe($.less())
	.pipe(gulp.dest('app/styles'))
	.pipe($.connect.reload());
});
gulp.task('watch',function(){
	gulp.watch('app/styles/**/*.less',['less']);
});

gulp.task('default',['less','serve','watch']);
// var less = require('gulp-less');

// gulp.task('less',function(){
// 	gulp.src('styles/**/*.less')
// 	.pipe(less())
// 	.pipe(gulp.dest('styles'));
// });
var path = {
    app: 'app',
    dist: 'dist'
};


// var connect = require('gulp-connect');
// gulp.task('watch', function() {
//     gulp.watch(['app/views/*.html'], ['html']);
// });

// gulp.task('connect', function() {
//     connect.server({
//         root: 'www',
//         livereload: true
//     });
// });

// gulp.task('html', function() {
//     gulp.src('./www/*.html')
//         .pipe(connect.reload());
// });

// gulp.task('default', ['connect', 'watch']);
