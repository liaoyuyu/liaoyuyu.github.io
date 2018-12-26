<template> 
    <!-- 个人中心   消息中心   服务消息 -->
    <div>
        <header class="message_service_header">
            <div class="back" @click="back()"><img src="../../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">服务消息</p>
            <p class="message_service_header_right">清空</p>
        </header>

         <div class="con message_service_con nobottom">

            <div class="message_service_box">
                <p class="message_service_time">前天  10:00</p>
                <div class="message_service">
                    <div class="message_service_div">
                        <p class="message_service_div_p">您有一张优惠券到账啦</p>
                        <img class="message_service_div_img" src="../../../assets/images/icon/dian.png" alt="">
                    </div>
                    <router-link class="message_service_a" to="">
                        <p class="message_service_a_p">部分绿色环保商品限时免单，土鸡蛋、土猪肉类目等满减。福利天天有！最高直减160元，赶紧来看看吧！</p>
                        <img class="message_service_a_img" src="../../../assets/images/icon/forward.png" alt="">
                    </router-link>
                </div>
            </div>

            <div class="message_service_box">
                <p class="message_service_time">前天  10:00</p>
                <div class="message_service">
                    <div class="message_service_div">
                        <p class="message_service_div_p">您有一张优惠券到账啦</p>
                        <img class="message_service_div_img" src="../../../assets/images/icon/dian.png" alt="">
                    </div>
                    <router-link class="message_service_a" to="">
                        <p class="message_service_a_p">部分绿色环保商品限时免单，土鸡蛋、土猪肉类目等满减。福利天天有！最高直减160元，赶紧来看看吧！</p>
                        <img class="message_service_a_img" src="../../../assets/images/icon/forward.png" alt="">
                    </router-link>
                </div>
            </div>

            <div class="message_service_box">
                <p class="message_service_time">前天  10:00</p>
                <div class="message_service">
                    <div class="message_service_div">
                        <p class="message_service_div_p">您有一张优惠券到账啦</p>
                        <img class="message_service_div_img" src="../../../assets/images/icon/dian.png" alt="">
                    </div>
                    <router-link class="message_service_a" to="">
                        <p class="message_service_a_p">部分绿色环保商品限时免单，土鸡蛋、土猪肉类目等满减。福利天天有！最高直减160元，赶紧来看看吧！</p>
                        <img class="message_service_a_img" src="../../../assets/images/icon/forward.png" alt="">
                    </router-link>
                </div>
            </div>

            <div class="message_service_box">
                <p class="message_service_time">前天  10:00</p>
                <div class="message_service">
                    <div class="message_service_div">
                        <p class="message_service_div_p">您有一张优惠券到账啦</p>
                        <img class="message_service_div_img" src="../../../assets/images/icon/dian.png" alt="">
                    </div>
                    <router-link class="message_service_a" to="">
                        <p class="message_service_a_p">部分绿色环保商品限时免单，土鸡蛋、土猪肉类目等满减。福利天天有！最高直减160元，赶紧来看看吧！</p>
                        <img class="message_service_a_img" src="../../../assets/images/icon/forward.png" alt="">
                    </router-link>
                </div>
            </div>

            <div class="message_service_box">
                <p class="message_service_time">前天  10:00</p>
                <div class="message_service">
                    <div class="message_service_div">
                        <p class="message_service_div_p">您有一张优惠券到账啦</p>
                        <img class="message_service_div_img" src="../../../assets/images/icon/dian.png" alt="">
                    </div>
                    <router-link class="message_service_a" to="">
                        <p class="message_service_a_p">部分绿色环保商品限时免单，土鸡蛋、土猪肉类目等满减。福利天天有！最高直减160元，赶紧来看看吧！</p>
                        <img class="message_service_a_img" src="../../../assets/images/icon/forward.png" alt="">
                    </router-link>
                </div>
            </div>

            <div class="message_service_box">
                <p class="message_service_time">前天  10:00</p>
                <div class="message_service">
                    <div class="message_service_div">
                        <p class="message_service_div_p">您有一张优惠券到账啦</p>
                        <img class="message_service_div_img" src="../../../assets/images/icon/dian.png" alt="">
                    </div>
                    <router-link class="message_service_a" to="">
                        <p class="message_service_a_p">部分绿色环保商品限时免单，土鸡蛋、土猪肉类目等满减。福利天天有！最高直减160元，赶紧来看看吧！</p>
                        <img class="message_service_a_img" src="../../../assets/images/icon/forward.png" alt="">
                    </router-link>
                </div>
            </div>

        </div>

    </div>
</template>


<style>
    @import '../../../assets/css/message_service.css';
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