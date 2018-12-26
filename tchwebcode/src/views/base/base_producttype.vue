<template>
    <!-- 基地产品分类 -->
    <div id="base_product_classify">
        <header class="base_product_classify_header">
            <a class="back" href="javascript:history.back(-1)"><img src="../../assets/images/icon/back.png" alt=""></a>
            <p class="header_cen">基地全部分类</p>
        </header>
        
        <!-- 内容 -->
        <div class="con nobottom base_product_con">
            <!-- 基地产品 -->
            <div class="block_box" v-for="base_classification in base_classification" :key="base_classification.index" v-if="base_classification.BusinessType_ProductList !=''">
                <!-- 顶部大图 -->
                <div class="details_big_img">
                    <img class="base_productType_pic" :src="big_img+base_classification.BusinessType_ImgUrl" alt="" v-if="base_classification.BusinessType_ImgUrl != ''">
                    <img class="base_productType_pic" src="../../assets/images/img/base_video.png" alt="" v-if="base_classification.BusinessType_ImgUrl == ''">
                    <div class="details_big_content">
                        <p class="base_details_title">{{base_classification.BusinessType_Name}}</p>
                        <div class="base_details_p_box">
                            <p class="base_details_p">{{base_classification.BusinessType_Remark}}</p>
                        </div>
                    </div>
                </div>
                <!-- 商品列表 -->
                <div class="base_details_shop_list">
                    <div class="swiper-container base_shop_swiper">
                        <swiper :options="swiperOption" ref="mySwiper">
                            <swiper-slide class="swiper-slide slide_list" v-for="(BusinessType_ProductList,index) in base_classification.BusinessType_ProductList" :key="BusinessType_ProductList.index" v-if="index<5">
                                <router-link class="slide_list_a" :to="{path:'/detail/product_detailed',query:{product_id:BusinessType_ProductList.BusinessTypeProduct_ID}}">
                                    <div class="slide_img_box">
                                        <img class="slide_img" :src="middle_img+BusinessType_ProductList.BusinessTypeProduct_ImgUrl" alt="">
                                        <span class="slide_img_p">直播中</span>
                                    </div>
                                    <p class="slide_title">{{BusinessType_ProductList.BusinessTypeProduct_Name}}</p>
                                    <p class="slide_p">{{BusinessType_ProductList.BusinessTypeProduct_Introduction }}</p>
                                    <p class="slide_money">￥{{BusinessType_ProductList.BusinessTypeProduct_Price }}</p>
                                </router-link>
                            </swiper-slide>
                           

                            <!-- 点击查看更多 -->            
                            <swiper-slide class="swiper-slide slide_list more_slide" v-if=" base_classification.BusinessType_ProductList.length > 5">                          <!-- 基地id    基地分类id                                   分类图片                                         分类名字                                         分类说明                                        基地名称 -->    
                                <router-link class="slide_list_a more_a" :to="{path:'/base_moreproduct',query:{baseID:baseID,typeID:base_classification.BusinessType_ID,type_img:base_classification.BusinessType_ImgUrl,type_name:base_classification.BusinessType_Name,type_p:base_classification.BusinessType_Remark,base_name:$route.query.base_name}}">
                                    <img class="more_a_img" src="../../assets/images/icon/browse.png" alt="">
                                    <p class="more_a_p">查看更多</p>
                                </router-link>
                            </swiper-slide>
                        </swiper>
                    </div>
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
@import '../../assets/css/base_details.css';
</style>

<script>
import axios from 'axios';
import 'swiper/dist/css/swiper.css'    //在全局没引入，这里记得要！
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    components: {
        swiper,
        swiperSlide
    },
    data(){
        return{
            baseID:"",        //当前基地编号
            base_classification:"",//产品分类数据
            //图片接口
            big_img:localStorage.big_img,//大
            middle_img:localStorage.middle_img,//中
            small_img:localStorage.small_img, //小

            //基地产品分类
            swiperOption:{
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                slidesPerView: 3.5, //显示多少个
                spaceBetween: 5, //间隔
                freeMode: true, //滑动后，不贴合边缘
                slideToClickedSlide: true, //点击过渡到当前slide
            }
        }
    },
    created(){
      this.baseID = this.$route.query.baseID;//获取上个页面传递的id,在下面获取数据的时候先提交id

    //   获取数据
      this.get_base_classification()
    },
    mounted(){
    },
    methods:{
         // 获取数据
        get_base_classification:function(){
            var _this = this
             // 推荐基地
            axios.get(localStorage.weburl+'/GetbusinessTypeList',{
            params: {
                page: 0,  //页数
                businessID: _this.baseID          //基地ID
            }
            }).then(res => {
                _this.base_classification = res.data.PageData
               console.log(res.data.PageData)
            }).catch(error => { console.log(error) });
        },
    },
    computed:{
        swiper() {
            return this.$refs.mySwiper.swiper;
        },
    }
}
</script>
