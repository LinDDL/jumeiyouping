//面向对象编程
function WaterFall(){}
$.extend(WaterFall.prototype,{
    //初始化
    init:function(){
        //当前页数
        this.page=1;
        this.main = $("#today_new_produces");
        //判断是否在加载中
        this.loading = false;
        //和promise .then相似
        this.loadJson()     //返回值是deferred对象（promise前身）
        .done(function(res){
             // deferred 的 done 回调 this指向的都是 jquery 对象本身
             //console.log(res.list);
            this.renderPage(res.list);
            
        })
        this.bindEvent();

    },
    //加载数据
    loadJson:function(){
        var opt = {
            // url:"http://www.wookmark.com/api/json/popular",
            url:"http://localhost:8001/proxy/bj.jumei.com/Ajax/GetHomeTodayLists/100/1",
            dataType:"json",
            // data:{page:this.page},
            // //this  ===>指向实例化对象
            context:this
        }
        return $.ajax(opt);
        
        
    },
  
    //渲染页面
    renderPage:function(json1){

       console.log(json1);
       var json=json1;
       //console.log(json)
        var html="";
        for( var i=0; i<json.length; i++){
            // var height = json[i].height/(json[i].width/220);
            // if(isNaN(height)) continue;
        //     html +=`
        //             <div class="box" style="height:${height}px">
        //                 <img src="${json[i].show.img}" alt="">
        //                 </div>
        //             `
        //             console.log(json[i].price)
        // }
        //var height = json[i].height;
            // if(isNaN(height)) continue;
        html +=`
        <li class="deal_box">
        <div class="img_box">
            <a href="#" class="img_box_href">
                <img src="http://p3.jmstatic.com/product/000/032/32923_std/32923_350_350.jpg" alt="">                          
            </a>
            <i class="deal_tags teg_list fangwei"></i>
            <div class="commit_new">
                <div class="commit_new_box">
                    <b class="link">
                        <i class="num">18708</i> 
                        条评论
                    </b>
                    <div class="service_rating">
                        <i class="rating_num">4.7/5</i>
                        <div class="rating">
                            <div class="value" style="width:94%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="add_cart_box all_cart_wrap"><a href="javascript:void(0)" class="add_cart all_cart">加入购物车</a></div>
        <a href="#" class="clearfix">
            <div class="deal_detail">
                <p class="title"><span class="pink">【官方授权】</span>欣兰黑里透白冻膜500g，肌肤“冻”出干净亮白！</p>
                <div class="in_box">
                    
                    <div class="price_box">
                        <em>¥</em>
                        <span class="pnum">198</span>
                        <span class="mnum">¥298</span>
                    </div>
                    <div class="timer_box">
                        <div class="time_box" id="time_box"></div>
                        <div class="num_box">销量: <span class="buy_num">6005</span> |</div>
                    </div>
                </div>
            </div>
        </a>
    </li>
                    `
        }
        this.main.html(this.main.html() + html)
    },
    bindEvent:function(){
        $(window).on("scroll",this.ifLoad.bind(this));

    },
    //是否加载   滚动就会触发此事件
    ifLoad:function(){
        var scrollTop = $("html,body").scrollTop();
        var clientHeight = $("html")[0].clientHeight;
        var lastBox = this.main.children(":last");
        // console.log(lastBox)
        //加载到最后一张图片再次加载数据
        if(scrollTop + clientHeight > lastBox.offset().top){
            //如果已经加载，就return 0关闭，如果为false关闭就变为true
            if(this.loading){
                return 0
            }
            this.loading = true;
           // console.log("加载");
            this.page ++;
            this.loadJson()
            .done(function(res){
                this.renderPage(res);

            })
        }

    }
})

 var waterfall = new WaterFall();
 waterfall.init();

