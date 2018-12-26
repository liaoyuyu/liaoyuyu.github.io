<template>
    <!-- 底部导航  基地 -->
    <div id="BaseMain">
        <!-- 页面的标题 -->
        <header class="base_header">
            <p class="header_cen">基地中心</p>
        </header>

        <!-- 板块导航菜单 -->
        <div class="base_nav">
             <swiper class="swiper_box" :options="base_swiper">
                <swiper-slide class="base_slide" :class="click_index?'':'slide_select'" @click.native="slide_click(0,0)">全部</swiper-slide>
                <swiper-slide class="base_slide" :class="{slide_select:(index+1)==click_index}" v-for="(BanKuai,index) in BanKuai_Data" :key="BanKuai.index"  v-if="BanKuai.ParentID=='0'" @click.native="slide_click(index+1,BanKuai.TypeID)">{{BanKuai.TypeName}}</swiper-slide>
            </swiper>
        </div>

        <!-- 主要内容区域 -->
        <div class="con base_con_box">
            <!-- 基地列表 -->
            <div class="base_con">
                <!-- 基地对象 -->
                <div class="each_base" v-for="(Business,index) in Business_Data" :key="Business.index">
                    <router-link class="each_base_a" :to="{path:'/base_detail',query:{baseID:Business.Business_ID}}">
                        <!-- 基地名称 -->
                        <div class="base_title">
                            <div class="base_portrait">
                                <img class="" :src="small_img+Business.Logo_FileUrl" alt="">
                            </div>
                            <p class="base_name">{{Business.Business_Name}}</p>
                        </div>

                        <!-- 基地视频 -->
                        <div class="base_video_box" onclick="return false;">
                            <video class="base_video" :src="Business.Business_VideoUrl" :poster="big_img+Business.Business_VideoImgUrl"></video>
                            <div class="video_play" @click="PlayVideo(index)">
                                <img src="../../assets/images/icon/video_play.png" alt="">
                            </div>
                        </div>

                        <!-- 基地描述 -->
                        <div class="broadcast_describe">
                            <p v-cloak v-html="Business.Business_SupDesc"></p>
                        </div>

                        <!-- 浏览 点赞 评论 -->
                        <div class="operation">
                            <div class="operation_inner">
                                <!-- 浏览 -->
                                <div class="browse" onclick="return false;">
                                    <img class="browse_img" src="../../assets/images/icon/browse.png" alt="">
                                    <p class="browse_p">{{Business.ReadCount}}</p>
                                </div>
                                <!-- 收藏 -->
                                <div class="fabulous" onclick="return false;">
                                    <img class="fabulous_img" src="../../assets/images/icon/fabulous_unselect.png" alt="">
                                    <p class="fabulous_p" v-cloak>{{Business.CollectionCount}}</p>
                                </div>
                                <!-- 评论 -->
                                <div class="comment" onclick="return false;">
                                    <img class="comment_img" src="../../assets/images/icon/comment.png" alt="">
                                    <p class="comment_p" v-cloak>{{Business.CommentsCount}}</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- 底线 -->
            <div class="baseline">
                <p>没有更多了~</p>
            </div>
        </div>
    </div>
</template>

<style>
    @import '../../assets/css/base.css';
</style>

<script>
import axios from 'axios';
import 'swiper/dist/css/swiper.css'    //在全局没引入，这里记得要！
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import $ from 'jquery'

import bus from '../../assets/js/bus.js'    //非组件传值

export default {
    components: {
        swiper,
        swiperSlide
    },
    data(){
        return{
            BanKuai_Data: "",   //存储板块菜单返回的数据
            click_index: 0,     //当前点击slide的索引
            Business_Data: "",  //存储基地数据
            nowPage:1,          //当前页码
            banKuaiID:"0",      //当前板块编号，查询全部传入0

            //图片接口
            big_img:localStorage.big_img,//大
            middle_img:localStorage.middle_img,//中
            small_img:localStorage.small_img, //小
            //导航板块菜单Swiper
            base_swiper:{
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                slidesPerView: 4, //显示多少个
                freeMode: true, //滑动后，不贴合边缘
                slideToClickedSlide: true, //点击过渡到当前slide
            }
        }
    },
    created:function(){
        // 到这个页面就把 Tabbar 组件 的 page 传过去，改变底部导航的选择状态，不然返回时，选择状态一直带首页
        this.change_bottom_selection()

        // 获取基地分类
        this.loadBanKuaiData();
        //默认加载全部板块的基地数据
        this.slide_click(0,0);

    },
    methods:{
        // 到这个页面就把 Tabbar 组件 的 page 传过去，改变底部导航的选择状态，不然返回时，选择状态一直带首页
        change_bottom_selection:function(){
            bus.$emit('change_selection', 2)
        },

        //获得板块导航菜单数据
        loadBanKuaiData:function(){
            var _this = this
            axios.get(localStorage.weburl+'/GetBusinessType').then(res => {
                //将接口返回的数据输出
                _this.BanKuai_Data = res.data.Return_Data;
            }).catch(error => { console.log(error) });
        },
        //加载基地数据列表（分页加载）
        loadSupplierData:function(){            
            var _this = this
            axios.get(localStorage.weburl+'/GetBusinessListByTypeID',{
                params: {
                    typeid: _this.banKuaiID, //产品类型编码（板块编码）
                    page: _this.nowPage      //当前页码
                }        
            }).then(res => {
                _this.Business_Data = res.data.PageData;
                // console.log(_this.Business_Data);
            }).catch(error => { console.log(error) });
        },
         //点击上面导航菜单事件
        slide_click: function (index, typeid) {
            var _this = this
            //判断是否选中的全部
            if (index == 0) {
                _this.click_index = 0;
                typeid ="0";
            }else{
                _this.click_index = index;
            }
            //将查询的板块ID输出
            _this.banKuaiID = typeid;
            //加载基地数据
            this.loadSupplierData();
        },
        //执行播放直播视频的操作
        PlayVideo: function (index) {
            var play_button = $(".each_base").eq(index).find(".video_play")[0]
            play_button.style.display = "none";

            var play_video = $(".each_base").eq(index).find(".base_video")[0]
            play_video.play();
        }
    }
}  
</script>