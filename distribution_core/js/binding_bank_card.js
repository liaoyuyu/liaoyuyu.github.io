$(function(){


    // 点击是否同意协议
    $(".bank_agreement_checklist").click(function(){
        $(".bank_agreement_checklist").toggleClass("select_agreement")
    })

    // // 取消选择所属银行
    // $(".subordinate_bank_title_cancel").click(function(){
    //     $(".subordinate_bank_box").removeClass("subordinate_bank_box_anim")
    // })
    // // 点击其他区域关闭选择所属银行弹出层
    // $(".subordinate_bank_box").click(function(){
    //     $(".subordinate_bank_box").removeClass("subordinate_bank_box_anim")
    // })
    // // 阻止默认事件
    // $(".subordinate_bank").click(function(){
    //     return false;   
    // })

})


// 点击所属银行，弹出可绑定的银行卡
// function choice_bank(){
//     $(".subordinate_bank_box").addClass("subordinate_bank_box_anim")
// }