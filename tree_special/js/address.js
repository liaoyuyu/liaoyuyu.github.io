$(function(){

    // 点击设置默认地址
    $(".address_list_but_left").click(function(){
        // 判断有没有选中类，没有就添加，其他的就删除，有就提示最低为一个
        if($(this).find(".default_address_choice").hasClass("default_address_choice_select")){
            $(".default_address_popup_box").css("visibility","visible")
            $(".default_address_popup").addClass("default_address_popup_amin")
        }else{
            $(".default_address_choice").removeClass("default_address_choice_select")
            $(this).find(".default_address_choice").addClass("default_address_choice_select")
        }
       
    })

    // 点击弹出框确定，让弹出框消失
    $(".default_address_popup_but").click(function(){
        $(".default_address_popup_box").css("visibility","hidden")
        $(".default_address_popup").removeClass("default_address_popup_amin")
    })


    // 删除操作
    // 点击删除跳出删除弹窗
    $(".address_delete").click(function(){
        $(".delete_popup_box").css("visibility","visible")
        $(".delete_popup").addClass("delete_popup_anim")
    })
    // 点击弹窗确定按钮删除数据
    $(".delete_popup_determine").click(function(){
        $(".delete_popup_box").css("visibility","hidden")
        $(".delete_popup").removeClass("delete_popup_anim")

        $(".information_elastic_frame_box").find(".information_elastic_frame_box_p").text("删除成功")
        $(".information_elastic_frame_box").addClass("information_elastic_frame_box_anim")
        setTimeout(function(){
            $(".information_elastic_frame_box").removeClass("information_elastic_frame_box_anim")
        },1000)
    })

    // 点击弹窗取消按钮
    $(".delete_popup_cancel").click(function(){
        $(".delete_popup_box").css("visibility","hidden")
        $(".delete_popup").removeClass("delete_popup_anim")
    })

})