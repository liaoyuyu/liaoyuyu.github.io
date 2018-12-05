$(function(){

    // 设置是否默认地址
    $(".set_default_address_box").click(function(){
        $(this).toggleClass("set_default_address_box_select")
    })


    // 点击所在地区弹出选择地址层
    $("#choice_location").focus(function(){
        $(".choice_region_back_box").css("visibility","visible")
        $(".choice_region").addClass("choice_region_anim")

    })


    // 点击取消选择地区，关闭弹出层
    $(".choice_region_title_cancel").click(function(e){
        $(".choice_region_back_box").css("visibility","hidden")
        $(".choice_region").removeClass("choice_region_anim")
    })
    $(".choice_region").click(function(e){
        e.stopPropagation();
    })
    // 点击选择地区弹出层区域之外的地方，也关闭弹出层
    $(".choice_region_back_box").click(function(){
        $(".choice_region_back_box").css("visibility","hidden")
        $(".choice_region").removeClass("choice_region_anim")
    })



    // 点击保存
    $(".preservation_address").click(function(){

    })

})