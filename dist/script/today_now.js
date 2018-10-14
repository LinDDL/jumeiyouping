// function WaterFall(){};
// $.extend(WaterFall.prototype,{
//     init:function(){
//         this.main=$("#today_now_goods");
//         this.loadJson()
//         .done(function(res){
//             console.log(res);
//         })

//     },
//     loadJson:function(){
//         var opt={
//             url:"http://localhost:8001/proxy/bj.jumei.com/Ajax/GetHomeTodayLists/100/1",
//             // dataType:"jsonp",
//             context:this
//         }
//         return $.ajax(opt);
//     }
// })
// var waterfall = new WaterFall();
// waterfall.init();
// $.ajax({
//     url:"http://localhost:8001/proxy/bj.jumei.com/Ajax/GetHomeTodayLists/100/1",
//     type:'GET',
//     dataType:"jsonp",
// })
// .then(function(res){
//     console.log(res);
// })