var flg = true; //获取验证码60内只能点击一次
$(function(){
    // localStorage.WebApiUrl = "http://admin.taochu.com";
    console.log(localStorage.WebApiUrl)
    // 获取验证码动画
    // 方法，验证码点击对象和装电话号码的盒子
    $(".code_p").click(function(){
        get_code(".code_p",".phone","","/Public/SendSms")
    })
    



    // 点击注册
    $(".register_bot").click(function(){
        var phone = $(".phone").val();
        var code = $(".code").val();
        var password = $(".password").val();
        var password1 = $(".password1").val();

        phone = html_encode(phone)
        code = html_encode(code)
        password = html_encode(password)
        password1 = html_encode(password1)

        if(phone ==""){
            alert("手机号码为空！")
            return;
        }
        if(code ==""){
            alert("验证码为空！")
            return;
        }
        if(password ==""){
            alert("密码为空！")
            return;
        }

        if(password == password1&&password !=""&&password1 !=""){
            $.ajax({
                url:localStorage.WebApiUrl+"Public/RegisterUser",
                type: "post",
                dataType: 'json',
                data:{
                    Mobile:phone,
                    Yzm:code,
                    password:password
                },
                success: function(res) {
                    console.log(res)
                    if(res.ErrorMessage == true){
                        alert("注册成功!")
                        $.ajax({
                            url:localStorage.WebApiUrl+"Public/ExcuteLogin",
                            type: "post",
                            dataType: 'json',
                            data:{
                                Mobile:phone,
                                password:password
                            },
                            success: function(res) {
                                if(res.Result == true){
                                    localStorage.userid = res.Data.UserID;
                                    document.cookie ="obj=1;path=/"
                                    window.location.href = localStorage.current_url
                                    return;
                                }
                            },
                        })
                    }
                   if(res.ErrorMessage =="已存在"){
                        var mymessage=confirm("用户已存在，请登录！");
                        if(mymessage==true){
                            window.location.href = "login.html"
                        }
                        return;
                    }
                    if(res.ErrorMessage =="验证码错误"){
                        alert("验证码错误!")
                        return;
                    }
                    if(res.ErrorMessage =="验证码失效"){
                        alert("验证码过期!")
                        return;
                    }

                },
                error:function(err){
                }
            })
        }else{
            alert("两次密码不相同！")
        }



    })
    
})





