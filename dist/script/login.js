$(function(){$(".num").focus(function(){$(".num").siblings(".focus_text").css({display:"block"})}),$(".num").focusout(function(){$(".num").siblings(".focus_text").css({display:"none"})}),$(".password").focus(function(){$(".password").siblings(".focus_text").css({display:"block"})}),$(".password").focusout(function(){$(".password").siblings(".focus_text").css({display:"none"})}),$(".dynamic_password").focus(function(){$(".dynamic_password").siblings(".focus_text").css({display:"block"})}),$(".dynamic_password").focusout(function(){$(".dynamic_password").siblings(".focus_text").css({display:"none"})}),$(".myname").focus(function(){$(".myname").siblings(".focus_text").css({display:"block"})}),$(".myname").focusout(function(){$(".myname").siblings(".focus_text").css({display:"none"})}),$("#mobile").focus(function(){$("#mobile").siblings(".focus_text").css({display:"block"})}),$("#mobile").focusout(function(){$("#mobile").siblings(".focus_text").css({display:"none"})}),$("#mobile_verify").focus(function(){$("#mobile_verify").siblings(".focus_text").css({display:"block"})}),$("#mobile_verify").focusout(function(){$("#mobile_verify").siblings(".focus_text").css({display:"none"})}),$("#password").focus(function(){$("#password").siblings(".focus_text").css({display:"block"})}),$("#password").focusout(function(){$("#password").siblings(".focus_text").css({display:"none"})}),$("#password2").focus(function(){$("#password2").siblings(".focus_text").css({display:"block"})}),$("#password2").focusout(function(){$("#password2").siblings(".focus_text").css({display:"none"})})}),$(function(){$(".radiobox span").click(function(){$(".radiobox span").eq($(this).index()),$(".logo_box .in_box").hide().eq($(this).index()).show()});var s=0;$(".more").on("click",function(){s++,$(".icon-p").slideToggle(),s%2==0?$(".more i").css({"background-position":"-274px -23px"}):$(".more i").css({"background-position":"-274px 0"})});var o=window.location.hash.split("http://localhost:8001/jumei_login.html?");1==o.indexOf("bylogin")?($("#logins").css({display:"block;"}),$("#ress").css({display:"none;"})):1==o.indexOf("byres")&&($("#logins").css({display:"none;"}),$("#ress").css({display:"block;"}))});