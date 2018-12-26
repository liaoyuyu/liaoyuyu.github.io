<template>
    <!-- 个人中心  消息中心   系统消息 -->
    <div>
         <header class="message_system_header">
            <div class="back" @click="back()"><img src="../../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">系统消息</p>
        </header>

        <div class="con nobottom message_system_con">

            <div class="message_system_box">
                <p class="message_system_time">前天  10:00</p>
                <div class="message_system">
                    <div class="message_system_title">
                        <p class="message_system_title_p">你的地球日优惠福利来啦</p>
                        <img class="message_system_title_img" src="../../../assets/images/icon/dian.png" alt="">
                    </div>
                    <p class="message_system_p">部分绿色环保商品限时免单，土鸡蛋、土猪肉类目等满减。福利天天有！最高直减160元，赶紧来看看吧！</p>
                   <!-- <router-link class="message_system_a" to="">
                        <p class="message_system_a_p">查看详情</p>
                        <img class="message_system_a_img" src="../../../assets/images/icon/forward.png" alt="">
                     </router-link> -->
                </div>
            </div>

            <div class="message_system_box">
                <p class="message_system_time">前天  10:00</p>
                <div class="message_system">
                    <div class="message_system_title">
                        <p class="message_system_title_p">你的地球日优惠福利来啦</p>
                        <img class="message_system_title_img" src="../../../assets/images/icon/dian.png" alt="">
                    </div>
                    <p class="message_system_p">部分绿色环保商品限时免单，土鸡蛋、土猪肉类目等满减。福利天天有！最高直减160元，赶紧来看看吧！</p>
                    <!-- <router-link class="message_system_a" to="">
                        <p class="message_system_a_p">查看详情</p>
                        <img class="message_system_a_img" src="../../../assets/images/icon/forward.png" alt="">
                    </router-link> -->
                </div>
            </div>

            <div class="message_system_box">
                <p class="message_system_time">前天  10:00</p>
                <div class="message_system">
                    <div class="message_system_title">
                        <p class="message_system_title_p">你的地球日优惠福利来啦</p>
                        <img class="message_system_title_img" src="../../../assets/images/icon/dian.png" alt="">
                    </div>
                    <p class="message_system_p">部分绿色环保商品限时免单，土鸡蛋、土猪肉类目等满减。福利天天有！最高直减160元，赶紧来看看吧！</p>
                   <!-- <router-link class="message_system_a" to="">
                        <p class="message_system_a_p">查看详情</p>
                        <img class="message_system_a_img" src="../../../assets/images/icon/forward.png" alt="">
                     </router-link> -->
                </div>
            </div>

        </div>

    </div>
</template>


<style>
    @import '../../../assets/css/message_system.css';
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