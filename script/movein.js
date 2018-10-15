$(function(){
    $('.img_box_href').on("mouseenter",function(){
        $('.commit_new').css({
            "display":"block",
            })
        $('.add_cart_box').css({
            "display":"block",
            });
    })
    $('.img_box_href').on("mouseleave",function(){
        timer=setTimeout(function(){
            $('.commit_new').css({
                "display":"none",
                });
            $('.add_cart_box').css({
                "display":"none",
                });
        },100)
    })
    $(".commit_new").on("mouseenter",function(){
        clearTimeout(timer);
    })
    
    $(".add_cart_box").on("mouseenter",function(){
        clearTimeout(timer);
    })
})

