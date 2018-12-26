<template>
    <!-- 基地详情 -->
    <div>
    <header class="base_details_header">
        <a class="back" href="javascript:history.back(-1)"><img src="../../assets/images/icon/back.png" alt=""></a>
        <p class="header_cen" v-cloak>{{base_data.Business_Name}}</p>
    </header>

    <!-- 内容 -->
    <div class="con nobottom base_details_con">
        <!-- 基地产品 -->
        <div class="block_box">
            <!-- 视频 -->
            <div class="broadcast_video_box">
                <video class="broadcast_video" id="PlayVideoRq" :poster="base_play_video_img" :src="base_play_video" ref="videoPlayer"></video>
                <div class="video_play" v-on:click="PlayVideo()" v-if="video_play_icon">
                    <img src="../../assets/images/icon/video_play.png" alt="">
                </div>
            </div>
            <!-- 商品列表 -->
            <div class="base_details_shop_list">
                <swiper class="swiper-container base_shop_swiper" :options="base_product_swiper">                                                            
                    <swiper-slide class="wiper-slide slide_list" v-for="(base_product_video_list,index) in base_product_video_list" :key="base_product_video_list.index" v-if="index<5">
                        
                        <div class="slide_img_box" @click="choice_play_video(index)" :data_video_url='base_product_video_list.BusinessTypeProduct_VideoUrl' :data_video_img='base_product_video_list.BusinessTypeProduct_ImgUrl'>
                            <img class="slide_img" :src="middle_img+base_product_video_list.BusinessTypeProduct_ImgUrl" alt="">
                            <span class="slide_img_p">直播中</span>
                        </div>
                        <router-link class="slide_list_a" :to="{path:'/detail/product_detailed',query:{product_id:base_product_video_list.BusinessTypeProduct_ID}}">
                            <p class="slide_title">{{base_product_video_list.BusinessTypeProduct_Name}}</p>
                            <p class="slide_p">{{base_product_video_list.BusinessTypeProduct_Introduction}}</p>
                            <p class="slide_money">￥{{base_product_video_list.BusinessTypeProduct_Price}}</p>
                        </router-link>

                    </swiper-slide>


                    <!-- 查看更多 -->               
                        <swiper-slide class="swiper-slide slide_list more_slide" v-if="base_product_video_list.length > 5">                                        <!-- 基地名字，base_moreproduct页面要用 -->
                        <router-link class="slide_list_a more_a" :to="{path:'/base_producttype',query:{baseID:baseID,base_name:base_data.Business_Name}}">
                            <img class="more_a_img" src="../../assets/images/icon/browse.png" alt="">
                            <p class="more_a_p">查看更多</p>
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </div>       

        <!-- 基地信息 -->
        <div class="block_box" style="margin-top:0.1rem;">
            <div class="suplier_information_box">
                <!-- 基地头像 -->
                <div class="suplier_logo">
                    <img :src="base_Logo" alt="">
                </div>
                <!-- 基地信息（名称、简介、地址、收藏数量） -->
                <div class="suplier_information">
                    <div class="suplier_name">{{base_data.Business_Name}}</div>
                    <div class="suplier_remark">{{base_Remark}}</div>
                    <div class="suplier_address_keep">
                        <div class="suplier_address">
                            <img src="../../assets/images/icon/address_gray.png" alt="">
                            <span class="suplier_address_area">{{base_data.Business_ProvinceName}}</span>
                        </div>
                        <div class="suplier_keep">
                            <img src="../../assets/images/icon/fabulous_love.png" alt="">
                            <span class="suplier_keep_count">{{keepCount}}</span>
                        </div>
                    </div>
                </div>
                <div class="suplier_dokeep" @click="collection_subscribe" v-if="!isKeep">+ 收藏</div>
                <div class="suplier_cancelkeep" @click="collection_subscribe" v-if="isKeep">已收藏</div>
            </div>

            <!-- 基地介绍 -->
            <div class="base_introduce">
                <p class="base_introduce_title">基地介绍：</p>
                <pre class="base_introduce_pre base_introduce_pre_default" v-html="base_data.Business_SupDesc"></pre>
                <div class="down_display" v-on:click="openShowMore">
                    <img src="../../assets/images/icon/down.png" alt="">
                </div>
            </div>
        </div>

        <!-- 基地推荐 -->
        <div class="block_box">
            <p class="base_recommend_title">基地推荐</p>
            <router-link class="base_recommend_a" to="{path:'/workTaskEdit',query{id:work_task.id}}" v-for="(recommend_base,index) in recommend_base" v-if="index < 3" :key="recommend_base.index">
                <div class="base_recommend_img_box">
                    <div class="swiper-container base_recommend_swiper" v-if="recommend_base.Business_Imgs.length != 0">
                        <swiper :options="swiperOption">
                        
                            <swiper-slide v-for="Business_Imgs in recommend_base.Business_Imgs" :key="Business_Imgs.index">
                                <img class="base_recommend_img" :src="big_img+Business_Imgs.Img_Url" alt="" v-if="Business_Imgs.Img_Url != ''">
                                <img class="base_recommend_img" src="../../assets/images/img/base_recommend_img.png" alt="" v-if="Business_Imgs.Img_Url == ''">
                            </swiper-slide>

                        </swiper>
                    </div>
                    <img class="base_recommend_img" src="../../assets/images/img/base_recommend_img.png" alt="" v-if="recommend_base.Business_Imgs.length == 0">
                </div>
                <p class="base_recommend_name">{{recommend_base.Business_Name}}</p>
                <p class="base_recommend_p">{{recommend_base.Business_Type}}</p>
            </router-link>

        </div>
        
        <!-- 底线 -->
        <div class="baseline">
            <p>没有更多了~</p>
        </div>

     </div>


      <!-- 弹出框 -->
    <vuepopup ref="popup" v-on:yes_no="yes_no"></vuepopup>
    
    </div>
