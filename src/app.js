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

    $("body").on("click", ".login-form", function(){
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
        }).done(function(data) {
            $("#nav").html(compile_template("#nav-template", {username: data.username}));
            alert("Success");
        }).fail(function(data){
            alert(JSON.parse(data.responseText).message);
        });
    });

    $("#dashboard").html(compile_template("#login-form", {}));
});