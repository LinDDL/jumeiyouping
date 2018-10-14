$(function(){
    function foo(){
        var date=new Date();
        var start=date.getTime();
        var enddate=new Date("2018-10-16 00:00:00");
        var end=enddate.getTime();
        var lastTime=end-start;
    
        if(lastTime>=0){
            var d=Math.floor(lastTime/1000/60/60/24%365);
            var h=Math.floor(lastTime/1000/60/60%24);
            var m=Math.floor(lastTime/1000/60%60);
            var s=Math.floor(lastTime/1000%60);
            if(d<10){
                d="0"+d;
            }
            if(h<10){
                h="0"+h;
            }
            if(m<10){
                m="0"+m;
            }
            if(s<10){
                s="0"+s;
            }
        }
        
       $('.today_time').html(d+":"+h+":"+m+":"+s);
       $('#time_box').html("<em>"+d+"</em>天<em>"+h+"</em>时<em>"+m+"</em>分<em>"+s+"</em>秒");
       $('#home_timer').html("<em>"+d+"</em>天<em>"+h+"</em>时<em>"+m+"</em>分<em>"+s+"</em>秒");
       $('#home_timer1').html("<em>"+d+"</em>天<em>"+h+"</em>时<em>"+m+"</em>分<em>"+s+"</em>秒");
       $('#home_timer2').html("<em>"+d+"</em>天<em>"+h+"</em>时<em>"+m+"</em>分<em>"+s+"</em>秒");
       $('#home_timer3').html("<em>"+d+"</em>天<em>"+h+"</em>时<em>"+m+"</em>分<em>"+s+"</em>秒");
        
    }
    setInterval(foo,1000);    
})
