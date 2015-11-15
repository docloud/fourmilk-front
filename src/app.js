/*
Copyright 2015 FourMilk
 */

var Handlebars =require("handlebars");
var JqueryCookie = require("jquery.cookie");
var Bootstrap = require("bootstrap");

$(document).ready(function(){
    var url_prefix = "http://localhost:3000/";
    var compile_template = function(selector, context) {
        var source = $(selector).html();
        var template = Handlebars.compile(source);
        return template(context);
    };

    $("body").on("click", ".submit-form", function(){
        var form = $(this).parents("form");
        var action = form.attr("action");
        var method = form.attr("method");

        $.ajax({
            url: action,
            type: method,
            async: false,
            data: form.serialize()
        }).done(function() {
            alert("Success");
        });
    });

    $("#nav").html(compile_template("#nav-template", {}));
    
    $.get(url_prefix + "part", function(data) {
        var html = compile_template("#table", data);
        $("#dashboard").html(html);
    });
    
    $("body").on("click", "[data-pages]", function() {
        var button = $(this);
        var row = $(this).parents('tr');
        
        var html = compile_template(button.data('pages'), {});
        $("#dashboard").html(html);
    });
});