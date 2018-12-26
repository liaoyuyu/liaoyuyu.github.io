<template>  
    <!-- 设置 -->
    <div>
        <header class="set_header">
            <div class="back" @click="back()"><img src="../../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">设置</p>
        </header>

        <div class="con set_up_con">
        <ul class="set_ul">
            <li class="set_li">
                <router-link class="set_a" to="/my/my_html/address">
                    <p class="set_p">收货地址</p>
                    <img class="set_img" src="../../../assets/images/icon/forward.png" alt="">
                </router-link>
            </li>
            <li class="set_li">
                <router-link class="set_a" to="/my/my_html/feedback">
                    <p class="set_p">意见反馈</p>
                    <img class="set_img" src="../../../assets/images/icon/forward.png" alt="">
                </router-link>
            </li>
            <li class="set_li" id="modify_password">
                <router-link class="set_a" to="/my/my_html/modify_password">
                    <p class="set_p">修改密码</p>
                    <img class="set_img" src="../../../assets/images/icon/forward.png" alt="">
                </router-link>
            </li>
            <li class="set_li">
                <router-link class="set_a" to="/my/my_html/about_us">
                    <p class="set_p">关于我们</p>
                    <img class="set_img" src="../../../assets/images/icon/forward.png" alt="">
                </router-link>
            </li>
        </ul>
    
        <!-- 退出按钮 -->
        <div class="quit" @click="quit_account">退出当前账号</div>
    </div>

        <!-- 弹出框 -->
        <vuepopup ref="popup" v-on:yes_no="yes_no"></vuepopup>
    </div>
</template>


<style>
    @import '../../../assets/css/set_up.css';
</style>


<script>
import axios from 'axios';
import vuepopup from '@/components/popup.vue'

export default {
    data(){
        return{
           
        }
    },
  components: {
      vuepopup
  },
  created:function(){
   
  },
  methods:{
    // 返回上一页
    back(){
        this.$router.go(-1)
    },
    // 退出账户
    quit_account:function(){
        let popup = this.$refs.popup
        popup.open({
            type:1,
            popup_information:'是否退出当前账户？',
            whether_show:true,
        })
    },
     // 弹出框 点击了确定还是取消
    yes_no:function(judge){
        console.log(judge)
        if(judge == 'yes'){
            localStorage.provesignin = 0    //是否登录
            localStorage.user_id = ''   //清除 id
            this.$router.replace('/')
            return;
        }else if(judge == 'no'){
            return;
        }
        
    }
  }
}

</script>
