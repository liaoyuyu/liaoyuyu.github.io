<template>
    <div>
        <header class="register_header">
            <div class="back" @click="back()"><img src="../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">注册</p>
        </header>

         <!-- 内容 -->
        <div class="con nobottom register_con">
            <ul class="register_ul">
                <!-- 手机号码 -->
                <li class="register_li">
                    <input class="register_input register_phone" type="text" placeholder="请输入你的手机号" maxlength="11" onkeyup="value=value.replace(/[^\d]/g,'')">
                </li>
                <!-- 验证码 -->
                <li class="register_li code_li">
                    <input class="register_input register_code" type="text" maxlength="6" placeholder="请输入验证码">
                    <p class="register_code_p" @click="register_code">获取验证码</p>
                </li>
                <!-- 新密码 -->
                <li class="register_li">
                    <input class="register_input register_password1" type="text" placeholder="请输入新密码" maxlength="16">
                </li>
                <!-- 确认密码 -->
                <li class="register_li">
                    <input class="register_input register_password2" type="text" placeholder="请确认密码" maxlength="16">
                </li>
            </ul>

            <!-- 登录按钮 -->
            <div class="register_bot" @click="register_buttom">同意协议并注册</div>

            <!-- 协议 -->
            <p class="agreement_p">已阅读并同意以下协议<span class="agreement">《用户使用协议》</span>、<span class="agreement">《用户使用协议》</span>、<span class="agreement">《用户使用协议》</span></p>
        </div>

    </div>
</template>


<style>
    @import '../../assets/css/login_register.css';
</style>


<script>
import axios from 'axios';
import $ from 'jquery'
// // 括号里写  要用到的方法名字
import {html_encode,get_code} from '../../assets/js/public.js'


export default {
    data(){
        return{

        }
    },
  created:function(){
   
  },
  methods:{
    // 返回上一页
    back(){
        this.$router.go(-1)
    },
    // 获取验证码
    register_code:function(){
        var register_phone = $(".register_phone").val()
        register_phone =  html_encode(register_phone)

        if(register_phone == ''){
            alert("手机号不能为空!")
            return;
        }

        get_code('.register_code_p',register_phone,'phone','register')
    },
    // 注册
    register_buttom:function(){
        var _this = this
        var register_phone = $(".register_phone").val()
        register_phone =  html_encode(register_phone)
        if(register_phone == ''){
            alert("手机号不能为空!")
            return;
        }

        var register_code = $(".register_code").val()
        register_code =  html_encode(register_code)
        if(register_code == ''){
            alert("验证码不能为空!")
            return;
        }

        var register_password1 = $(".register_password1").val()
        register_password1 =  html_encode(register_password1)

        var register_password2 = $(".register_password2").val()
        register_password2 =  html_encode(register_password2)

        if(register_password1 != register_password2){
            alert("两次密码不一致!")
            return;
        }
        if(register_password1 ==''||register_password2 ==''){
            alert("密码不能为空!")
            return;
        }

        register_password1 = this.$md5(register_password1)
        register_password2 = this.$md5(register_password2)
        // console.log(register_password1)

        // 注册
        var params = new URLSearchParams();
        params.append('Phone', register_phone);
        params.append('Ver', register_code);
        params.append('Pwd', register_password1);
        axios.post(localStorage.weburl + "/WorkMembers/Register", params).then(function (res) {

            if(res.data.Return_ID!=0){
                alert(res.data.Return_Mess)
            }else{
                console.log(res)
                // 注册成功直接执行登录
                var login_data = new URLSearchParams();
                login_data.append('Account', register_phone);
                login_data.append('Pwd', register_password1);
                axios.post(localStorage.weburl + "/WorkMembers/AccountLogin", login_data).then(function (res) {

                    if(res.data.Return_ID!=0){
                        alert(res.data.Return_Mess)
                    }else{
                         localStorage.provesignin = 1    //是否登录
                        localStorage.user_id = res.data.Return_Data     //用户id
                        _this.$router.replace(localStorage.returned_url)
                    }
                　　console.log(res)
                }).catch(function (error) {
                　　console.log(error)
                });
            }
        　　console.log(res)
        }).catch(function (error) {
        　　console.log(error)
        });


    },

  }
}

</script>