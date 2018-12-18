$(function(){

    $(".problem_title").click(function(){
        $(this).siblings(".solve").toggleClass("solve_down")
        $(this).find(".front_arrow").toggleClass("problem_img_down")
    })


})