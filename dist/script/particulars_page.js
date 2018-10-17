        function WaterFall(){}
            $.extend(WaterFall.prototype,{
                //初始化
                init:function(){
                    //当前页数
                    this.page=1;
                    this.main = $(".model_right");
                    //判断是否在加载中
                    this.loading = false;
                    //和promise .then相似
                    this.loadJson()     //返回值是deferred对象（promise前身）
                    .done(function(res){
                         // deferred 的 done 回调 this指向的都是 jquery 对象本身
                         //console.log(res.list);
                        this.renderPage(res.datalist);
                        console.log(res.datalist)
                    })
                    this.bindEvent();

                },
                //加载数据
                loadJson:function(){
                    var opt = {
                        // url:"http://www.wookmark.com/api/json/popular",
                        url:"http://lancome.jumei.com/Ajax/GetModuleByMId?arrModuleId%5B%5D=47586&arrModuleId%5B%5D=47587&storeid=101&is_review=0",
                        dataType:"jsonp",
                        // data:{page:this.page},
                        // //this  ===>指向实例化对象
                        context:this
                    }
                    return $.ajax(opt);
                    
                    
                },
              
                //渲染页面
                renderPage:function(json1){

                   //console.log(json1);
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
                    <div id="model_彩妆系列" mid="47585" productnum="15" sidebar_img="0" shelf_img="0" moduletypeid="6" style="background: none; height: auto; opacity: 1;" loaded="true">
                <div class="series_title">
                    <h2> <a target="_blank" class="title_text" style="color:#ffffff;" href="javascript:void(0)">彩妆系列</a> <a target="_blank" class="title_more" style="color:#ffffff;" href="http://lancome.jumei.com/search.html?series=1948&amp;from=store_lancome_index_804_47585_1">更多》</a> </h2> </div>
                <div id="search_list_wrap">
                    <div class="products_wrap">
                        <ul>
                            <li class="formall item left" pid="13051" bid="3660" cid="23" search_product_type="mall" product_type="mall_product">
                                <div class="item_wrap clearfix">
                                    <div class="item_wrap_right deal_item_wrap">
                                        <div class="s_l_pic">
                                            <a href="http://mall.jumei.com/product_13051.html?from=store_lancome_index_804_47585_1&amp;site=bj" target="_blank">
                                                <div class="qiang_guang"></div> <img original="http://p0.jmstatic.com/product/000/013/13051_std/13051_350_350.jpg" width="255" height="255" src="http://p0.jmstatic.com/product/000/013/13051_std/13051_350_350.jpg" style="display:inline;"> </a>
                                        </div>
                                        <div class="s_l_name">
                                            <a href="http://mall.jumei.com/product_13051.html?from=store_lancome_index_804_47585_1" target="_blank"> <span class="disc">    </span> Lancome <em class="pink"></em> 法国•兰蔻 (Lancome)速洁眼部卸妆水 30ml </a>
                                        </div>
                                        <div class="s_l_view_bg">
                                            <div class="icon_wrap_bot clearfix"> </div>
                                            <div class="search_list_price"> <label>¥</label> <span>49.9</span>
                                                <div class="saleinfos"> </div>
                                            </div>
                                        </div>
                                        <div class="search_deal_buttom_bg clearfix">
                                            <div class="search_pl"> 2861篇评价| </div>
                                            <div class="rating">
                                                <div style="width:94" class="value"></div>
                                            </div>
                                        </div>
                                        <div class="search_list_button">
                                            <a target="_blank" class="btn_notice" href="http://www.jumei.com/i/deal/mobile_subscribe/?id=13051" data-sku="" data-from="store_lancome_index_804_47585_1" title="到货通知"> </a>
                                            <a href="javascript:;" class="btn_fav" pid="13051" title="收藏商品"></a>
                                        </div>
                                        <p class="search_list_tags"> <span>清洁</span> <span>滋润</span> <span>温和</span> </p>
                                    </div>
                                </div>
                            </li>
                            <li class="formall item left" pid="193895" bid="3660" cid="23" search_product_type="mall" product_type="mall_product">
                                <div class="item_wrap clearfix">
                                    <div class="item_wrap_right deal_item_wrap">
                                        <div class="s_l_pic">
                                            <a href="http://mall.jumei.com/product_193895.html?from=store_lancome_index_804_47585_1" target="_blank"> <img original="http://p0.jmstatic.com/product/000/193/193895_std/193895_350_350.jpg" width="255" height="255" src="http://p0.jmstatic.com/product/000/193/193895_std/193895_350_350.jpg" style="display:inline;"> </a>
                                        </div>
                                        <div class="s_l_name">
                                            <a href="http://mall.jumei.com/product_193895.html?from=store_lancome_index_804_47585_1" target="_blank"> <span class="disc">    </span> Lancome <em class="pink"></em> 法国•兰蔻 (Lancome)梦魅睛灵防水睫毛膏01# 6.5g/6.5ml </a>
                                        </div>
                                        <div class="s_l_view_bg">
                                            <div class="icon_wrap_bot clearfix"> </div>
                                            <div class="search_list_price"> <label>¥</label> <span>269</span>
                                                <div class="saleinfos"> </div>
                                            </div>
                                        </div>
                                        <div class="search_deal_buttom_bg clearfix">
                                            <div class="search_pl"> 110篇评价| </div>
                                            <div class="rating">
                                                <div style="width:100" class="value"></div>
                                            </div>
                                        </div>
                                        <div class="search_list_button">
                                            <a target="_blank" class="track_click btn_addcart" track_click="b2c/product_193895/buy_list" data-sku="" data-from="store_lancome_list__list_items_index_" title="加入购物车"> </a>
                                            <a href="javascript:;" class="btn_fav" pid="193895" title="收藏商品"></a>
                                        </div>
                                        <p class="search_list_tags"> <span>睫毛增长</span> </p>
                                    </div>
                                </div>
                            </li>
                            <li class="formall item left" pid="362169" bid="3660" cid="23" search_product_type="mall" product_type="mall_product">
                                <div class="item_wrap clearfix">
                                    <div class="item_wrap_right deal_item_wrap">
                                        <div class="s_l_pic">
                                            <a href="http://mall.jumei.com/product_362169.html?from=store_lancome_index_804_47585_1" target="_blank"> <img original="http://p0.jmstatic.com/product/000/362/362169_std/362169_350_350.jpg" width="255" height="255" src="http://p0.jmstatic.com/product/000/362/362169_std/362169_350_350.jpg" style="display:inline;"> </a>
                                        </div>
                                        <div class="s_l_name">
                                            <a href="http://mall.jumei.com/product_362169.html?from=store_lancome_index_804_47585_1" target="_blank"> <span class="disc">   <em>包邮</em>   /  </span> Lancome <em class="pink"></em> 法国•兰蔻 (Lancome)梦魅巨星璀璨睫毛膏01# 6.5g/ml </a>
                                        </div>
                                        <div class="s_l_view_bg">
                                            <div class="icon_wrap_bot clearfix"> </div>
                                            <div class="search_list_price"> <label>¥</label> <span>340</span>
                                                <div class="saleinfos"> </div>
                                            </div>
                                        </div>
                                        <div class="search_deal_buttom_bg clearfix">
                                            <div class="search_pl"> 97篇评价| </div>
                                            <div class="rating">
                                                <div style="width:100" class="value"></div>
                                            </div>
                                        </div>
                                        <div class="search_list_button">
                                            <a target="_blank" class="track_click btn_addcart" track_click="b2c/product_362169/buy_list" data-sku="" data-from="store_lancome_list__list_items_index_" title="加入购物车"> </a>
                                            <a href="javascript:;" class="btn_fav" pid="362169" title="收藏商品"></a>
                                        </div>
                                        <p class="search_list_tags"> <span>眼部造型</span> <span>装扮</span> </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
                                `
                                //console.log(json[i].price)
                    }
                    this.main.html(this.main.html() + html);
                    // this.sortPage();
                    

                },
                // sortPage:function(){
                //     var obox = this.main.children();
                //     // console.log(obox);
                //     var heightArray = [];
                //     for(var i=0 ;i<obox.length; i++){
                //         //第一排设置基准
                //         if(i<5){
                //             heightArray.push(obox.eq(i).height());
                //         }else{
                //             // Math.min.apply => 可以获取数组中的最小值
                //             var min = Math.min.apply(false,heightArray);
                //             var minindex = heightArray.indexOf(min);
                //             obox.eq(i).css({
                //                 position:"absolute",
                //                 top:min,
                //                 left:obox.eq(minindex).offset().left

                //             })
                //             heightArray[minindex] += obox.eq(i).height();
                //         }
                //     }
                //     this.loading = false;

                // },
                bindEvent:function(){
                    $(window).on("scroll",this.ifLoad.bind(this));

                },
                //是否加载   滚动就会触发此事件
                ifLoad:function(){
                    var scrollTop = $("html,body").scrollTop();
                    var clientHeight = $("html")[0].clientHeight;
                    var lastBox = this.main.children(":last");
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
    

//  //面向对象编程
//  function WaterFall(){}
//  $.extend(WaterFall.prototype,{
//      //初始化
//      init:function(){
//          //当前页数
//          this.page=1;
//          this.main = $("#today_now_goods");
//          //判断是否在加载中
//          this.loading = false;
//          //和promise .then相似
//          this.loadJson()     //返回值是deferred对象（promise前身）
//          .done(function(res){
//               // deferred 的 done 回调 this指向的都是 jquery 对象本身
//              this.renderPage(res);
//          })
//          this.bindEvent();

//      },
//      //加载数据
//      loadJson:function(){
//          var opt = {
//              // url:"http://www.wookmark.com/api/json/popular",
//              url:"https://list.mogujie.com/search",
//              dataType:"jsonp",
//              data:{page:this.page},
//              //this  ===>指向实例化对象
//              context:this
//          }
//          return $.ajax(opt);
         
         
//      },
   
//      //渲染页面
//      renderPage:function(json1){
//         //console.log(json1.result.wall.list);
//         var json=json1.result.wall.list;
//         console.log(json)
//          var html="";
//          for( var i=0; i<json.length; i++){
             
//                  html +=`
//                                      <li class="deal_box">
//                     <div class="img_box">
//                         <a href="#" class="img_box_href">
//                             <img src="${json[i].show.img}" alt="">                          
//                         </a>
//                         <i class="deal_tags teg_list fangwei"></i>
//                         <div class="commit_new">
//                             <div class="commit_new_box">
//                                 <b class="link">
//                                     <i class="num">1855</i> 
//                                     条评论
//                                 </b>
//                                 <div class="service_rating">
//                                     <i class="rating_num">4.7/5</i>
//                                     <div class="rating">
//                                         <div class="value" style="width:94%"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="add_cart_box all_cart_wrap"><a href="javascript:void(0)" class="add_cart all_cart">加入购物车</a></div>
//                     <a href="#" class="clearfix">
//                         <div class="deal_detail">
//                             <p class="title"><span class="pink">${json[i].title}</p>
//                             <div class="in_box">
                                
//                                 <div class="price_box">
                                   
//                                     <span class="pnum">${json[i].price}</span>
//                                     <span class="mnum">${json[i].orgPrice}</span>
//                                 </div>
//                                 <div class="timer_box">
//                                     <div class="time_box" id="time_box"></div>
//                                     <div class="num_box">销量: <span class="buy_num">${json[i].sale}}</span> |</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </a>
//                 </li>
                    
//                      `
//                      // console.log(json[i].price)
//                      //<div class="box" >
//                     //      <img src="${json[i].show.img}" alt="">
//                     //      <div class="describe">
//                     //          <p>${json[i].title}</p>
                             
//                     //          <span>${json[i].price}</span>
//                     //          <del>${json[i].orgPrice}</del>
//                     //          <i class="sales">${json[i].sale}</i>
//                     //      </div>
//                     //      </div>
//          }  
                          
//          this.main.html(this.main.html() + html);
//          this.loading = false;
         

//      },
    
//      bindEvent:function(){
//          $(window).on("scroll",this.ifLoad.bind(this));

//      },
//      //是否加载   滚动就会触发此事件
//      ifLoad:function(){
//          var scrollTop = $("html,body").scrollTop();
//          var clientHeight = $("html")[0].clientHeight;
//          var lastBox = this.main.children(":last");
//          //加载到最后一张图片再次加载数据
//          if(scrollTop + clientHeight > lastBox.offset().top){
//              //如果已经加载，就return 0关闭，如果为false关闭就变为true
//              if(this.loading){
//                  return 0
//              }
//              if(this.page>3){
//                  return 0;
//             }
//              this.loading = true;
//             // console.log("加载");
//              this.page ++;
//              this.loadJson()
//              .done(function(res){
//                  this.renderPage(res);

//              })
            

//          }
         
         
//      }
//  })

//   var waterfall = new WaterFall();
//   waterfall.init();
