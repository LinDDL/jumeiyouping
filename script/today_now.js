//$.ajax({
    //     url:"http://localhost:8001/proxy/bj.jumei.com/Ajax/GetHomeTodayLists/100/1",
    //     type:'GET',
    //     dataType:"json",
    // })
    // .then(function(res){
    //     console.log(res);
    // })
function WaterFall(){};
$.extend(WaterFall.prototype,{
    init:function(){
        this.main=$("#today_now_goods");
        this.loadJson()
        .done(function(res){
            this.json=res.list;
            console.log(this.json);
            // this.renderPage(res.list);
            this.renderPage(res);

        })

    },
    loadJson:function(){
        var opt={
            url:"http://localhost:8001/proxy/bj.jumei.com/Ajax/GetHomeTodayLists/100/1",
            type:'GET',
            dataType:"json",
        }
        return $.ajax(opt);
    },
    renderPage:function(json){
        // console.log(json);
        var html = "";
        for(var i = 0 ; i < json.list.length ; i ++){
            html += `  <div class="tab_box">
            <div class="today_tab_content">
                <a href="#" class="today_tab_link">
                   <img src="images/bk1.jpg" alt="" class="cart_img">
                   <span class="today_top_1"></span> 
                </a>
                <span class="tags_list haitao">海淘</span>
                <div class="produce_detail">
                    <div class="the_time">
                        <span class="end_time">
                            <span class="end_text">距特卖结束</span>
                            <span class="today_time"></span>
                        </span>
                    </div>
                    <a href="#" class="product_title">
                        【香港直邮】什么？你还没用过SK-II护肤面膜（10片）？女人一生中至少也要经历一次SK-II护肤面膜的亲密接触！敷一次肌肤就嫩到你的前男友悔不当初！现男友爱你到死心塌地！富含30ml的精华液，让你皮肤满足的吃饱营养，每一个细胞都变得活力充盈！
                    </a>
                    <div class="product_price">
                        <span class="now_price">
                            <em>￥</em>
                            659
                        </span>
                        <div class="old_price">￥1060</div>
                        <div class="goto_cart_wrap all_cart_wrap">
                            <a class="goto_btn goto_cart all_cart" href="javascript:;">加入购物车</a>
                        </div>
                    </div>
                    <div class="tag">
                        <span class="tag_a">
                            <img src="images/tag.jpg" alt="">
                        </span>
                        <span class="tag_like">
                            <em>0</em>
                            人已购买
                        </span>
                    </div>
                    
                </div>

            </div>
        </div>
                    `
        }
        this.main.html(this.main.html() + html);
        // this.sortPage();
    }
    

})
var waterfall = new WaterFall();
waterfall.init();
