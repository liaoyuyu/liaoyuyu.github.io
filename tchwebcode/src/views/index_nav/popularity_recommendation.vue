<template>
    <!-- 人气推荐 -->
    <div>
         <header class="preferential_recommendation_header">
            <div class="back" @click="back()"><img src="../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">人气推荐</p>
        </header>

        <div class="con nobottom" @scroll="roll_down">

            <!-- 顶部图片 -->
            <div class="top_img">
                <img src="../../assets/images/img/banner_img.png" alt="">
            </div>

            <div class="screen_function">
                <!-- 筛选 切换-->
                <div class="screen_box">
                    <!-- 筛选 -->
                    <div class="screen" @click="screen_down">
                        <p class="screen_p popularity_recommendation_screen">默认排序</p>
                        <img class="screen_img" src="../../assets/images/icon/screen.png" alt="">
                    </div>
                    <!-- 分割线 -->
                    <span class="screen_xian"></span>
                    <!-- 切换样式 -->
                    <div class="pattern_box" @click="switchClass">
                        <!-- 列表模式 -->
                        <div class="list_box pattern" v-if="switch_class">
                            <p class="pattern_p">列表</p>
                            <img class="pattern_img column_img" src="../../assets/images/icon/list_img.png" alt="">
                        </div>
                        <!-- 大图模式 -->
                        <div class="big_box pattern" v-if="!switch_class">
                            <p class="pattern_p">大图</p>
                            <img class="pattern_img big_img" src="../../assets/images/icon/big_img.png" alt="">
                        </div>
                    </div>

                    <!-- 筛选  下拉 -->
                    <div class="screen_down" :class="{none_visibility:none}">
                        <p class="screen_down_p" @click="screen_sort('','默认排序')">默认排序</p>
                        <p class="screen_down_p" @click="screen_sort('SaleAsc','销量优先')">销量优先</p>
                        <p class="screen_down_p" @click="screen_sort('SaleDesc','销量降序')">销量降序</p>
                        <p class="screen_down_p" @click="screen_sort('PriceAsc','价格升序')">价格升序</p>
                        <p class="screen_down_p" @click="screen_sort('PriceDesc','价格降序')">价格降序</p>
                    </div>
                </div>
            </div>

            <div class="con_con">
                <!-- 内容 -->
                <div class="shop_con" :class="[switch_class?'shop_con_big':'shop_con_list']">

                    <div class="shop_box" :class="[switch_class?'shop_box_big':'shop_box_list']" v-for="popularity_data in popularity_recommendation_data" :key="popularity_data.index">
                         <router-link class="shop_a" :class="[switch_class?'shop_a_big':'shop_a_list']" :to="{path:'/detail/product_detailed',query:{product_id:popularity_data.Product_ID}}">
                            <div class="shop_img" :class="[switch_class?'shop_img_big':'shop_img_list']">
                                <img :src="big_img+popularity_data.Image_Url" alt="">
                            </div>
                            <div :class="[switch_class?'bot_box_big':'bot_box_list']">
                                <p class="shop_name" :class="[switch_class?'shop_name_big':'shop_name_list']">{{popularity_data.Product_Name}}</p>
                                <div class="shop_p" v-if="!switch_class">
                                    <p>{{popularity_data.Product_Explain}}</p>
                                </div>
                                <div class="shop_money">
                                    <p class="new_money">￥{{(popularity_data.Product_PriceCash*0.9).toFixed(2)}}</p>
                                    <p class="old_money">￥{{popularity_data.Product_PriceCash}}</p>
                                </div>
                            </div>
                            
                        </router-link>
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


    </div>
</template>


<style>
    @import '../../assets/css/popularity_recommendation.css';
</style>



<script>
// 括号里写  要用到的方法名字
// import {back} from '../../assets/js/public.js'
import $ from 'jquery'
import axios from 'axios';

export default {
     data(){
        return{
            popularity_recommendation_data:"",
            switch_class:1,//切换类(改变模式)
            none:1,//筛选显示
            this_index:0,//默认选中状态

             //图片接口
            big_img: localStorage.big_img, //大
            middle_img: localStorage.middle_img, //中
            small_img: localStorage.small_img, //小
        }
    },
    created:function(){
        // 获取人气推荐数据
        this.get_popularity_recommendation(1,"")
    },
    mounted:function(){

    },
    methods:{
        // 获取人气推荐数据
        get_popularity_recommendation:function(page,sort){
            var _this = this
            axios.get(localStorage.weburl+'/Home/GetHomeProdcut',{
                params: {
                    page: page, //页数
                    type: 2, //人气推荐
                    orderType:sort,//排序
                }        
            }).then(res => {
                _this.popularity_recommendation_data = res.data.Return_Data;
                console.log(res.data.Return_Data);
            }).catch(error => { console.log(error) });
        },
        // 返回上一页
        back(){
           this.$router.go(-1)
        },
         // 点击导航，切换样式
        click_nav:function(e){
            this.none = 1;
            this.this_index = e;
        },
        // 筛选
        screen_down:function(){
            this.none = !this.none
        },
        // 切换大图和列表模式
        switchClass:function(){
            this.none = 1
            this.switch_class = !this.switch_class
        },
        // 监听滚动
        roll_down:function(){
            this.none = 1;
        },
        // 排序
        screen_sort:function(sort,sort_p){
            this.get_popularity_recommendation(1,sort)
            this.none = 1;
            $(".popularity_recommendation_screen").text(sort_p)
        },
    },
}

</script>
