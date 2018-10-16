$(function(){
    $(".shopping").on("mouseenter",function(){
        $(".pop_box").css({
            "display":"block",
            })
            
    })
    $(".shopping").on("mouseleave",function(){
        timer=setTimeout(function(){
            $(".pop_box").css({
            "display":"none",
            })
        },500)
        
    })
    $(".pop_box").on("mouseenter",function(){
        clearTimeout(timer);
    })
    $(".pop_box").on("mouseleave",function(){
        $(".pop_box").css({
            "display":"none",
        })
    })
})
