var payment_password = "<div class='password_top_display_div'>"+
"<span class='password_top_display_span'></span>"+
"</div>"

var decimal_val_position;//第一个小数点出现的位置


$(function(){
    // 弹出选择到账银行弹出层
    $(".bank_card_right").click(function(){
        $(".cash_withdrawal_bank_box").addClass("cash_withdrawal_bank_box_anim")
    })
    // 点击其他区域关闭弹出层
    $(".cash_withdrawal_bank_box").click(function(){
        $(".cash_withdrawal_bank_box").removeClass("cash_withdrawal_bank_box_anim")
    })
    // 阻止默认行为
    $(".cash_withdrawal_bank").click(function(){
        return false;
    })
    // 选择到账银行
    $(".cash_withdrawal_bank_list").click(function(){
        $(".cash_withdrawal_bank_list_right").removeClass("arrive_bank")
        $(this).find(".cash_withdrawal_bank_list_right").addClass("arrive_bank")


        // 请求成功关闭弹出层
        $(".cash_withdrawal_bank_box").removeClass("cash_withdrawal_bank_box_anim")
    })





    // 禁止弹出自带弹出框


    // 实时监听输入金额的情况
    $("#cash_withdrawal_money").focus(function(){
        // console.log($("#cash_withdrawal_money").val())
        var value = $("#cash_withdrawal_money").val()

        $("#cash_withdrawal_money").bind("input propertychange",function(event){
            value = $("#cash_withdrawal_money").val()
            // 限制输入长度
            if(value.length==12){
                $(this).val(value.slice(0, value.length - 1))
            }
            value = $(this).val()
                     

            if(value != ""){
                $(".cash_withdrawal_but").addClass("cash_withdrawal_but_input")
                $(".cash_withdrawal_but").attr("onclick","judge_click()")
            }else{
                $(".cash_withdrawal_but").removeClass("cash_withdrawal_but_input")
                $(".cash_withdrawal_but").removeAttr("onclick")
            }

            //并判断只能输入小数点后两位,就不能在输入了
            for(var i = 0;i<value.length;i++){
                if(value[i]=="."){
                    $(this).val(value.slice(0,i+3))
                }
            }

            // 如果第一次输入小数点，直接变成 0.  ，如果输入了小数点，后面只能两位
            if(value[0]=="."){
                $(this).val(0+value)
            }

            // 判断输入的金额是否大于可提现金额
            if(value>543.45){
                $(".all_cash_withdrawal").css("display","none")
                $(".error_cash_withdrawal").css("display","block")
                $(".cash_withdrawal_but").removeClass("cash_withdrawal_but_input")
                $(".cash_withdrawal_but").removeAttr("onclick")
            }else{
                $(".all_cash_withdrawal").css("display","block")
                $(".error_cash_withdrawal").css("display","none")
            }

            // console.log($(this).val())
        });
    })




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

// 提现按钮是否可以点击事件
function judge_click(){
    var money = $("#cash_withdrawal_money").val()
    if(money == ""){
        alert("请输入金额")
    }else{
        // 请求接口，成功后，打开弹出层
        $(".payment_popup_box").addClass("payment_popup_box_anim")
        $(".keyboard_box").removeClass("keyboard_box_anim")
    }
}


// 全部提现
function all_cash_withdrawal(all_money){
    $("#cash_withdrawal_money").val(all_money)
    $(".cash_withdrawal_but").addClass("cash_withdrawal_but_input")
    $(".cash_withdrawal_but").attr("onclick","judge_click()")
    $("#cash_withdrawal_money").focus();
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