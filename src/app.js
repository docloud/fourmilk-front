/*
Copyright 2015 FourMilk
 */

var Handlebars =require("handlebars");
var JqueryCookie = require("jquery.cookie");
var Bootstrap = require("bootstrap");

$(document).ready(function(){
    var compile_template = function(selector, context) {
        var source = $(selector).html();
        var template = Handlebars.compile(source);
        return template(context);
    };

    $("body").on("click", ".submit-form", function(){
        var form = $(this).parents("form");
        var action = form.attr("action");
        var method = form.attr("method");

        console.log(form);
        console.log(action);
        console.log(method);
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
    $("#dashboard").html(compile_template("#in-form", {}));
});