var mySwiper=new Swiper(".swiper-container",{autoplay:!0,loop:!0});$(function(){$(".tab_menu span").click(function(){$(".tab_menu span").eq($(this).index()).addClass("tab_menu_active").siblings().removeClass("tab_menu_active"),$(".tab_content .tab_box").hide().eq($(this).index()).show()})}),$(function(){setInterval(function(){var e=(new Date).getTime(),m=new Date("2018-10-16 00:00:00").getTime()-e;if(0<=m){var t=Math.floor(m/1e3/60/60/24%365),a=Math.floor(m/1e3/60/60%24),i=Math.floor(m/1e3/60%60),o=Math.floor(m/1e3%60);t<10&&(t="0"+t),a<10&&(a="0"+a),i<10&&(i="0"+i),o<10&&(o="0"+o)}$(".today_time").html(t+":"+a+":"+i+":"+o),$("#time_box").html("<em>"+t+"</em>天<em>"+a+"</em>时<em>"+i+"</em>分<em>"+o+"</em>秒"),$("#home_timer").html("<em>"+t+"</em>天<em>"+a+"</em>时<em>"+i+"</em>分<em>"+o+"</em>秒"),$("#home_timer1").html("<em>"+t+"</em>天<em>"+a+"</em>时<em>"+i+"</em>分<em>"+o+"</em>秒"),$("#home_timer2").html("<em>"+t+"</em>天<em>"+a+"</em>时<em>"+i+"</em>分<em>"+o+"</em>秒"),$("#home_timer3").html("<em>"+t+"</em>天<em>"+a+"</em>时<em>"+i+"</em>分<em>"+o+"</em>秒")},1e3)});