$(function(){
    //鼠标划入btn_login显示login_box，划出隐藏
    //这里涉及延时器，当划入login_box，使其显示
    $(".btn_login").on("mouseenter",function(){
        $(".login_box").css({
            "display":"block",
        })
    })
    var timer=null;
    $(".btn_login").on("mouseleave",function(){
        timer=setTimeout(function(){
            $(".login_box").css({
            "display":"none",
            })
        },500)
        
    })
    $(".login_box").on("mouseenter",function(){
        clearTimeout(timer);
    })
    $(".login_box").on("mouseleave",function(){
        $(".login_box").css({
            "display":"none",
        })
    })
    $(".close_btn").on("click",function(){
        $(".login_box").css({
            "display":"none",
        })
    })
    //显示元素
    //特效为1.显示
    //      2.从左向右滑动
    $(".main_panel .btn_li").on("mouseenter",function(){
        $(".panel_top .btn_li")
        .eq($(this).index())
        $(this).children(".tool_text").css({
            "visibility":"visible",
            "left":"-92px",
            "opacity":"1"
        })
       
    })
    $(".main_panel .btn_li").on("mouseleave",function(){
        $(".panel_top .btn_li")
        .eq($(this).index())
        $(this).children(".tool_text").css({
            "visibility":"hidden",
            "left":"-122px",
            "opacity":"0"
        })
       
    })
    //鼠标划入btn_code显示np_code，划出隐藏
    //这里涉及延时器，当划入login_box，使其显示
    $(".btn_code").on("mouseenter",function(){
        $(".np_code").css({
            "display":"block",
        })
    })
    var timer=null;
    $(".btn_code").on("mouseleave",function(){
        timer=setTimeout(function(){
            $(".np_code").css({
            "display":"none",
            })
        },500)
        
    })
    $(".np_code").on("mouseenter",function(){
        clearTimeout(timer);
    })
    $(".np_code").on("mouseleave",function(){
        $(".np_code").css({
            "display":"none",
        })
    })
    $(".np_code").on("click",function(){
        $(".np_code").css({
            "display":"none",
        })
    })
    //返回顶部效果
    $(window).on('scroll',function(){
        //console.log($("html,body").scrollTop());
        if($("html,body").scrollTop()>200){
            $(".btn_gotop").css({
                'visibility': 'visible',
            })
        }else{
            $(".btn_gotop").css({
                'visibility': 'hidden',
            });
        }      
        
    })
    $(".btn_gotop").on("click",function(){
        $("html,body").scrollTop(0);
    })
})