</template>

<style>
@import '../../assets/css/base_details.css';
</style>

<script>
import axios from 'axios';
import 'swiper/dist/css/swiper.css'    //在全局没引入，这里记得要！
import { swiper, swiperSlide } from 'vue-awesome-swiper'

// // 括号里写  要用到的方法名字
import {verify_login,query_collection} from '../../assets/js/public.js'

import vuepopup from '@/components/popup.vue'	//引入弹出框组件

 export default {
    components: {
        vuepopup,
        swiper,
        swiperSlide
    },
    data(){
        return{
            base_data:"",
            base_product_video_list:[],//基地商品视频列表
            baseID:"",       //当前基地的编号
            base_Name: "",   //存储基地名称
            base_Logo: "",   //存储基地Logo
            base_Remark:"基地描述（简介）",  //基地描述（简介）
            base_Desc: "",   //存储基地详情
            base_Address: "",//存储基地地址

            identifyingID:'',//身份标识

            base_play_video:'',//要播放的视频
            base_play_video_img:'',//要播放视频的封面

            isKeep:'',    //存储判断是否收藏
            keepCount:'',     //存储收藏次数

            recommend_base:"",//推荐基地

            video_play_icon:true,//播放按钮
            //图片接口
            big_img:localStorage.big_img,//大
            middle_img:localStorage.middle_img,//中
            small_img:localStorage.small_img, //小
            //基地下面的产品列表 swiper
            base_product_swiper:{
                observer: true,         //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,   //修改swiper的父元素时，自动初始化swiper
                slidesPerView: 3.5,     //显示多少个
                spaceBetween: 5,        //间隔
                freeMode: true,         //滑动后，不贴合边缘
                slideToClickedSlide: true, //点击过渡到当前slide
            //     on: {
            //         click:()=>{
            //             let swiper = this.$refs.baseShopSwiper.swiper;
            //             let i = swiper.activeIndex;
            //             console.log(i)
            //         }
            //   }
            },
            //推荐基地的图片轮播对象
            swiperOption:{
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                freeMode: true, //滑动后，不贴合边缘
                slideToClickedSlide: true //点击过渡到当前slide
            }
        }
    },
    created() {
        this.baseID = this.$route.query.baseID;//获取上个页面传递的基地编号
        // console.log(this.baseID);
        
        // 查询 是否 id 还是 ip
        this.gte_user_identification()

        // 获取商品视频列表
        this.get_base_product_video_list()
        

        // 请求推荐基地数据
        this.get_recommend_base()
       
    },
    mounted(){

    },
    methods:{
        // 切换视频
        choice_play_video(index){
            // console.log(index)
            // console.log(e.target)
            var obj = $(".slide_list").eq(index).find(".slide_img_box")[0]
            var choice_play_video_url = $(obj).attr("data_video_url")
            var choice_play_video_img = $(obj).attr("data_video_img")
            // console.log(choice_play_video_url)
            this.base_play_video_img = this.middle_img+choice_play_video_img
            this.base_play_video = choice_play_video_url
        },
        // 判断是否有id 没有就ip
        gte_user_identification:function(){
            var _this = this
            if(localStorage.user_id == ''|| localStorage.user_id == undefined||localStorage.user_id == 0){
                axios.get(localStorage.weburl+'/WorkMembers/GetIpConfig').then(res => {
                    _this.identifyingID = res.data.Return_Data
                    _this.get_base_detailed()
                }).catch(error => { console.log(error) });   //查询失败返回的值
            }else{
                _this.identifyingID = localStorage.user_id
                _this.get_base_detailed()
                // 查询基地收藏
                _this.queryCollection()
            }
        },

        // 获取 基地信息
        get_base_detailed:function(){
            var _this = this
            axios.get(localStorage.weburl+'/GetBusinessInfo',{
                params: {
                    businessID: _this.baseID,//当前基地编号
                    identifyingID:_this.identifyingID//当前用户登录识别码
                }
            }).then(res => {
                //将接口返回的数据输出
                _this.base_data = res.data.Return_Data
                // 基地头像
                _this.base_Logo = _this.small_img+res.data.Return_Data.Business_LogoImgURL
                // console.log(res.data.Return_Data);
            }).catch(error => { console.log(error) });
        },
        

        // 查询 用户是否 收藏基地（仅限登录的用户）
        queryCollection:function(n){    //n为1表示是用户操作，弹出提示框，n没有就是进入调用查询数据渲染的
            var _this = this
             // 查询 基地是否收藏
            query_collection(this.baseID,localStorage.user_id,2).then((res) => {
                console.log(res)
                _this.isKeep = res.Collection_UserCollectionState
                _this.keepCount = res.Collection_Count


                if(n==1){
                    let popup = this.$refs.popup
                    if(_this.isKeep == true){
                         popup.open({
                            type:3,
                            popup_information:'收藏成功',
                            whether_show:true,
                            long:false
                        })
                    }else if(_this.isKeep == false){
                         popup.open({
                            type:3,
                            popup_information:'取消收藏',
                            whether_show:true,
                            long:false
                        })
                    }
                   
                }
            
            })
        },


        // 推荐基地
        get_recommend_base:function(){
            var _this = this
            axios.get(localStorage.weburl+'/GetBusinessCommandList?businessID='+this.baseID,{
            }).then(res => {
                _this.recommend_base = res.data.Return_Data
            //    console.log(res.data.Return_Data)
            }).catch(error => { console.log(error) });
        },

        // 收藏基地
        collection_subscribe:function(){
            var _this = this
            // 判断是否登录
            _this.verify_login();

            var collection = new URLSearchParams();
            // console.log(localStorage.user_id)
            collection.append('MembersID', localStorage.user_id);
            collection.append('CollectionTargetID', _this.base_data.Business_ID);
            collection.append('CollectionType', "2");
            axios.post(localStorage.weburl+'/WorkMembers/CollectionEdit', collection).then(function (res) {
                // if(res.data.Return_ID == 0){
                //     _this.isKeep = !_this.isKeep
                // }
                _this.queryCollection(1)
                    
            }).catch(function (err) {
            　　console.log(err)
            });
        },

        // 获取 基地商品视频列表
        get_base_product_video_list(){
            var _this = this
            axios.get(localStorage.weburl+'/GetbusinessTypeList?page=0&businessID='+this.baseID,{
            }).then(res => {
                // console.log(res)
                var base_product_video_list = []
                var base_product_video_all = res.data.PageData
                for(var i = 0;i<base_product_video_all.length;i++){
                    for(var j = 0;j<base_product_video_all[i].BusinessType_ProductList.length;j++){
                        base_product_video_list.push(base_product_video_all[i].BusinessType_ProductList[j])
                    }
                }

                _this.base_product_video_list = base_product_video_list
                // console.log(_this.base_product_video_list)
                _this.base_play_video = base_product_video_list[0].BusinessTypeProduct_VideoUrl //默认第一次进入显示第一个视频
                _this.base_play_video_img = _this.big_img+_this.base_product_video_list[0].BusinessTypeProduct_ImgUrl


                // console.log(base_product_video_list)
                // console.log(_this.base_product_video_list)
                // console.log(res.data.PageData)
            }).catch(error => { console.log(error)});
        },

        //验证是否登录
        verify_login:function(){
            if(localStorage.provesignin == ''||localStorage.provesignin == undefined||localStorage.provesignin == 0){
                let popup = this.$refs.popup
                popup.open({
                    type:1,
                    popup_information:'还没登录，请登录!',
                    whether_show:true,
                    long:false
                })
                return;			
            }
            return;
        },

        // 弹出框组件方法  点击了确定还是取消
        yes_no:function(judge){
            console.log(judge)
            if(judge == 'yes'){
                localStorage.returned_url = this.$route.fullPath //一会返回的路由地址(fullPath完整地址，参数也会带上)
                this.$router.replace('/login_register/login')
                return;
            }else if(judge == 'no'){
                return false;
            }
            return;
        },




        //展开查看更多内容
        openShowMore:function(){
            $(".base_introduce_pre").removeClass("base_introduce_pre_default");
            $(".down_display").css("display","none")
        },
 
        //点击播放视频
        PlayVideo:function(){
            this.video_play_icon = false
            var vdo = document.getElementById("PlayVideoRq");
            vdo.play();  
        },
        //点击产品切换直播视频
        // handleClickSlide:function(index){
        //     //获得当前索引slide对象
        //     var nowSlideObj = $("#slide_"+index);
        //     //获得当前存储的视频的背景图片和路径
        //     var VideoPic = $(nowSlideObj).attr("videopic");
        //     var VideoSrc = $(nowSlideObj).attr("videosrc");
        //     //设置视频播放器的背景属性和src属性
        //     document.getElementById("PlayVideoRq").setAttribute("poster",VideoPic);
        //     document.getElementById("PlayVideoRq").setAttribute("src",VideoSrc);
        //     // console.log("播放地址是："+document.getElementById("PlayVideoRq").getAttribute("src"));
        //     //执行播放
        //     document.getElementById("PlayVideoRq").play();
        // }
    },
}
</script>