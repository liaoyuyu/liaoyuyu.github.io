// localStorage.WebApiUrl = "http://admin.taochuhui.com/";
var flg = true; //获取验证码60内只能点击一次
$(function(){
    $(".get_code").click(function(){
        var phone = $(".code").val();
        if(phone == ""){
            alert("绑定的手机号码不能为空！")
            return;
        }
        get_code(".get_code",".code","","/Public/SendSms")    
    })


    // input 都输入内容时，按钮发生改变
    var n = 1;
    $('.binding_input').bind('input propertychange', function() { 
        var phone = $(".code").val()
        var code = $(".code_p").val()
        if(phone != "" && code != ""){
            $(".confirm").css("background","#84a539")
            n=2
        }else{
            $(".confirm").css("background","#bfbfbf") 
            n=1
        }
    });



    // 点击确认更换
    $(".confirm").click(function(){
        if(n==1){
            return;
        }
        var phone = $(".code").val()
        var code = $(".code_p").val()

        $.ajax({
            url:localStorage.WebApiUrl+"Public/BinDingMobile",
            type:"post",
            dataType:"json",
            data:{
                OpenID:localStorage.openid,
                Mobile:phone,
                Yzm:code
            },
            success:function(res){
                console.log(res)

                // 成功后弹出提示 并给出选择按钮
                if(res.Result){
                    $(".binding_p").css("opacity",1)
                    setTimeout(function(){
                        $(".binding_p").css("opacity",0)
                    },500)
                    $(".tanchu p").text("默认密码为："+res.Data)
                    $(".tanchu_back").removeClass("none_visibility")
                    $(".tanchu_back").addClass("tanchu_back_anim")
                }else{
                    alert(res.ErrorMessage)
                }
            }
        })
    })


    // 点击修改密码
    $(".modify").click(function(){
        window.location.href = "modify_password.html"
    })
    // 点击确认按钮
    $(".yes").click(function(){
        window.location.href = "account_security.html"
    })
    
})