$(function(){
    $(".tab_menu span").click(function(){
        $(".tab_menu span")
        .eq($(this).index())
        .addClass("tab_menu_active")
        .siblings().removeClass("tab_menu_active");
        $(".tab_content .tab_box").hide()
        .eq($(this).index())
        .show()
    });
})