const gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var del = require('del');
var obfuscate = require('gulp-obfuscate');


var cssArr = [
  './app/source/css/node/bootstrap.min.css',
  './app/source/css/node/jquery.toast.min.css',
  './app/source/css/node/metisMenu.min.css',
  './app/source/css/pixel/animate.css',
  './app/source/css/pixel/style.css',
  './app/source/css/pixel/spinners.css',
  './app/source/css/pixel/colors/default.css',
  './app/source/css/node/bootstrap-datepicker.min.css',
];

var jsArr = [
  './app/source/js/module/main.js',
  './app/source/js/module/custom.js',
  './app/source/js/module/waves.js',
  './app/source/js/module/controller/*.js',
  './app/source/js/module/provider/*.js',
  './app/source/js/module/route.js',
];

// css
gulp.task('concatcss',['nodeModule'],function(){
  return gulp.src(cssArr)    //- 需要处理的css文件，放到一个字符串数组里
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./app/source/css'));
});

gulp.task('css',['concatcss'], function() {
  return gulp.src('./app/source/css/all.min.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./app/out/css'));
});
// css

gulp.task('js',function(){
  gulp.src(jsArr)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./app/source/js/module'))
    .pipe(rename({suffix: '.min'}))
    .pipe(browserify())
    // .pipe(uglify({ mangle: false, compress:true, output: { beautify: false } }))
    //.pipe(obfuscate())
    .pipe(gulp.dest('./app/out/js'));
});


gulp.task('nodeModule',function(){
  // bootstrap
  gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./app/source/css/node'));
  // gulp.src('./node_modules/bootstrap/fonts/glyphicons-halflings-regular.*')
  //   .pipe(gulp.dest('./app/static/fonts'));
  // bootstrap

  // jquery.toast
  gulp.src('./node_modules/jquery-toast-plugin/dist/jquery.toast.min.css')
    .pipe(gulp.dest('./app/source/css/node'));
  // jquery.toast

  // bootstrap-datepicker
  gulp.src('./node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css')
    .pipe(gulp.dest('./app/source/css/node'));
  // bootstrap-datepicker

  // metisMenu
  gulp.src('./node_modules/metismenu/dist/metisMenu.min.css')
    .pipe(gulp.dest('./app/source/css/node'));
  // metisMenu

});

gulp.task('default',['js','css']);


