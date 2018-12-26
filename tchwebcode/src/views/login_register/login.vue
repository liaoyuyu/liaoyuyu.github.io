<template>
    <div id="login">
        <header class="login_header">
            <div class="back" @click="back()"><img src="../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">登录</p>
            <router-link class="header_register" to="/login_register/register">注册</router-link>
        </header>

        <div class="con nobottom login_con">
            <div class="login_userBox">
                <input class="login_phone" type="text" placeholder="请输入您的手机号" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="11">
            </div>
            <div class="login_userBox">
                <input class="login_password" type="password" maxlength="16" placeholder="请输入密码">
            </div>

            <div class="btn_login" @click="login_verification">登录</div>

            <p class="small_tip">登录即同意淘厨汇基地直播<span class="spec_tip">《用户使用协议》</span></p>




            <div class="login_underLine">
                <p>其他方式登录</p>
            </div>
            <div class="weixin_box">
                <img class="weixin" src="../../assets/images/icon/weixin.png" alt="">
                <p>微信登录</p>
            </div>

            <p class="login_tishi">未注册过的用户将直接为您创建淘厨汇账户</p>

        </div>

         <!-- 弹出框 -->
        <vuepopup ref="popup"></vuepopup>
    </div>
</template>


<style>
    @import '../../assets/css/login_register.css';
</style>


<script>
import axios from 'axios';
import $ from 'jquery';
// // 括号里写  要用到的方法名字
import {html_encode} from '../../assets/js/public.js';
import vuepopup from '@/components/popup.vue';	//引入弹出框组件


export default {
    components: {
      vuepopup,
    },
    data(){
        return{

        }
    },
  created:function(){
      
  },
  methods:{
    // 返回上一页
    back(){
		this.$router.replace(localStorage.returned_url)
    },
    //   登录验证
    login_verification:function(){
        var _this = this
        var login_phone = $(".login_phone").val();
        var login_password = $(".login_password").val();
        // 转义
        login_phone = html_encode(login_phone)
        login_password = html_encode(login_password)

        if(login_phone==''||login_password==''){
            // alert("手机号或密码不能为空!")
            let popup = this.$refs.popup
            popup.open({
                type:3,
                popup_information:"手机号或密码不能为空",
                whether_show:true,
                long:true
            })
            return;
        }
        login_password = this.$md5(login_password)
        // console.log(login_password)
        // 登录
        var params = new URLSearchParams();
        params.append('Account', login_phone);
        params.append('Pwd', login_password);
        axios.post(localStorage.weburl + "/WorkMembers/AccountLogin", params).then(function (res) {
        
            if(res.data.Return_ID!=0){
                // alert(res.data.Return_Mess)
                let popup = _this.$refs.popup
                popup.open({
                    type:3,
                    popup_information:res.data.Return_Mess,
                    whether_show:true,
                    long:true
                })
            }else{
                // console.log(res)
                localStorage.provesignin = 1    //是否登录
                localStorage.user_id = res.data.Return_Data     //用户id
                console.log(localStorage.user_id)
                _this.$router.replace(localStorage.returned_url)
            }
        }).catch(function (error) {
        　　console.log(error)
        });
        
    },
  }
}

</script>
