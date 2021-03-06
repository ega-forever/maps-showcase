var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');



gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "../server/public"
        }
    });
});

gulp.task('css', function () {
    gulp.src('styles/css/**/*.css')
        .pipe(stylus({compress: false, paths: ['source/stylus']}))
        .pipe(gulp.dest('../server/public/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function () {
    gulp.src('app/**/*.js')
        .pipe(gulp.dest('../server/public/js'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('jasmine', function () {
    gulp.src('tests/*.js')
        .pipe(gulp.dest('../server/public/js/tests'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('html', function () {
    gulp.src('views/**/*.jade')
        .pipe(jade({basedir: '../server/public'}))
        .pipe(gulp.dest('../server/public'))
        .pipe(browserSync.reload({stream: true}))

    gulp.src('views/**/*.html')
        .pipe(gulp.dest('../server/public'))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task('fonts', function () {
    gulp.src('styles/fonts/**/*')
        .pipe(gulp.dest('../server/public/fonts'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('bower', function () {
    gulp.src('bower_components/**/*')
        .pipe(gulp.dest('../server/public/bower_components'))
});





gulp.task('watch', function () {

    gulp.start('css');
    gulp.start('html');
    gulp.start('js');
    gulp.start('jasmine');
    gulp.start('fonts');
    gulp.start('bower');

    gulp.watch('styles/css/**/*.css', ['css', browserSync.reload]);
    gulp.watch('app/**/*.js', ['js', browserSync.reload]);
    gulp.watch('tests/*.js', ['jasmine', browserSync.reload]);
    gulp.watch('styles/fonts/**/*', ['fonts', browserSync.reload]);
    gulp.watch('views/**/*.jade', ['html', browserSync.reload]);
});

gulp.task('compile',  function(){
    gulp.start('css');
    gulp.start('html');
    gulp.start('js');
    gulp.start('jasmine');
    gulp.start('fonts');
    gulp.start('bower');
});

gulp.task('start', ['browser-sync', 'watch']);

