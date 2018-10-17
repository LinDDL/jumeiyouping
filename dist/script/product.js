//box:.pro_imgs
//osmall:.imgszoom
//mask:.jqZoomPup
//obig:.zoomdiv
//$(".product_Bimg"):.product_Bimg
(function(){
    $(".imgszoom").on("mouseenter",function(){
        $(".zoom_icon").css({"display":"none"});
        $(".zoomdiv").css({"display":"block"});
        $(".jqZoomPup").css({"display":"block"});        
    })
    $(".imgszoom").on("mouseleave",function(){
        $(".zoom_icon").css({"display":"block"});
        $(".zoomdiv").css({"display":"none"});
        $(".jqZoomPup").css({"display":"none"});        
    })
    var strArray=[];
    $(".imgszoom").on("mousemove",function(evt){
            var e=evt||window.event;           
            var maxX=$(".imgszoom").width()-$(".jqZoomPup").width();
            var maxY=$(".imgszoom").height()-$(".jqZoomPup").height();
            var x=e.pageX-oBox.offset().left-$(".jqZoomPup").width()/2;
            var y=e.pageY-oBox.offset().top-$(".jqZoomPup").height()/2;
            if(x<0){
                x=0;
            }else if(x>maxX){
                x=maxX;
            }else{
                x=x;
            }
            if(y<0){
                y=0;
            }else if(y>maxY){
                y=maxY;
            }else{
                y=y;
            }
            $(".jqZoomPup").css({"left":x +"px"});
            $(".jqZoomPup").css({"top":y +"px"});
            //console.log( $(".jqZoomPup").style.left,$(".jqZoomPup").style.top);
            var x1=x*($(".product_Bimg").width()-oBig.width())/($(".imgszoom").width()-$(".jqZoomPup").width());
            var y1=y*($(".product_Bimg").height()-oBig.height())/($(".imgszoom").height()-$(".jqZoomPup").height());
            $(".product_Bimg").css({"left":x +"px"});
            $(".product_Bimg").css({"top":y +"px"});
            
        })

})