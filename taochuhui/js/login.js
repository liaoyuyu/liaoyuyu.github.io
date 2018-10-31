$(function(){
    // 点击登录
    $(".btn_login").click(function(){
        var phone = $(".phone").val();
        phone = html_encode(phone)
        console.log(phone)
        var password = $(".password").val();
        password = html_encode(password)
        if(phone==""){
            alert("手机号不能为空!")
            return;
        }
        if(password==""){
            alert("密码不能为空!")
            return;
        }
            $.ajax({
                url:localStorage.WebApiUrl+"Public/ExcuteLogin",
                type: "post",
                dataType: 'json',
                data:{
                    Mobile:phone,
                    password:password
                },
                success: function(res) {
                    console.log(res)
                    if(res.Result == true){
                        console.log(res.Data.UserID)
                        localStorage.userid = res.Data.UserID;
                        document.cookie ="obj=1;path=/"
                        // alert(localStorage.current_url)
                        if(localStorage.current_url==""){
                            window.location.href = "../index.html"
                        }else{
                            window.location.href = localStorage.current_url
                        }
                        return;
                    }
                    if(res.ErrorMessage =="密码错误"){
                        alert("密码错误!")
                        return;
                    }
                    if(res.ErrorMessage =="请注册"){
                        var mymessage=confirm("请注册！");
                        if(mymessage==true){
                            window.location.href = "register.html"
                        }
                        return;
                    }
                },
                error:function(err){
                    alert("未知错误")
                }
            })


    })



    // 点击微信登录
    $(".weixin").click(function(){
        document.cookie ="SQ=0;path=/";
        window.location.href = "../index.html"
    })
    
})
