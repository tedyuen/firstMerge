const gulp = require('gulp');

var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');


var cssArr = [
  './app/source/css/node/jquery.toast.min.css',
  './app/source/css/node/bootstrap-datepicker.min.css',
  './app/source/css/pixel/animate.css',
  './app/source/css/pixel/style.css',
  './app/source/css/pixel/spinners.css',
  './app/source/css/pixel/colors/default.css',
];

gulp.task('concatcss',['nodeModule'],function(){
  return gulp.src(cssArr)    //- 需要处理的css文件，放到一个字符串数组里
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./app/source/css'));
});

gulp.task('minify-css',['concatcss'], function() {
  return gulp.src('./app/source/css/all.min.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./app/out/css'));
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

});

gulp.task('default',[]);


