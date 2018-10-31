$(function(){

    // 修改密码   判断是否有手机号码//没有则绑定//有就修改
    $("#modify_password").click(function(){
        console.log(localStorage.phone)
        if(localStorage.phone){
            window.location.href = "modify_password.html"
        }else{
            window.location.href = "binding_phone.html"
        }
    })


    // 退出
    $(".quit").click(function(){
        console.log("退出")

    })

})