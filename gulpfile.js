'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const del = require('del');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const ngAnnotate = require('gulp-ng-annotate');
const flatten = require('gulp-flatten');
const mainBowerFiles = require('main-bower-files');
const filter = require('gulp-filter');
const rename = require('gulp-rename');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const concat = require('gulp-concat');
const file = require('gulp-file');
const runSequence = require('run-sequence');

gulp.task('default', function(done) {
    runSequence('clean', 'build', done);
});

gulp.task('clean', function() {
    const paths = 'dist/**/*';

    return del(paths);
});

gulp.task('build', ['build:vendor', 'build:app']);
gulp.task('build:vendor', ['vendor:scripts', 'vendor:styles']);
gulp.task('build:app', ['scripts', 'styles', 'html', 'assets']);

gulp.task('scripts', function() {
    const input = 'client/app/index.js';
    const output = gulp.dest('dist/scripts');
    const browserifyTask = browserify(input)
        .transform(babelify, { presets: ['babel-polyfill', 'es2015'] })
        .bundle();

    browserifyTask.on('error', errorHandler('Browserify'));

    return browserifyTask
        .pipe(source('app.js'))
        .pipe(ngAnnotate())
        .pipe(output);
});

gulp.task('styles', function() {
    const input = gulp.src('client/app/index.scss');
    const output = gulp.dest('dist/styles');
    const sassOptions = {
        style: 'expanded'
    };
    const processors = [
        autoprefixer()
    ];
    const sassTask = sass(sassOptions);
    const postCssTask = postcss(processors);
    const renameTask = rename('app.css');

    sassTask.on('error', errorHandler('Sass'));

    return input
        .pipe(sassTask)
        .pipe(postCssTask)
        .pipe(renameTask)
        .pipe(output);
});

gulp.task('html', ['partials'], function() {
    const input = gulp.src('client/index.html');
    const output = gulp.dest('dist');

    return input.pipe(output);
});

gulp.task('partials', function() {
    const input = gulp.src('client/app/**/*.html');
    const output = gulp.dest('dist/partials');

    return input
        .pipe(flatten())
        .pipe(output);
});

gulp.task('assets', ['fonts'], function() {
    const input = gulp.src('client/assets/**/*');
    const output = gulp.dest('dist/assets');

    return input.pipe(output);
});

gulp.task('fonts', function() {
    const input = gulp.src(mainBowerFiles());
    // TODO: Clean up hard coding
    const output = gulp.dest('dist/fonts/bootstrap');
    const filterTask = filter('**/*.{eot,otf,svg,ttf,woff,woff2}');

    return input
        .pipe(filterTask)
        .pipe(flatten())
        .pipe(output);
});

gulp.task('vendor:scripts', function() {
    const input = gulp.src(mainBowerFiles());
    const output = gulp.dest('dist/scripts');
    const filterTask = filter('**/*.js');
    const concatTask = concat('vendors.js');

    return input
        .pipe(filterTask)
        .pipe(concatTask)
        .pipe(output);
});

gulp.task('vendor:styles', function() {
    // TODO: Fix hack
    const input = gulp.src(mainBowerFiles());
    const output = gulp.dest('dist/styles');
    const sassOptions = {
        style: 'expanded'
    };
    const processors = [
        autoprefixer()
    ];
    const filterTask = filter('**/*.scss');
    const renameTask = rename('vendors.css');
    const sassTask = sass(sassOptions);
    const postCssTask = postcss(processors);

    sassTask.on('error', errorHandler('Sass'));

    //return file('vendors.scss', '@import "bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss"')
    return file('vendors.scss', '')
        //.pipe(filterTask)
        .pipe(sassTask)
        .pipe(postCssTask)
        .pipe(renameTask)
        .pipe(output);
});

gulp.task('watch', function() {
    gulp.run('default');

    gulp.watch('client/app/**/*.js', ['scripts']);
    gulp.watch('client/**/*.scss', ['styles']);
    gulp.watch('client/**/*.html', ['html']);
});

function errorHandler(title) {
    return function(err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
