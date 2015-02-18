/**
 * Created by she on 2015/2/9.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var compiler = require('./bower_components/ember/ember-template-compiler');

var src = {
    'path': './client/app',
    'scripts': './bower_components/**/*',
    'templates': './client/app/templates/**/*.hbs',
    'app': [
        './client/app/app.js',
        './client/app/router.js',
        './client/app/routes/*.js',
        './client/app/helpers/*.js',
        './client/app/models/*.js',
        './client/app/controllers/*.js',
        './client/app/views/*.js'
    ]
};
var dist = {
    path: './client/public',
    scripts: './client/public/js',
    builds: './client/public/builds'
};
gulp.task('clean', function (cb) {
    del([dist.builds, dist.scripts], cb);
});
gulp.task('compile:tpl', function () {
    gulp.src(src.templates)
        .pipe($.emberTemplate({
            base: './client/app/templates'
        }))
        .pipe($.concat('templates.js'))
        .pipe(gulp.dest(dist.builds))
        .pipe($.livereload());
});
gulp.task('compile:app', function () {
    gulp.src(src.app)
        .pipe($.concat('application.js'))
        .pipe(gulp.dest(dist.builds))
        .pipe($.livereload());
});
gulp.task('link:scripts', function () {
    gulp.src(src.scripts)
        .pipe($.watch(src.scripts))
        .pipe($.replace(/bower_components/, ''))
        .pipe(gulp.dest(dist.scripts))
        .pipe($.livereload());
});
gulp.task('build', ['clean'], function () {
    gulp.start('compile:tpl', 'compile:app', 'link:scripts');
});
gulp.task('reload', function () {
    gulp.src('./client/public/**/*.*')
        .pipe($.watch('./client/public/**/*.*'))
        .pipe($.livereload())
});
gulp.task('watch', function () {
    $.livereload.listen();
    gulp.watch(src.templates, ['compile:tpl']);
    gulp.watch(src.app, ['compile:app']);
    gulp.watch(src.scripts, ['link:scripts']);
    gulp.watch('./client/public/**/*.*', ['reload']);
});
gulp.task('default', ['build', 'watch']);