// 刷新页面//pageshow   每次都执行
window.addEventListener('pageshow', function(event) {
    //event.persisted属性为true时，表示当前文档是从往返缓存中获取
    if (event.persisted) {
        location.reload();  
    }
});


// onload  只执行一次，有些浏览器返回时读取的浏览器缓存，就不会执行
$(function(){

    $.ajax({
        url:localStorage.WebApiUrl+"Public/GetUserInfoData",
        type: "post",
        dataType: 'json',
        data:{
            UserID:localStorage.userid
            // UserID:106
        },
        success: function(res) {
            var account = new Vue({
                el:"#account_security_box",
                data:{
                    data:res.Data,
                    time:"",//时间   处理过的数据
                    name:"",//昵称
                    none:true,//弹出层
                    anim:false,//弹出层的动画 类
                },
                created: function() {
                   localStorage.phone = this.data.UserMobile
                   console.log(this.data)
                   this.time = this.data.UserBirthday
                   this.time = this.time.split("-")
                },
                mounted:function(){
                    // 日期选择插件
                    select_time(this.time[0],this.time[1],this.time[2])
                },
                methods:{
                    // 判断手机号，空点击就为绑定，有就为修改
                    replace:function(){
                        // console.log(this.data.UserMobile)
                        if(this.data.UserMobile != ""){
                            window.location.href = "replace_phone.html"
                        }else{
                            window.location.href = "binding_phone.html"
                        }
                    },
                    // 修改昵称  //保存原先的昵称
                    name_focus:function(){
                        this.name = this.data.wxnickname
                    },
                    // 修改昵称  //失去焦点时判断昵称是否修改，改了请求，没改不变
                    name_blur:function(el){
                        this.data.wxnickname = el.target.value//修改过后的昵称
                        // 判断原先的昵称和现在昵称是否一样，一样不操作，不一样才保存
                        if(this.data.wxnickname != this.name){
                            // 请求ajax，保存
                            set_data("wxnickname",this.data.wxnickname)
                        }
                    },
                    // 性别 点击  弹出  层
                    sex:function(){
                        this.none = false
                        this.anim = true
                    },
                    // 弹出层  点击  让弹出层消失
                    disappear:function(){
                        this.none = true
                        this.anim = false
                    },
                    // 选择性别 男
                    sex_nan:function(){
                        this.data.UserSex = 1
                        this.none = true
                        this.anim = false
                        // 请求ajax 保存信息
                        set_data("sex",1)
                    },
                    // 女
                    sex_nv:function(){
                        this.data.UserSex = 2
                        this.none = true
                        this.anim = false
                        // 请求ajax 保存信息
                        set_data("sex",2)
                    },
                    // 修改密码
                    modify_password:function(){
                        if(this.data.UserMobile == ""){
                            alert("请先绑定手机号！")
                        }else{
                            window.location.href = "modify_password.html"
                        }
                    },
                    // 退出当前账号
                    quit:function(){
                        document.cookie ="obj=0;path=/"
                        localStorage.current_url = ""
                        // alert(localStorage.current_url)
                        window.location.href = "../html_login_register/login.html"
                    }
                },
            })
        },
        error:function(err){
            // alert("没有授权!")
            // alert(JSON.stringify(err))
            // document.cookie == "obj=flase"
        }
    })








    var data_img = null;//储存头像地址
    var name_val = "";//储存昵称

    // 上传头像
    uploadobj = function(){
        var f = document.getElementById('upload').files[0];
        var fd = new FormData();
        fd.append('OwnObject', 'user')
        fd.append('files', f);
        
        $.ajax({
            url:localStorage.WebApiUrl+"Public/UploadPic",
            type: "post",
            dataType: 'json',
            contentType:false,
            processData:false,
            data:fd,
            success:function(res){
                console.log(res)
                $(".upload_img").attr("src",res.Data.picUrl)
                set_data("picimage",res.Data.picName)
                console.log(res.Data.picName)
            }
        })
    }


    





})



// 时间选择器插件
function select_time(thisyear,thismonth,thisday){
    var myDate = new Date()
    var year = myDate.getFullYear()
    // console.log(year)
    var month = myDate.getMonth()+1
    // console.log(month)
    var day = myDate.getDate()
    // console.log(day)
    $.selectDate("#birthday_p",{
        start:year-50,
        end:year,
        select:[year-50,1,1],
        title:' '
    },function (data) {
        console.log(data);
        if(data.month<10){
            data.month = "0"+data.month
        }
        if(data.day<10){
            data.day = "0"+data.day
        }
        $("#birthday_p").text(data.year+"年-"+data.month+"月-"+data.day+"日")
        set_data("Birthday",data.year+"-"+data.month+"-"+data.day)
    });
}


// 保存修改
function set_data(parameter,obj){
    var fd = new FormData();
    fd.append(parameter, obj)
    fd.append("UserID",localStorage.userid)
    // fd.append('UserID', 87);
    $.ajax({
        url:localStorage.WebApiUrl+"Public/UpdateUserInfo",
        type: "post",
        dataType: 'text',
        processData: false,  // 不处理数据
        contentType: false,   // 不设置内容类型
        data:fd,
        success:function(res){
            console.log(res)
        }
    })
}


