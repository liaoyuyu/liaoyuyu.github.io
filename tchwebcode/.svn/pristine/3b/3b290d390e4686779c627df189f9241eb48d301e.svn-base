<template>
    <!-- 个人中心   消息中心 -->
    <div>
        <header class="message_center_header">
            <div class="back" @click="back()"><img src="../../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">消息中心</p>
        </header>

        <div class="con nobottom message_center_con">
            <!-- 在线客服 -->
            <div class="message_list">
                <router-link class="message_list_a" to="">
                    <div class="message_list_left">
                        <img class="message_left_left" src="../../../assets/images/icon/online_service.png" alt="">
                        <div class="message_left_right">
                            <p class="message_left_right_name">在线客服</p>
                            <p class="message_left_right_p">查看与客服的沟通记录</p>
                        </div>
                    </div>
                    <div class="message_list_right">
                        <img src="../../../assets/images/icon/forward.png" alt="">
                    </div>
                </router-link>
            </div>

            <!-- 活动消息 -->
            <div class="message_list">
                <router-link class="message_list_a" to="/my/my_html/message_activity">
                    <div class="message_list_left">
                        <img class="message_left_left" src="../../../assets/images/icon/activity_news.png" alt="">
                        <div class="message_left_right">
                            <p class="message_left_right_name">活动消息</p>
                            <p class="message_left_right_p">你的地球日优惠福利来啦</p>
                        </div>
                    </div>
                    <div class="message_list_right">
                        <img src="../../../assets/images/icon/forward.png" alt="">
                    </div>
                </router-link>
            </div>

            <!-- 服务消息 -->
            <div class="message_list">
               <router-link class="message_list_a" to="/my/my_html/message_service">
                    <div class="message_list_left">
                        <img class="message_left_left" src="../../../assets/images/icon/service_news.png" alt="">
                        <div class="message_left_right">
                            <p class="message_left_right_name">服务消息</p>
                            <p class="message_left_right_p">您有一张有优惠券即将过期</p>
                        </div>
                    </div>
                    <div class="message_list_right">
                        <img src="../../../assets/images/icon/forward.png" alt="">
                    </div>
                </router-link>
            </div>

            <!-- 系统消息 -->
            <div class="message_list">
                <router-link class="message_list_a" to="/my/my_html/message_system">
                    <div class="message_list_left">
                        <img class="message_left_left" src="../../../assets/images/icon/system_news.png" alt="">
                        <div class="message_left_right">
                            <p class="message_left_right_name">系统消息</p>
                            <p class="message_left_right_p">秒杀专区暂时下线公告</p>
                        </div>
                    </div>
                    <div class="message_list_right">
                        <img src="../../../assets/images/icon/forward.png" alt="">
                    </div>
                </router-link>
            </div>

        </div>

    </div>
</template>


<style>
    @import '../../../assets/css/message_center.css';
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
