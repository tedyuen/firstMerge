/**
 * Created by tedyuen on 16-12-7.
 */
var $ = global.jQuery = require('jquery');
require('bootstrap');
require('metismenu');
require('jquery-slimscroll');
require('jquery-toast-plugin');

//
var LogUtil = require('./utils/LogUtil');
var log = new LogUtil(true);//Set can out log.

require('bootstrap-datepicker');
require('./utils/bootstrap-datepicker');


var angular = require('angular');
require('angular-route');

jQuery('.mydatepicker').datepicker({
  language: 'zh-CN',
  autoclose: true,
  format: "yyyy年mm月dd日",
  todayHighlight: true
});







