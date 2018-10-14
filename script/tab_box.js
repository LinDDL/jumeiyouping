var data1=[{
    img:"images/bk1.jpg",
    class:"today_top_1",   
    title:"【香港直邮】什么？你还没用过SK-II护肤面膜（10片）？女人一生中至少也要经历一次SK-II护肤面膜的亲密接触！敷一次肌肤就嫩到你的前男友悔不当初！现男友爱你到死心塌地！富含30ml的精华液，让你皮肤满足的吃饱营养，每一个细胞都变得活力充盈！",
    now_price:"659",
    old_price:"1060",
    total:"0"
},{
    img:"images/bk2.jpg",
    class:"today_top_2",   
    title:"	DHC橄榄护唇膏1.5g——橄榄精华油与双唇自然融合！功效不吹嘘，有口皆碑，持久水润保湿，深层滋润呵护，有效防止双唇粗糙干裂，令双唇娇嫩欲滴！真的一点也不油腻哦！口红前打底，不仅护唇，更易上色更持久！",
    now_price:"55",
    old_price:"69.9",
    total:"0"
}]
    window.onload=function(){
        var aBox=document.querySelector(".today_main .tab_content");
        var html="";
        for(var i=0;i<data1.length;i++){
         html+=` <div class="tab_box">
         <div class="today_tab_content">
             <a href="#" class="today_tab_link">
                <img src="${data1[i].img}" alt="" class="cart_img">
                <span class="${data1[i].class}"></span> 
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
                 ${data1[i].title}
                 </a>
                 <div class="product_price">
                     <span class="now_price">
                         <em>￥</em>
                         ${data1[i].now_price}
                     </span>
                     <div class="old_price">￥${data1[i].old_price}</div>
                     <div class="goto_cart_wrap all_cart_wrap">
                         <a class="goto_btn goto_cart all_cart" href="javascript:;">加入购物车</a>
                     </div>
                 </div>
                 <div class="tag">
                     <span class="tag_a">
                         <img src="images/tag.jpg" alt="">
                     </span>
                     <span class="tag_like">
                         <em>${data1[i].total}</em>
                         人已购买
                     </span>
                 </div>               
             </div>
         </div>
     </div>`;
            }
        aBox.innerHTML=html;
        }

