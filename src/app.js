/*
Copyright 2015 FourMilk
 */

var Handlebars =require("handlebars");
var JqueryCookie = require("jquery.cookie");
var Bootstrap = require("bootstrap");

$(document).ready(function(){
    var user = null;
    var url_prefix = "http://localhost:3000/";
    var compile_template = function(selector, context) {
        var source = $(selector).html();
        var template = Handlebars.compile(source);
        return template(context);
    };
    
    var homepage = function() {
        $.get(url_prefix + "part", function(data) {
            var html = compile_template("#table", {data: data.data, is_admin: user.role == 1});
            $("#dashboard").html(html);
        });
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
            homepage();
            alert("Success");
        });
    });

    $("body").on("click", "[data-pages]", function() {
        var button = $(this);
        var row = $(this).parents('tr');
        var id = row.data("id");
        var name = row.data("name");
        var html = compile_template(button.data('pages'), {id: id, name: name});
        $("#dashboard").html(html);
    });
    
    $("body").on("click", ".login-form", function(){
        var form = $(this).parents("form");
        var action = form.attr("action");
        var method = form.attr("method");

        $.ajax({
            url: action,
            type: method,
            async: false,
            data: form.serialize()
        }).done(function(data) {
            user = {
                username: data.username,
                role: data.role
            };
            homepage();
            $("#nav").html(compile_template("#nav-template", {user: user}));
        }).fail(function(data){
            alert(JSON.parse(data.responseText).message);
        });
    });

    $("body").on("click", "#logout", function(){
        user = null;
        $("#dashboard").html(compile_template("#login-form", {}));
        $("#nav").html(compile_template("#nav-template", {user: user}));
    });
    
    
    if (user == null) {
        $("#dashboard").html(compile_template("#login-form", {}));
        $("#nav").html(compile_template("#nav-template", {user: user}));
    }
});