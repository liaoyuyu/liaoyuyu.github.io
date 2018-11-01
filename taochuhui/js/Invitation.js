$(function(){
    // 设置排行榜高度
    var top_hei = $(".ranking_box").offset().top
    var win_hei = $(window).height()
    var Rankings_hei = win_hei-top_hei
    console.log(top_hei)
    $(".ranking_box").css("height",Rankings_hei+"px")


})