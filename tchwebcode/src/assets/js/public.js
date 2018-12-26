

// 测试
var ceshi = function(){
    console.log(1111)
}

// 查看是否收藏         
//CollectionTargetID 目标id（商品id，基地id）
//MembersID 用户id
//CollectionType 收藏类型   1商品  2基地
var query_collection = function(CollectionTargetID,MembersID,CollectionType){

   return new Promise(function(resolve, reject) {
        $.ajax({
            url:localStorage.weburl+'/WorkMembers/GetCollectionInfo',
            type: "get",
            dataType: "json",
            data:{ 
                CollectionTargetID: CollectionTargetID,
                MembersID:MembersID,
                CollectionType:CollectionType
            },
            success: function (res) {
                resolve(res.Return_Data)
            },
            error: function (err) {
                reject("错误")
            }
        })
    
      });

   
}



// 验证是否登录
var verify_login = function(_this){
    if(localStorage.provesignin == ''||localStorage.provesignin == undefined||localStorage.provesignin == 0){
        var mymessage=confirm("请登录！");
        if(mymessage==true){
            localStorage.returned_url = _this.$route.fullPath//一会返回的路由地址
            console.log(_this.$route.fullPath)
            _this.$router.push('/login_register/login')
            return;
        }else{
            return;
        }
    }
}


var flg = true; //获取验证码60内只能点击一次

// 转义 用户的输入内容
var html_encode = function(str){
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

// 获取验证码
//code_obj 为点击的对象的名字，phone 为接受验证码的手机号
//Type 为设备（ phone -手机,email-Email,weixi -微信）
//UseType 为验证码使用出  //register-注册 intro-推荐 其他暂不填
//Email 若Type为email且会员未绑定邮箱则必填
var get_code = function(code_obj,phone,Type,UseType,Email){
    if(!flg){
        return;
    }

    // 倒计时 
    var n=59;
    flg = false;
    $(code_obj).text(n+" S");
    var timer = setInterval(function(){
        n--;
        if(n > 0){
            // console.log($(code_obj))
            $(code_obj).text(n+" S");
        }else{
            $(code_obj).text("获取验证码");
            flg = true;
            clearInterval(timer)
            return;
        }
    },1000);

    // 发送短信
    $.ajax({
        url:localStorage.weburl + "/WorkMembers/SendVer",    
        type:"get",
        dataType:"json",
        data:{
            MembersID:phone,
            Type:Type,
            UseType:UseType,
            Email:Email
        },
        success:function(res){
            console.log(res)
            if(res.Return_ID != 0){
                alert(res.Return_Mess)
            }
        },
        error:function(err){
            console.log(err)
        }
    })

}

export{
    ceshi,html_encode,get_code,verify_login,query_collection
}