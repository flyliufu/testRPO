var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var lazypipe = require('lazypipe');

var path = {
    app: 'app',
    dist: 'dist'
};

var paths = {
    scripts: [path.app + '/scripts/**/*.js'],
    styles: [path.app + '/styles/**/*.less'],
    templates: [path.app + '/templates/**/*.hbs'],
    views: [path.app + '/views/**/*.html']
};


////////////////////////
// Reusable pipelines //
////////////////////////

// var hintScripts = lazypipe()
//     .pipe($.jshint, '.jshintrc');

// var styles = lazypipe()
//     .pipe($.less)
//     .pipe($.autoprefixer, 'last 2 version')
//     .pipe(gulp.dest, '.tmp/styles');

// var handlebars = lazypipe()
//     .pipe($.handlebars)
//     .pipe($.defineModule, 'amd')
//     .pipe(gulp.dest, 'app/scripts/templates/');


gulp.task('serve', function() {
    $.connect.server({
        root: [path.app, path.app + '/views/', '.tmp', 'dist'],
        livereload: true,
        port: 8000
    });
});
gulp.task('less', function() {
    gulp.src(paths.styles)
        .pipe($.less())
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.connect.reload());
});
gulp.task('watch', function() {
    gulp.watch(paths.styles, ['less']);
});

gulp.task('default', ['serve', 'less', 'watch']);
