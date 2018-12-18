$(function(){

    // 超出滚动
    var all_height = $(window).height();
    var top_height = $(".recommend_detailed_title").offset().top
    var top_itself_height = $(".recommend_detailed_title").outerHeight()
    // console.log(top_itself_height)
    var height = all_height - top_height - top_itself_height
    $(".recommend_detailed_ul").css("max-height",height+"px")

})