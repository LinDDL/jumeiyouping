// //$.ajax({
//     //     url:"http://localhost:8001/proxy/bj.jumei.com/Ajax/GetHomeTodayLists/100/1",
//     //     type:'GET',
//     //     dataType:"json",
//     // })
//     // .then(function(res){
//     //     console.log(res);
//     // })
//     function WaterFall(){};
//     $.extend(WaterFall.prototype,{
//         init:function(){
//             this.main=$("#today_now_goods");
//             this.loadJson()
//             .done(function(res){
//                 var jsons=res.list;
//                 console.log(jsons);
//                 // console.log(res);
//                 // this.renderPage(res.list);
//                    var html="";
//                     for(var i = 0 ; i < res.list.length; i ++){
//                         html += `<li class="deal_box">
//                         <div class="img_box">
//                             <a href="#" class="img_box_href">
//                                 <img src="${jsons[i].deal_img}" alt="">                          
//                             </a>
//                             <i class="deal_tags teg_list fangwei"></i>
//                             <div class="commit_new">
//                                 <div class="commit_new_box">
//                                     <b class="link">
//                                         <i class="num">${jsons[i].comments_number}</i> 
//                                         条评论
//                                     </b>
//                                     <div class="service_rating">
//                                         <i class="rating_num">${jsons[i].report_rating}/5</i>
//                                         <div class="rating">
//                                             <div class="value" style="width:${jsons[i].report_rating/5}%"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="add_cart_box all_cart_wrap"><a href="javascript:void(0)" class="add_cart all_cart">加入购物车</a></div>
//                         <a href="#" class="clearfix">
//                             <div class="deal_detail">
//                                 <p class="title"><span class="pink">【官方授权】</span>${jsons[i].deal_tit}</p>
//                                 <div class="in_box">
                                    
//                                     <div class="price_box">
//                                         <em>¥</em>
//                                         <span class="pnum">30</span>
//                                         <span class="mnum">¥20</span>
//                                     </div>
//                                     <div class="timer_box">
//                                         <div class="time_box" id="time_box"></div>
//                                         <div class="num_box">销量: <span class="buy_num">${jsons[i].deal_num}</span> |</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </li>
//                                 `
                                
//                 }
//                 this.main.html(this.main.html()+html);
//                 // this.sortPage();
                
    
//             })
    
//         },
//         loadJson:function(){
//             var opt={
//                 url:"http://localhost:8001/proxy/bj.jumei.com/Ajax/GetHomeTodayLists/100/1",
//                 type:'GET',
//                 dataType:"json",
//             }
//             return $.ajax(opt);
//         },
        
    
//     })
//     var waterfall = new WaterFall();
//     waterfall.init();
    