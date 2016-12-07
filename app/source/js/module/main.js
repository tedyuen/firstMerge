/**
 * Created by tedyuen on 16-12-7.
 */
var $ = global.jQuery = require('jquery');
require('bootstrap');
require('metismenu');
require('jquery-slimscroll');
require('jquery-toast-plugin');
require('bootstrap-datepicker');

jQuery('.mydatepicker').datepicker({
  language: 'cn',
  autoclose: true,
  format: "yyyy年mm月dd日",
  todayHighlight: true
});
// var angular = require('angular');
