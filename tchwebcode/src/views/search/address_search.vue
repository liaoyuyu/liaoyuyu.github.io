<template>
    <!-- 地址搜索 -->
    <div>
        <header class="address_search_header">
            <div class="back" @click="back()"><img src="../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">选择地址</p>
            <!-- <p class=""></p> -->
            <router-link class="address_search_right_header" to="/my/my_html/address">选择地址</router-link>
        </header>

         <div class="con nobottom address_search_con">
            <!-- 地址搜索 -->
            <div class="search_address_box">
                <div class="city">
                    <p class="city_p">重庆市</p>
                    <img class="city_down" src="../../assets/images/icon/down.png" alt="">
                </div>
                <div class="search_address">
                    <div class="search_address_img">
                        <img class="" src="../../assets/images/icon/search_shallow.png" alt="">
                    </div>
                    <input class="search_address_input" type="text" placeholder="搜索支持配送的小区/写字楼">
                </div>
            </div>

            <!-- 提示 -->
            <div class="Tips">因各地区商品和配送服务不同，请您选择准确收货地址</div>

            <!-- 定位 -->
            <div class="Location">
                <div class="Location_left">
                    <img class="Location_img" src="../../assets/images/icon/Location.png" alt="">
                    <p class="Location_address">辉华·晶萃城</p>
                    <p class="Location_p">当前定位</p>
                </div>
                <div class="Location_right">
                    <img src="../../assets/images/icon/Refresh.png" alt="">
                </div>
            </div>

            <!-- 间隔 -->
            <div class="interval address_search_interval"></div>

            <!-- 去地址管理 -->
            <div class="go_address">
                <router-link class="go_address_a" to="/my/my_html/address">
                    <p class="go_address_p">重庆市江北区建西南路西普大厦18-5</p>
                    <p class="go_address_phone">邓晓菁  15520086360</p>
                    <img class="go_address_img" src="../../assets/images/icon/forward.png" alt="">
                </router-link>
            </div>

             <!-- 间隔 -->
             <div class="interval address_search_interval"></div>


             <!-- 提供的地址 -->
             <ul class="provide_address">
                 <li class="provide_address_li">辉华·晶萃城</li>
                 <li class="provide_address_li">华新街</li>
                 <li class="provide_address_li">城市领地(A座)</li>
                 <li class="provide_address_li">华新街</li>
                 <li class="provide_address_li">城市领地(A座)</li>
                 <li class="provide_address_li">辉华·晶萃城</li>
                 <li class="provide_address_li">城市领地(A座)</li>
                 <li class="provide_address_li">华新街</li>
                 <li class="provide_address_li">辉华·晶萃城</li>
             </ul>

        </div>

    </div>
</template>



<style>
    @import '../../assets/css/address_search.css';
</style>


<script>
import axios from 'axios';


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
  }
}

</script>