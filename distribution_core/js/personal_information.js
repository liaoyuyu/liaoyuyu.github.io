$(function(){


    // 打开性别弹出层
    $(".personal_information_sex").click(function(){
        $(".sex_box").addClass("sex_box_anim")
    })
    // 点击男女性别关闭弹出层，并赋值
    $(".sex_list").click(function(){
        var sex = $(this).attr("data_sex")
        $(".list_option").removeClass("option")
        $(this).find(".list_option").addClass("option")

        //请求接口，成功赋值

        $(".personal_information_sex").find(".right_p").text(sex)
        $(".sex_box").removeClass("sex_box_anim")
    })
    //点击其他地方，关闭弹出层
    $(".sex_back").click(function(){
        $(".sex_box").removeClass("sex_box_anim")
    })


    // 点击保存
    $(".right_header_p").click(function(){
        
    })


})