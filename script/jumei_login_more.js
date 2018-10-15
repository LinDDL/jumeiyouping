$(function(){
    var index=0;
    $(".more").on("click",function(){
        index++;
        $(".icon-p").toggle();
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
})
