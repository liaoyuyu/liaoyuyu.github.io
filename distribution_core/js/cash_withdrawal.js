var payment_password = "<div class='password_top_display_div'>"+
"<span class='password_top_display_span'></span>"+
"</div>"


$(function(){
    // 禁止弹出自带弹出框
    $("#cash_withdrawal_money").focus(function(){
        alert(1)
        document.activeElement.blur();
    });
    // 实时监听输入金额的情况
    $("#cash_withdrawal_money").bind("input propertychange",function(event){
        console.log($("#cash_withdrawal_money").val())
        var value = $("#cash_withdrawal_money").val()
        if(value != ""){
            $(".cash_withdrawal_but").addClass("cash_withdrawal_but_input")
            $(".cash_withdrawal_but").attr("onclick","judge_click()")
        }else{
            $(".cash_withdrawal_but").removeClass("cash_withdrawal_but_input")
            $(".cash_withdrawal_but").removeAttr("onclick")
        }

        // 判断输入的金额是否大于可提现金额
    });




    // 关闭弹出层
    $(".password_input_close").click(function(){
        $(".payment_popup_box").removeClass("payment_popup_box_anim")
    })

    // 关闭数字键盘
    $(".keyboard_title").click(function(){
        $(".keyboard_box").addClass("keyboard_box_anim")
    })
    // 打开数字键盘
    $(".payment_password").click(function(){
        $(".keyboard_box").removeClass("keyboard_box_anim")
    })

})

// 按钮是否可以点击事件
function judge_click(){
    var money = $("#cash_withdrawal_money").val()
    if(money == ""){
        alert("请输入金额")
    }else{
        // 请求接口，成功后，打开弹出层
        $(".payment_popup_box").addClass("payment_popup_box_anim")
    }
}

// 全部提现
function all_cash_withdrawal(all_money){
    $("#cash_withdrawal_money").val(all_money)
}


var payment_pas = "";
var m = 0;
function input_payment_pas(n){
    if(n>=0){
        $(".password_top_display").append(payment_password)
        payment_pas += n;
        m++;
        if(m==6){
            $(".payment_popup_box").removeClass("payment_popup_box_anim")
            $(".password_top_display").empty()
            payment_pas = ""
            m = 0;
        }
        console.log(payment_pas)
    }else{
        m--
        $(".password_top_display_div").eq(-1).remove();
        payment_pas = payment_pas.slice(0,-1)
        console.log(payment_pas)
    }
}