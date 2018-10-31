// localStorage.WebApiUrl = "http://admin.taochuhui.com/";
var flg = true; //获取验证码60内只能点击一次
$(function(){
    // var phone = "13667619032"
    $(".phone").text(localStorage.phone)

    $(".verification_p").click(function(){
        get_code(".verification_p","",localStorage.phone,"/Public/SendSms") 
    })

    // 监控input框输入内容后，按钮可按
    var n = 1;
    $('.inputobj').bind('input propertychange', function() { 
        var password = $(".password").val()
        var password1 = $(".password1").val()
        var code = $(".verification").val()
        if(password != "" && password1 != "" && code != ""){
            $(".modify_bot").css("background","#84a539")
            n=2
        }else{
            $(".modify_bot").css("background","#bfbfbf") 
            n=1
        }
    });

    $(".modify_bot").click(function(){
        if(n==1){
            return;
        }
        var code = $(".verification").val()
        var password = $(".password").val()
        var password1 = $(".password1").val()

        if(password == password1){
            $.ajax({
                url:localStorage.WebApiUrl+"Public/UpdatePassword",
                type:"post",
                dataType:"json",
                data:{
                    Yzm:code,
                    NewPossword:password,
                    NewMobile:localStorage.phone
                },
                success:function(res){
                    console.log(res)
                    if(res.Result){
                        alert("修改成功")
                        window.location.href = "account_security.html"
                    }else{
                        alert(res.ErrorMessage)
                    }
                },
                error:function(err){
                    console.log("错误"+err)
                }
            })
        }else{
            alert("两次密码不一致！")
        }

    })

})