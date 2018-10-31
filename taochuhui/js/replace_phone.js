// localStorage.WebApiUrl = "http://admin.taochuhui.com/";
var flg = true; //获取验证码60内只能点击一次
$(function(){
    $(".phone_num").text(localStorage.phone)

    $(".get_code").click(function(){
        var phone = $(".code").val();
        if(phone == ""){
            alert("新手机号码不能为空！")
            return;
        }
        get_code(".get_code",".code","","/Public/SendSms")    
    })

    // input 都输入内容时，按钮发生改变
    var n = 1;
    $('.replace_input').bind('input propertychange', function() { 
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


    $(".confirm").click(function(){
        if(n==1){
            return;
        }
        var this_phone = $(".code").val();
        var code = $(".code_p").val();
        
        $.ajax({
            url:localStorage.WebApiUrl+"Public/UpdateBinDingMobile",
            type: "post",
            dataType: "text",
            data:{ 
                OldMobile:localStorage.phone,
                Yzm:code,
                NewMobile:this_phone    
            },
            success: function (res) {
               console.log(res)
               if(res == "True"){
                    alert("更换成功!")
                    window.location.href = "account_security.html"
               }
               if(res == "False"){
                    alert("请检查手机号或验证码！");
                    return;
               }
            },
            error: function (data) {
                console.log("错误")
            }
        });
    })


})