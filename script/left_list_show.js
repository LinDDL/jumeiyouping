$(function(){
    $(window).on('scroll',function(){
        //console.log($("html,body").scrollTop());
        if($("html,body").scrollTop()>$(".today_main").offset().top-60){
            $(".left_nav").css({
                'visibility': 'visible',
                "position":"fixed"
            })
            $(".left_nav").addClass('home_nav_bar_action');
        }else{
            $(".left_nav").css({
                "position":"absolute",
            });
            $(".left_nav").removeClass('home_nav_bar_action');
        }      
         
    
})
})