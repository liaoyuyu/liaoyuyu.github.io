$(function(){

    var login_register =  '<div class="login_register">'+
    '<p class="login_register_title">快速登录</p>'+
    '<div class="input_frame">'+
        '<input class="phone_input" maxlength="11" type="text" placeholder="请输入您的手机号">'+
    '</div>'+
    '<div class="input_frame">'+
        '<input class="phone_input code_input" maxlength="6" type="text" placeholder="请输入验证码">'+
        '<div class="code" onclick="get_code()">获取验证码</div>'+
    '</div>'+
    '<div class="submission_but" onclick="login()">提交</div>'+
    '<div class="close"><img src="../img/icon/close.png" onclick="close_login_register()" alt=""></div>'
'</div>'

var elastic_frame ='<div class="information_elastic_frame_box">'+
    '<p class="information_elastic_frame_box_p"></p>'+
    '</div>'

    // var login_success

$("body").append(login_register)
$("body").append(elastic_frame)

$(".phone_input").bind("keyup",function(){
    $(this).val($(this).val().replace(/[\D]/g, ""));
})


})



// 判断用户登录
// 1为点击的加入购物车，2为点击的立即领养
function judge_user(n){
    //没有登录,跳出登录框
    document.body.style.overflow = 'hidden';
    // $(".login_register").addClass("login_register_anim")


    // 已登录,
    $(".confirmation_order_box").addClass("confirmation_order_anim")

}

// 点击错误弹出框确定按钮
function error_elastic_frame(){
    $(".information_elastic_frame_box").removeClass("error_elastic_frame_box_anim")
}


// 关闭登录框
function close_login_register(){
    $(".login_register").removeClass("login_register_anim")
    document.body.style.overflow = 'auto';
}
// 关闭订单框
function close_order(){
    $(".confirmation_order_box").removeClass("confirmation_order_anim")
    document.body.style.overflow = 'auto';
}


// 获取验证码
var flg = true;
function get_code(){
    if(!flg){
        return
    }
    var phone = $(".phone_input").val();
    if(phone==''){
        $(".information_elastic_frame_box").find(".information_elastic_frame_box_p").text("请输入正确的手机号码")
        $(".information_elastic_frame_box").addClass("information_elastic_frame_box_anim")
        setTimeout(function(){
            $(".information_elastic_frame_box").removeClass("information_elastic_frame_box_anim")
        },1000)
        return;
    }
    phone = html_encode(phone)


    var n=59;
    flg = false;
    $(".code").text(n+" s");
    var timer = setInterval(function(){
        n--;
        if(n > 0){
            $(".code").text(n+" s");
        }else{
            $(".code").text("获取验证码");
            flg = true;
            clearInterval(timer)
            return;
        }
    },1000)


    // 发送短信


}




/* 登录  提交登录*/
function login(){
    // 登录成功
    close_login_register()
}
// 提交订单
function confirmation_order(){
    // 成功

    // 成功后关闭弹框
    close_order()
}




// 转义 用户的输入内容
function html_encode(str) 
{ 
var s = ""; 
if (str.length == 0) return ""; 
s = str.replace(/&/g, "&gt;"); 
s = s.replace(/</g, "&lt;"); 
s = s.replace(/>/g, "&gt;"); 
s = s.replace(/ /g, "&nbsp;"); 
s = s.replace(/\'/g, "&#39;"); 
s = s.replace(/\"/g, "&quot;"); 
s = s.replace(/\n/g, "<br>"); 
return s; 
}