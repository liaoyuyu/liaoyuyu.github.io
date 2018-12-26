<template>
    <!-- 底部导航   分类 -->
    <div>
        <header class="classify_header">
            <p class="classify_city_p">重庆市</p>
            <div class="search">
                <div class="search_img">
                    <img src="../../assets/images/icon/search_shallow.png" alt="">
                </div>
                <input type="text" class="search_input" placeholder="请输入商品名称" @keyup.enter="SureSearch">
            </div>
            <!-- 消息 -->
            <router-link class="classify_news" to="/my/my_html/message_center">
                <div class="news_box">
                    <img src="../../assets/images/icon/class_news.png" alt="">
                    <!-- 消息提示 -->
                    <span class="classify_news_Tips"></span>
                </div>
            </router-link>
        </header>

        <!-- 内容 -->
        <div class="con">
            <!-- 左边导航 -->
            <div class="left_con">
                <ul class="left_con_ul">
                    <li class="left_con_li" :class="{'left_con_li_select':index==click_index}" @click="classification_list_lcik(index)" v-for="(BanKuai_Data,index) in BanKuai_Data" :key="BanKuai_Data.index">{{BanKuai_Data.ProductType_Name}}</li>
                </ul>
            </div>
            <!-- 右边导航 -->
            <div class="right_con">
                
                <div class="classify_list">
                    <div class="classify_list_title">
                        <p class="classify_list_title_p">{{BanKuai_Data_child.ProductType_Name}}</p>
                        <div class="all">
                            <router-link class="all_a" :to="{path:'/classify_second_level',query:{ProductType_ID:BanKuai_Data_child.ProductType_ID}}">
                                <p class="all_p">全部</p>
                                <img class="all_img" src="../../assets/images/icon/forward.png" alt="">
                            </router-link>
                        </div>
                    </div>
                    <!-- 广告图片 -->
                    <div class="classify_list_img" v-if="!BanKuai_Data_child.Image_Url == ''">
                        <img :src="big_img+BanKuai_Data_child.Image_Url" alt="">
                    </div>
                    <!-- 选择商品 -->
                    <div class="classify_list_con">

                        <div class="classify_shop_box" v-for="child_data in BanKuai_Data_child.Child" :key="child_data.index">
                            <router-link :to="{path:'/classify_second_level',query:{ProductType_ID:child_data.ProductType_ID,type:1}}">
                                <div class="classify_shop_img">
                                    <img :src="big_img+child_data.Image_Url" alt="" v-if="!child_data.Image_Url == ''">
                                    <!-- 默认图片 -->
                                    <img src="" alt="" v-if="child_data.Image_Url == ''">
                                </div>
                                <p class="classify_shop_p">{{child_data.ProductType_Name}}</p>
                            </router-link>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    </div>
</template>


<style>
    @import '../../assets/css/classify.css';
</style>


<script>
import axios from 'axios';

import bus from '../../assets/js/bus.js'    //非组件传值

var AllData;
export default {
    data(){
        return{
            BanKuai_Data: "", //存储板块菜单返回的数据
            click_index: 0,
            BanKuai_Data_child:"",

            //图片接口
            big_img:localStorage.big_img,//大
            middle_img:localStorage.middle_img,//中
            small_img:localStorage.small_img, //小
        }
    },
    // components:{
    //     tabbar
    // },
    created:function(){
        // console.log(this.$route)
        // 获取一级分类
        this.get_classify()
    },
    mounted:function(){
        // 到这个页面就把 Tabbar 组件 的 page 传过去，改变底部导航的选择状态，不然返回时，选择状态一直带首页
        this.change_bottom_selection()
    },
    methods:{
        // 到这个页面就把 Tabbar 组件 的 page的index 传过去，改变底部导航的选择状态，不然返回时，选择状态一直带首页
        change_bottom_selection:function(){
            bus.$emit('change_selection', 1)
        },
        // 获取一级分类
        get_classify:function(){
            var _this =this
            axios.get(localStorage.weburl+'/WorkStore/GetProductType').then(res => {
                _this.BanKuai_Data = res.data.Return_Data.PageData 
                // console.log(res.data.Return_Data.PageData)  

                // 初始化第一条
                _this.BanKuai_Data_child = _this.BanKuai_Data[0]
            }).catch(error => { console.log(error) });   //查询失败返回的值
        },
        // 点击左边分类列表切换样式//并切换左边分类的二级分类
        classification_list_lcik:function(index){
            // console.log(index)
            this.click_index = index
            this.BanKuai_Data_child = this.BanKuai_Data[index]
            // console.log(this.BanKuai_Data_child)
        }
    },
}
</script>