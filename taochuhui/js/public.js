// localStorage.weburl = "http://admin.taochuhui.com/"//接口地址

localStorage.weburl = "http://192.168.2.241:8090"//测试接口地址


function get_data(data,url,typeobj){
    return new Promise(function(resolve, reject) {
        $.ajax({
            url:localStorage.weburl+url,
            type:typeobj,
            dataType:"json",
            data:data,
            // processData: false,  // 不处理数据
            // contentType: false,   // 不设置内容类型
            success:function(res){
                resolve(res)
            },
            error:function(err){
                reject(err)
            }
        })
    })
}


// 获取验证码方法
//code_obj 为点击的对象的名字，phone_box 为接受短信的号码的那个对象名字,没有写空""，
//phone 为手机号码，没有对象，直接给phone这个电话发短信,没有写空"",url 为接口后面部分地址，
function get_code(code_obj,phone_box,phone,url){
    if(!flg){
        return;
    }
    if(phone_box != ""&&phone == ""){
        if($(phone_box).val() == ""){
            alert("请输入手机号码！")
            return;
        }else{
            var phone_number = $(phone_box).val();
        }
    }

    // 倒计时 
    var n=59;
    flg = false;
    $(code_obj).text(n+" s");
    var timer = setInterval(function(){
        n--;
        if(n > 0){
            $(code_obj).text(n+" s");
        }else{
            $(code_obj).text("获取验证码");
            flg = true;
            clearInterval(timer)
            return;
        }
    },1000)
   


    // 发送短信
    
    if(phone_box !=""&&phone == ""){
        $.ajax({
            url:localStorage.WebApiUrl + url,
            type: "post",
            dataType: "json",
            data:{ 
                Mobile: phone_number,
            },
            success: function (data) {
                console.log("1:"+data)
                if (data.result == 1) {
                    console.log(data)
                } else {
                    // alert(data.errormessage);
                }
            },
            error: function (data) {
                console.log("错误")
                console.log(data);
                console.log(data.responseText);
            }
        });
    }else if(phone !=""&&phone_box == ""){
        $.ajax({
            url:localStorage.WebApiUrl + url,
            type: "post",
            dataType: "json",
            data:{ 
                Mobile: phone,
            },
            success: function (data) {
                console.log("2:"+data)
                if (data.result == 1) {
                    console.log(data)
                } else {
                    // alert(data.errormessage);
                }
            },
            error: function (data) {
                console.log("错误")
                console.log(data);
                console.log(data.responseText);
            }
        });
    }else{
        console.log("参数错误")
    }
}



 // 获取指定cookie值
 function getCookie(c_name) {
    var that = this;　　　　
    if (document.cookie.length > 0) {
        //检查这个cookie是否存在，不存在就为 -1
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            //获取cookie值的开始位置
            c_start = c_start + c_name.length + 1;
            //通过";"号是否存在来判断结束位置
            c_end = document.cookie.indexOf(";", c_start);

            if (c_end == -1){
                c_end = document.cookie.length;
            }
            //通过substring()得到了值
            return unescape(document.cookie.substring(c_start, c_end))　　 
        }　　　　
    }　　　　
    return ""　　
}