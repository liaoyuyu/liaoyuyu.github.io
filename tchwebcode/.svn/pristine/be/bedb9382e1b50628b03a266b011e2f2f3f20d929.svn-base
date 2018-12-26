<template>
    <!-- 基地产品分类  单个分类全部 -->
    <div id="base_details">
        <header class="base_details_header">
            <a class="back" href="javascript:history.back(-1)"><img src="../../assets/images/icon/back.png" alt=""></a>
            <p class="header_cen">{{$route.query.base_name}}</p>
        </header>

    <!-- 内容 -->
    <div class="con nobottom base_moreproduct_con">
        <div class="base_productType_img2">
            <img class="base_productType_pic2" :src="type_img_url" alt="" v-if="type_img != ''">
            <img class="base_productType_pic2" src="../../assets/images/img/base_video.png" alt="" v-if="type_img == ''">
            <div class="base_productType_content2">
                <p class="top_img_title">{{type_name}}</p>
                <div class="top_img_p">
                    <p>{{type_p}}</p>
                </div>
            </div>
        </div>
        <div class="base_shop_list">

            <div class="base_shop_some" v-for="typedata in typedata" :key="typedata.index">
                <router-link class="base_shop_a" :to="{path:'/detail/product_detailed',query:{product_id:typedata.BusinessTypeProduct_ID}}">
                    <div class="base_shop_some_img">
                        <img :src="big_img+typedata.BusinessTypeProduct_ImgUrl" alt="">
                    </div>
                    <p class="base_shop_some_name">{{typedata.BusinessTypeProduct_Name}}</p>
                    <div class="base_shop_some_p">
                        <p>{{typedata.BusinessTypeProduct_Introduction}}</p>
                    </div>
                    <p class="base_shop_some_money">￥{{typedata.BusinessTypeProduct_Price}}</p>
                </router-link>
            </div>
 
        </div>

        <!-- 底线 -->
        <div class="baseline white_baseline">
            <p>没有更多了~</p>
        </div>
    </div>

    </div>        
</template>

<style>
@import '../../assets/css/base_product_more.css';
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
            baseID: "",         //存储当前基地编号
            typeID: "",         //存储产品类型编号
            type_img:"",        //分类图片
            type_img_url:'',    //分类图片完整地址
            type_name:"",       //分类名称
            type_p:"",          //分类说明
            typedata:"",        //产品数据
            //图片接口
            big_img:localStorage.big_img,//大
            middle_img:localStorage.middle_img,//中
            small_img:localStorage.small_img, //小

            // 基地分类
            // banner  swiper
            base_swiper:{
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                slidesPerView: 4, //显示多少个
                freeMode: true, //滑动后，不贴合边缘
                slideToClickedSlide: true, //点击过渡到当前slide
            }
        }
    },
    created(){
      this.baseID = this.$route.query.baseID;//获取上个页面传递的基地编号
      this.typeID = this.$route.query.typeID;//获得上个页面传递过来的产品类型编号
      this.type_img = this.$route.query.type_img;   //分类图片地址
      this.type_img_url = this.big_img +this.type_img   //分类图片完整地址
      this.type_name = this.$route.query.type_name; //分类名字
      this.type_p = this.$route.query.type_p    //分类描述

        //   获取产品数据
        this.get_typedata()
    },
    mounted(){
        
    },
    methods:{
        get_typedata:function(){
            var _this = this
             // 推荐基地
            axios.get(localStorage.weburl+'/GetProductListByBusinessIDAndProductTypeID',{
            params: {
                page: 1,  //页数
                businessID: _this.baseID,       //基地ID
                productTypeID:_this.typeID    //产品分类ID
            }
            }).then(res => {
                _this.typedata = res.data.PageData
                // _this.typedata.
               console.log(res.data.PageData)
            }).catch(error => { console.log(error) });
        },
    }
}
</script>
