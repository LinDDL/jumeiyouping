$(function(){
    //登录选项卡
        $(".radiobox span").click(function(){
            $(".radiobox span")
            .eq($(this).index())
            $(".logo_box .in_box").hide()
            .eq($(this).index())
            .show()
        });
    //更多部分的特效，点击出现更多模块。并改变图标背景图的位置
    var index=0;
    $(".more").on("click",function(){
        index++;
        $(".icon-p").slideToggle();
        if(index%2==0){
            $('.more i').css({
            "background-position": "-274px -23px"
            })
        }else{
            $('.more i').css({
            "background-position": "-274px 0"
            })
        }     
    })
    var str=window.location.hash;
    var list = str.split("http://localhost:8001/jumei_login.html?");
    if(list.indexOf("bylogin")==1){
        $("#logins").css({"display":"block;"})
       $("#ress").css({"display":"none;"})
    }else if(list.indexOf("byres")==1){
        $("#logins").css({"display":"none;"})
        $("#ress").css({"display":"block;"})
    }
})
