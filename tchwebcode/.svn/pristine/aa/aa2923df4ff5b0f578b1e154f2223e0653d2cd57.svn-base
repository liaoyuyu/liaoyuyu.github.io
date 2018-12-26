<template>
    <!-- 个人中心   绑定手机号 -->
    <div>
        <header class="binding_header">
            <div class="back" @click="back()"><img src="../../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">绑定手机号</p>
        </header>

         <!-- 内容 -->
    <div class="con binding_phone_con">

        <ul class="binding_ul">
                <li class="binding_li">
                    <input class="binding_input code" type="text" placeholder="请输入绑定的手机号码" maxlength="11" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');">
                    <p class="get_code">获取验证码</p>
                </li>
                <li class="binding_li">
                    <input class="binding_input code_p" type="text" placeholder="请输入验证码" maxlength="6" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');">
                </li>
        </ul>


            <!-- 确认更换按钮 -->
            <div class="confirm">
                确认更换
            </div>

        </div>




    </div>
</template>




<style>
    @import '../../../assets/css/binding_phone.css';
</style>


<script>
import axios from 'axios';

export default {
    data(){
        return{
           
        }
    },
  components: {

  },
  created:function(){
   
  },
  methods:{
    // 返回上一页
    back(){
        this.$router.go(-1)
    },
  }
}

</script>