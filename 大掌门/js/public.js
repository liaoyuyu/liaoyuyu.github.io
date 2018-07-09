$(function(){
var offset_top = $(".suspension_box").offset().top;


$(".TOP").click(function(){
    console.log(1)
    $("body").animate({
        scrollTop:0,
    },300)
})



$(window).scroll(function(e){
    var move = $(window).scrollTop();
    $(".suspension_box").animate({
        top:offset_top+move,
    },30,"linear")
})



})