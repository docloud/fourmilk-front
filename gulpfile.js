var pkg = require('./package.json');
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');

var page_files = [
    './src/**',
    '!./src/app.js',
    '!./src/html'
];

var site_dir = 'site';

gulp.task('default', ['library', 'app', 'site', 'html', 'jquery']);

/*
站点第三方依赖库
 */
gulp.task('library', function() {
    gulp.src('./node_modules/bootstrap/dist/**')
        .pipe(gulp.dest(site_dir + '/lib/bootstrap'));
});

gulp.task('jquery', function() {
    gulp.src('./node_modules/jquery/dist/**')
        .pipe(gulp.dest(site_dir + '/lib/jquery'));
});

/*
站点业务逻辑
 */
gulp.task('app', function() {
    gulp.src('./src/app.js')
        .pipe(browserify())
        .pipe(gulp.dest(site_dir));
});

/*
站点静态文件，其他文件
 */
gulp.task('site', function() {
    gulp.src(page_files)
        .pipe(gulp.dest(site_dir));
});

/*
站点页面文件
 */
gulp.task('html', function() {
    gulp.src(['./src/header.html', './src/html/*.html', './src/footer.html'])
        .pipe(concat('index.html'))
        .pipe(gulp.dest(site_dir));
});

/*
启动本地调试服务器
 */
gulp.task('serve', function() {
    connect.server({
        root: ['site'],
        port: 3001,
        livereload: true,
        middleware: function (connect, opt) {
            var middlewares = [];
            try {
                middlewares = require('./proxy.json').map(function (opt) {
                    return proxy(opt);
                });
            } catch (e) {
                console.info('proxy.json not exist');
            }
            return middlewares;
        }
    });

    gulp.watch(['./src/*', './src/html/*'], ['app', 'site', 'html']);
});
