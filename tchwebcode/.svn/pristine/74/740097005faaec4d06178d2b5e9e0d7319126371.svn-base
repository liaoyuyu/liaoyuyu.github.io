<template>
    <!-- 特惠推荐 -->
    <div>
        <header class="preferential_recommendation_header">
            <div class="back" @click="back()"><img src="../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">特惠推荐</p>
        </header>

        <div class="con nobottom">

            <!-- 顶部图片 -->
            <div class="top_img">
                <img src="../../assets/images/img/banner_img.png" alt="">
            </div>

             <!-- 今日特惠 -->
            <div class="today_preferential">
                <p class="today_preferential_title">今日特惠</p>

                <!-- 间隔 -->
                <div class="interval preferential_recommendation_interval"></div>

                <div class="today_preferential_con">

                    <!-- 每个商品 -->
                    <div class="Recommend_shop" v-for="preferential_recommendation in preferential_recommendation" :key="preferential_recommendation.index">
                        <router-link class="Recommend_shop_a" :to="{path:'/detail/product_detailed',query:{product_id:preferential_recommendation.Product_ID}}">
                            <div class="Recommend_shop_left">
                                <img :src="big_img+preferential_recommendation.Image_Url" alt="">
                            </div>
                            <div class="Recommend_shop_right">
                                <p class="Recommend_shop_name">{{preferential_recommendation.Product_Name}}</p>
                                <div class="Recommend_shop_p">
                                    <p>{{preferential_recommendation.Product_Explain}}</p>
                                </div>
                                <p class="preferential_money">特惠价:¥{{preferential_recommendation.Product_PriceCash}}</p>
                            </div>
                        </router-link>
                    </div>

                </div>
            </div>


             <!-- 底线 -->
            <div class="baseline">
                <span></span>
                <p>没有更多了哦~</p>
                <span></span>
            </div>

        </div>

        

    </div>
</template>


<style>
    @import '../../assets/css/preferential_recommendation.css';
</style>



<script>
// 括号里写  要用到的方法名字
// import {back} from '../../assets/js/public.js'
import $ from 'jquery'
import axios from 'axios';

export default {
    data(){
        return{
            preferential_recommendation:"",//特惠推荐数据

             //图片接口
            big_img: localStorage.big_img, //大
            middle_img: localStorage.middle_img, //中
            small_img: localStorage.small_img, //小
        }
    },
    created:function(){
        this.get_preferential_recommendation_data(0)
    },
    mounted:function(){

    },
    methods:{
        // 返回上一页
        back(){
           this.$router.go(-1)
        },
        // 获取第一屏数据
        get_preferential_recommendation_data:function(){
            var _this =this
            axios.get(localStorage.weburl+'/Home/GetHomeProdcut?page=1&type=3').then(res => {
                _this.preferential_recommendation = res.data.Return_Data  
                // console.log(res.data.Return_Data)  
            }).catch(error => { console.log(error) });   //查询失败返回的值
        },

    },
}

</script>
