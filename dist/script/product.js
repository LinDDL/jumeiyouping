//box:.pro_imgs
//osmall:.imgszoom
//mask:.jqZoomPup
//obig:.zoomdiv
//$(".product_Bimg"):.product_Bimg

    $(".imgszoom").on("mouseover",function(){
        $(".zoom_icon").css({"display":"none"});
        $(".zoomdiv").css({"display":"block","left":380+"px"});
        $(".jqZoomPup").css({"display":"block"});        
    })
    $(".imgszoom").on("mouseout",function(){
        $(".zoom_icon").css({"display":"block"});
        $(".zoomdiv").css({"display":"none"});
        $(".jqZoomPup").css({"display":"none"});        
    })
    $(".imgszoom").on("mousemove",function(evt){
            var e=evt||window.event;           
            var maxX=$(".imgszoom").width()-$(".jqZoomPup").width();
            var maxY=$(".imgszoom").height()-$(".jqZoomPup").height();
            var x=e.pageX-$(".pro_imgs").offset().left-$(".jqZoomPup").width()/2;
            var y=e.pageY-$(".pro_imgs").offset().top-$(".jqZoomPup").height()/2;
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
            var x1=x*($(".product_Bimg").width()-$(".zoomdiv").width())/($(".imgszoom").width()-$(".jqZoomPup").width());
            var y1=y*($(".product_Bimg").height()-$(".zoomdiv").height())/($(".imgszoom").height()-$(".jqZoomPup").height());
            $(".product_Bimg").css({"left":-x1 +"px"});
            $(".product_Bimg").css({"top":-y1 +"px"});
            
        })

