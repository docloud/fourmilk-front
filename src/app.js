/*
Copyright 2015 FourMilk
 */

var Bootstrap = require("bootstrap");
var Jquery = require("jquery");
var Handlebars =require("handlebars");
var JqueryCookie = require("jquery.cookie");

var $ = Jquery;

var compile_template = function(selector, context) {
    var source = $(selector).html();
    var template = Handlebars.compile(source);
    return template(context);
};



$("form").on("click", ".submit-form", function(){
    var form = $(this);
    var method = form.data("method");
});
