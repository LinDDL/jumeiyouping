//点击li元素到相应的楼层的方法
var flag = true //设置标识。防止出现跑马灯  
$(".left_list li").click(function(){  
    //flag = false  
    $(this).addClass("act").siblings().removeClass("act")  
    var index = $(this).index()//获取当前点击元素的索引  
    var top = $(".ban").eq(index).offset().top;//获取每个banner到顶部的距离  
    $("html,body").stop(true).scrollTop(top)
})  
  
//          滚轮滑动切换楼层  
$(window).scroll(function(){  
    if(flag){  
    //浏览器可视窗口的一半，也可以根据自己需求设定  
        var winH = $(window).innerHeight()/2;  
        var scrollT = $(window).scrollTop()  
        var len = 3;  
        for(var i=0;i<len;i++){  
            //注意这里banner对象加了i之后变成了js对象,所以用offsetTop  
            var bannerGap = $(".ban")[i].offsetTop - scrollT  
            if(bannerGap < winH){  
                $(".left_list li").eq(i).addClass("act").siblings().removeClass("act")  
            }  
        }  
    }  
})  
