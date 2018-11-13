$(function(){

    // 最后一个到顶部的距离-顶部padding+最后一个的高度的一半 = 最后一个圆心到顶部的距离
    //20px 是0.4rem的一半*100 应为手机是真实像素，不用/2，所以0.4要/2才是真实rem
    var top_hei = $(".schedule_list:last").position().top-20;
    var hei_last = $(".schedule_list:last").height()/2;
    // 第一个的高度的一半 
    var hei_first = $(".schedule_list:first").height()/2;

    var hei = top_hei+hei_last-hei_first

    $(".center_img_after").css("height",hei+"px")
})