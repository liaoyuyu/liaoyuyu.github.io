$(".Newest").click(function(){
    $(".underline").animate({left:"70px"},100);
    $(".Newestbox").css("display","block");
    $(".Hottestbox").css("display","none");
})

$(".Hottest").click(function(){
    $(".underline").animate({left:"159px"},100);
    $(".Newestbox").css("display","none");
    $(".Hottestbox").css("display","block");
})