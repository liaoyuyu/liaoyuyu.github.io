$(function(){

    $(".problem_title").click(function(){
        $(this).siblings(".solve").toggle()
        $(this).find(".problem_img").toggleClass("problem_img_down")
    })


})