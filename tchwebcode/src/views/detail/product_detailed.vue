<template>
    <!-- 商品详情页 -->
    <div>
        <header class="product_detailed_header">
            <div class="back" @click="back()"><img src="../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">产品详情</p>
            <router-link class="product_detailed_header_right_a" to="/base">基地直播</router-link>
        </header>

        <!-- 头部切换 -->
        <div class="product_detailed_con_nav">
            <div class="product_nav_list" :class="{product_nav_list_select_cor:index==top_nav_index,product_nav_list_select:index==top_nav_index}"  @click="switch_slide(index)" v-for="(top_nav,index) in top_nav" :key="top_nav.index">{{top_nav}}</div>
        </div>

        <!-- 中间内容 -->
        <div class="con product_detailed_con_box">

            <div class="product_detailed_con">
               <swiper class="product_detailed_swiper" :options="product_detailed_top_nav" ref="product_detailed_swiper">
                   <!-- 商品介绍 -->
                    <swiper-slide class="product_detailed_slide">
                        <!-- 顶部 商品banner -->
                        <div class="product_banner">
                            <swiper class="product_banner_swiper" :options="product_banner_swiper">
                                <swiper-slide class="product_banner_slide" v-for="product_banner_img in product_detailed.Product_Img" :key="product_banner_img.index"><img class="product_banner_img" :src="big_img+product_banner_img.Img_Url" alt=""></swiper-slide>
                                <div class="swiper-pagination swiper_point"  slot="pagination"></div>
                            </swiper>
                        </div>

                        <!-- 信息 -->
                        <div class="product_information">
                            <p class="product_name">{{product_detailed.Product_Name }}</p>
                            <p class="product_p" v-html="product_detailed.Product_PriceInfo"></p>
                            <div class="product_money">
                                <div class="product_money_left">
                                    <p class="present_price">￥{{(specs_price*0.9).toFixed(2)}}</p>
                                    <p class="original_price">￥{{specs_price}}</p>
                                </div>
                                <p class="product_money_right" v-cloak>已售{{product_detailed.Product_SaleTotal }}笔</p>
                            </div>
                            <div class="product_activity" v-if="!product_detailed.Product_SellTypeInfo=='prepurchase'">
                                <p class="product_activity_left">预定抢购中</p>
                                <div class="product_activity_right">
                                    <p class="product_activity_right_p">本场结束剩余<span class="right_span">00</span><span>:</span><span class="right_span">36</span><span>:</span><span class="right_span">42</span></p>
                                </div>
                            </div>
                        </div>


                         <!-- 规格 -->
                        <div class="product_specifications">
                            <div class="specifications_list" @click="serviceexplain(1)">
                                <div class="specifications_list_left">服务说明</div>
                                <div class="specifications_list_right">
                                    <div class="specifications_list_img">
                                        <img src="../../assets/images/icon/specifications_list_img.png" alt="">
                                        <p>无忧退货</p>
                                    </div>
                                    <div class="specifications_list_img">
                                        <img src="../../assets/images/icon/specifications_list_img.png" alt="">
                                        <p>快速退款</p>
                                    </div>
                                    <div class="specifications_list_img">
                                        <img src="../../assets/images/icon/specifications_list_img.png" alt="">
                                        <p>免费包邮</p>
                                    </div>
                                    <img class="specifications_list_down_img" src="../../assets/images/icon/down.png" alt="">
                                </div>

                               

                            </div>
                            <!-- <div class="specifications_list">
                                <div class="specifications_list_left">商品参数</div>
                                <div class="specifications_list_right">
                                    <p class="specifications_list_right_p">查看</p>
                                    <img class="specifications_list_down_img" src="../../assets/images/icon/down.png" alt="">
                                </div>
                            </div> -->
                            <div class="specifications_list" @click="choice_specifications()">
                                <div class="specifications_list_left">选择规格</div>
                                <div class="specifications_list_right">
                                    <p class="specifications_list_right_p">请选择规格</p>
                                    <img class="specifications_list_down_img" src="../../assets/images/icon/down.png" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- 商品简介 -->
                        <div class="product_introduce">
                            <p class="product_introduce_title">商品简介</p>
                            <pre class="product_introduce_pre" v-html="product_detailed.Product_Intro"></pre>
                        </div>

                        <!-- 同类推荐 -->
                        <div class="identical_recommend_box">
                            <p class="product_introduce_title">商品推荐</p>
                            <div class="identical_recommend">
                                <swiper class="base_shop_swiper" :options="base_shop_swiper">
                                    
                                    <swiper-slide class="base_shop_slide_list" v-for="product_recommend in product_recommend" :key="product_recommend.index">
                                        <router-link class="slide_list_a" :to="{path:'/detail/Jump_refresh',query:{product_id:product_recommend.Product_ID}}" >
                                            <div class="slide_img_box">
                                                <img class="slide_img" :src="middle_img+product_recommend.Product_ImgUrl" alt="">
                                                <span class="slide_img_p">直播中</span>
                                            </div>
                                            <p class="slide_title">{{product_recommend.Product_Name}}</p>
                                            <p class="slide_p">{{product_recommend.Product_Introduction}}</p>
                                            <p class="slide_money">￥{{product_recommend.Product_PriceCash}}</p>
                                        </router-link>
                                    </swiper-slide>


                                    <swiper-slide class="base_shop_slide_list product_more_slide">
                                        <router-link class="slide_list_a base_shop_more_a" :to="{path:'/classify_second_level',query:{type:0}}">
                                            <img class="more_a_img" src="../../assets/images/icon/browse.png" alt="">
                                            <p class="more_a_p">查看更多</p>
                                        </router-link>
                                    </swiper-slide>
                                </swiper>

                           </div>
                        </div>

                        <!-- 基地信息 -->
                        <div class="base_message_box">
                            <p class="product_introduce_title">基地信息</p>
                            <router-link class="base_information_box_a" :to="{path:'/base_detail',query:{baseID:base_information.Business_ID}}">
                                <div class="base_information_left">
                                    <div class="left_left">
                                        <img :src="base_logo" alt="">
                                    </div>
                                    <div class="left_right">
                                        <p class="left_right_name" v-cloak>{{base_information.Business_Name}}</p>
                                        <p class="left_right_p">{{base_information.Business_Type}}</p>
                                    </div>
                                </div>
                                <div class="base_information_right">
                                    <p class="base_information_right_p">{{base_information.ProductNumber}}件商品</p>
                                    <img class="base_information_right_img" src="../../assets/images/icon/forward1.png" alt="">
                                </div>
                            </router-link>
                        </div>

                        <!-- 上划  切换 -->
                        <div class="upper_slide">
                            <p class="upper_slide_p">↑ 上划查看详情</p>
                        </div>


                    </swiper-slide>
                    <!-- 图文详情 -->
                    <swiper-slide class="product_detailed_slide img_text_details" v-html="product_detailed.Product_Descript">
                        <!-- <img v-if="product_detailed.Product_PicSrc != ''" :src="big_img+product_detailed.Product_PicSrc" alt=""> -->
                        <!-- 底线 -->
                        <div class="baseline img_text_details_baseline gray_baseline">
                            <p>暂无数据~</p>
                        </div>
                    </swiper-slide>
                    <!-- 服务说明 -->
                    <swiper-slide class="product_detailed_slide">
                        <div class="product_service_explain_slide" v-html="product_detailed.Product_Service"></div>
                    </swiper-slide>

                    <!-- 基地信息 -->
                    <swiper-slide class="product_detailed_slide product_details">
                        <div class="product_base_video_box">
                            <video class="broadcast_video" id="videoPlay" :src="base_video_url"   :poster="base_video_img"></video>
                            <div class="video_play" v-if="video_play_icon" @click="product_base_video_play">
                                <img src="../../assets/images/icon/video_play.png" alt="">
                            </div>
                        </div>

                        <!-- 基地 关注 -->
                        <div class="base_information_box">
                            <div class="base_information_box_left">
                                <div class="base_portrait">
                                    <img :src="base_logo" alt="">
                                </div>
                                <div class="base_information">
                                    <p class="base_information_p">{{base_information.Business_Name}}</p>
                                    <p class="base_information_p septum_p">{{base_information.Business_Type}}</p>
                                    <div class="base_ ">
                                        <div class="base_address">
                                            <img src="../../assets/images/icon/address_gray.png" alt="">
                                            <p class="base_information_p">{{base_information.Business_ProvinceName}}</p>
                                        </div>
                                        <div class="Collection">
                                            <img src="../../assets/images/icon/fabulous_love.png" alt="">
                                            <p class="base_information_p">{{base_collection_number}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="base_follow" v-if="!base_collection_state" @click="product_collection(0)">+ 收藏</div>
                            <div class="base_follow base_base_collection" v-if="base_collection_state" @click="product_collection(0)">已收藏</div>
                        </div>

                        <!-- 基地介绍 -->
                        <div class="base_introduce">
                            <p class="base_introduce_title">基地介绍:</p>
                            <pre class="base_introduce_pre" :class="{'base_introduce_pre_default':downStretching}" v-html="base_information.Business_SupDesc"></pre>
                            <div class="down_display" @click="down_stretching" v-if="downStretching">
                                <img src="../../assets/images/icon/down.png" alt="">
                            </div>
                        </div>

                         <!-- 间隔 -->
                        <div class="interval product_detailed_interval"></div>


                        <!-- 热销产品 -->
                        <div class="hot_sale">
                            <p class="hot_sale_title">热销产品</p>
                            <div class="hot_sale_con">
                                <!-- 每个商品 -->
                                <div class="Recommend_shop" v-for="hut_data in hut_data" :key="hut_data.index">
                                    <router-link class="Recommend_shop_a" :to="{path:'/detail/Jump_refresh',query:{product_id:hut_data.Product_ID}}">
                                        <div class="Recommend_shop_left">
                                            <img :src="middle_img+hut_data.Product_ImgUrl " alt="">
                                        </div>
                                        <div class="Recommend_shop_right">
                                            <p class="Recommend_shop_name">{{hut_data.Product_Name}}</p>
                                            <div class="Recommend_shop_p">
                                                <p>{{hut_data.Product_Introduction }}</p>
                                            </div>
                                            <div class="recommend_money">
                                                <span class="new_money">¥{{(hut_data.Product_PriceCash*0.9).toFixed(2)}}</span>
                                                <span class="old_money">￥{{hut_data.Product_PriceCash}}</span>
                                            </div>
                                            <!-- <img class="Recommend_shop_img json_shop_img" src="../../assets/images/icon/json_shop.png" alt=""> -->
                                        </div>
                                    </router-link>
                                </div>
                                
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

        </div>

            <!-- 弹出层 -->
             <!-- 服务说明 -->
            <div class="product_service_explain" :class="{'service_explain_close':service_explain}">
                <div class="product_service_explain_title">
                    <p class="product_service_explain_title_p">服务说明</p>
                    <div class="product_service_explain_title_cancel" @click="serviceexplain(0)">×</div>
                </div>
                <div class="product_service_explain_con" v-html="product_detailed.Product_Service"></div>
            </div>

            <!-- 规格 -->
            <div class="specifications_eject_box" :class="eject_specifications?'specifications_eject_box_anim':'none_visibility'">
                <div class="specifications_eject_innder_box">
                    <!-- 商品信息 -->
                    <div class="specifications_eject_innder_box_top">
                        <div class="specifications_eject_innder_box_img">
                            <img :src="specs_img" alt="">
                        </div>
                        <p class="specifications_eject_innder_box_name">{{product_detailed.Product_Name}}</p>
                        <p class="specifications_eject_innder_box_p" v-html="product_detailed.Product_Explain"></p>
                        <p class="specifications_eject_innder_box_money">￥{{specs_price}}</p>
                    </div>
                    <!-- 商品可选规格 -->
                    <div class="product_optional_specifications">
                        <!-- 商品规格列表 -->
                        <div class="product_specifications_list">
                            <p class="specifications_name"></p>
                            <div class="product_specifications_list_choice">
                                <span class="product_specifications_choice" :class="{'select_specifications_css':select_specifications_index==index}" v-for="(product_specs,index) in product_specs" :key="product_specs.index" @click="select_specifications_parameter(index)">{{product_specs.Sku_Name}}</span>
                            </div>
                        </div>
                    </div>

                    <!-- 数量 -->
                    <div class="purchase_or_join_number_box">
                        <div class="purchase_or_join_plus" @click="product_specifications_number(0)"><img src="@/assets/images/icon/plus.png" alt=""></div>
                        <input class="purchase_or_join_number" type="text" value="1" @blur="blur_number"  onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');">
                        <div class="purchase_or_join_reduce" @click="product_specifications_number(1)"><img src="@/assets/images/icon/reduce.png" alt=""></div>
                    </div>
                    
                    <!-- 加入购物车 或者 立即购买 -->
                    <div class="purchase_or_join_but_box">
                        <div class="add_to_cart_but" @click="product_join_car(1)">加入购物车</div>
                        <div class="immediate_purchase" @click="immediately_shop(1)">立即购买</div>
                    </div>

                    <!-- 关闭按钮 -->
                    <div class="product_specifications_close_byt" @click="product_specifications_close">×</div>
                </div>
            </div>


         <!-- 底部 -->
        <div class="footer">
            <!-- 小功能 -->
            <div class="small_function">
                <!-- 直播 -->
                <div class="function_list">
                    <router-link class="function_list_a" :to="{path:'/base_detail',query:{baseID:base_information.Business_ID}}">
                        <img class="live_broadcast" src="../../assets/images/icon/live_broadcast.png" alt="">
                        <p class="function_list_p">直播</p>
                    </router-link>
                    <div class="broadcast_polygon">
                        <img class="polygon" src="../../assets/images/icon/polygon.png" alt="">
                        <div class="broadcast_polygon_p">
                            <p>火爆直播中···</p>
                        </div>
                    </div>
                </div>
                <!-- 客服 -->
                <div class="function_list function_list_a">
                    <!-- <router-link class="function_list_a" to=""> -->
                        <img class="customer_service" src="../../assets/images/icon/customer_service.png" alt="">
                        <p class="function_list_p">客服</p>
                    <!-- </router-link> -->
                </div>
                <!-- 收藏 -->
                <div class="function_list" @click="product_collection(1)">
                    <a href="javascript:;" class="function_list_a">
                        <img class="shopping_cart" v-if="product_collection_state==true" src="../../assets/images/icon/fabulous_select.png" alt="">
                        <img class="shopping_cart" v-if="product_collection_state==false" src="../../assets/images/icon/fabulous_unselect.png" alt="">
                        <p class="function_list_p">收藏</p>
                    </a>
                </div>
            </div>
            <!-- 加入购物车 -->
            <div class="add_to_cart" @click="product_join_car(0)">加入购物车</div>
            <!-- 立即购买 -->
            <div class="purchase_immediately" @click="immediately_shop(0)">立即购买</div>
        </div>

         <!-- 弹出框 -->
	    <vuepopup ref="popup" v-on:yes_no="yes_no"></vuepopup>

    </div>
</template>



<style>
    @import '../../assets/css/product_detailed.css';
</style>


<script>
import axios from 'axios';
import $ from 'jquery'
import 'swiper/dist/css/swiper.css'    //在全局没引入，这里记得要！
import { swiper, swiperSlide} from 'vue-awesome-swiper'

// // 括号里写  要用到的方法名字
import {verify_login,query_collection} from '../../assets/js/public.js'

import vuepopup from '@/components/popup.vue'	//引入弹出框组件


export default {
    data(){
        return{
            product_detailed:"",
            product_specs:'',//产品规格
            specs_img:'',//规格图片
            specs_price:'',//规格价格
            specs_num:-1,//选择规格的库存
            specs_skuid:'',//选择的规格ID
            specs_state:0,//规格状态，1为选中了
            

            base_information:'',//基地信息
            product_recommend:"", //商品推荐
            identifyingID:'',//用户标识
            top_nav:["商品介绍","图文详情","服务说明","基地信息"],
            top_nav_index:0,//切换顶部nav 的选择样式
            eject_specifications:false,//是否弹出规格框
            select_specifications_index:null,//规格选择的下标

            service_explain:false, // 是否弹出服务说明层
            video_play_icon:true,//基地视频 播放按钮
            downStretching:true,   // 基地介绍  是否拉伸//并且隐藏下拉按钮

            hut_data:'',      // 热门推荐
            product_collection_state:'',//商品收藏状态
            base_collection_state:'',//基地收藏状态
            base_collection_number:'',//基地收藏数量
           
            

            // 单张图片不能连接渲染，不然报错，虽然也可以渲染出来,也不能在html中也【0】，下标
            // 商品介绍slide
            base_logo:"", //底部基地 头像
            // 基地信息slide
            base_video_url:'',
            base_video_img:'',



            // 顶部选项卡左右切换wwiper
            product_detailed_top_nav:{
                observer:true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                autoHeight:true,//自适应高度
                on: {
                    slideChange:()=>{
                        let swiper = this.$refs.product_detailed_swiper.swiper;
                        let i = swiper.activeIndex;
                        // console.log(i)
                        this.switch_slide(i)
                    },
                },
            },
            // 商品介绍banner
            product_banner_swiper:{
                 observer:true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                preventInteractionOnTransition:true,//设置过渡时不能进行操作//好像没用(在这里没用)
                // speed:5000,
                pagination: {
                    el: '.swiper_point',
                    clickable: true,
                },
            },
            // 商品推荐
            base_shop_swiper:{
                observer:true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                slidesPerView:3.5,//显示多少个
                spaceBetween:5,//间隔
                freeMode:true,//滑动后，不贴合边缘
            },

            //图片接口
            big_img:localStorage.big_img,//大
            middle_img:localStorage.middle_img,//中
            small_img:localStorage.small_img, //小
        }
    },
  components: {
    vuepopup,
    swiper,
    swiperSlide
  },
  created:function(){
    //   如果没有id 就强制返回
    if(this.$route.query.product_id == undefined){
        this.$router.go(-1)
    }

    //  判断用户id，或者ip
    this.gte_user_identification()
    // 商品推荐
    this.commodity_recommend()
    
  },
  mounted:function(){
      
  },
  methods:{
    //   接口
    //   判断用户是否有id，没有就获取ip
    gte_user_identification:function(){
        var _this = this

        setTimeout(function(){
            _this.switch_slide(0)
        },1)

         if(localStorage.user_id == ''|| localStorage.user_id == undefined||localStorage.user_id == 0){
            axios.get(localStorage.weburl+'/WorkMembers/GetIpConfig').then(res => {
                _this.identifyingID = res.data.Return_Data
                _this.get_product_detailed()
            }).catch(error => { console.log(error) });   //查询失败返回的值
         }else{
             _this.identifyingID = localStorage.user_id
            //  console.log(localStorage.user_id)
             _this.get_product_detailed()
             // 查询商品收藏
            this.queryCollection(1)
         }
    },

    //   获取商品详情数据   //prepurchase 为显示抢购，normal  为正常，不显示抢购
    get_product_detailed:function(){
        var product_id = this.$route.query.product_id;
        // console.log(this.identifyingID)
        var _this =this

        axios.get(localStorage.weburl+'/WorkStore/GetProductDetail',{
        params: {
            ProductID: product_id,
            identifyingID: _this.identifyingID,  
        }
        }).then(res => {
            _this.product_detailed = res.data.Return_Data
            _this.product_specs = res.data.Return_Data.Product_Sku  //产品规格数据
            _this.specs_img = _this.big_img+_this.product_detailed.Image_Url    //规格默认图片
            console.log( _this.product_specs)
            for(var i = 0;i< _this.product_specs.length;i++){
                if(_this.product_specs[i].Sku_IsDefault == 1){
                    _this.specs_price = _this.product_specs[i].Sku_PriceCash
                    return;
                }
            }

           _this.get_base_information()
        }).catch(error => { console.log(error) });

    },
    // 获取基地信息
    get_base_information:function(){
        // console.log(this.identifyingID)
        var _this = this
        //  console.log(this.product_detailed.Business_ID)
        //  获取基地信息
        axios.get(localStorage.weburl+'/GetBusinessInfo',{
            params: {
                businessID: _this.product_detailed.Business_ID,
                identifyingID:_this.identifyingID   //
            }
        }).then(res => {
            // console.log(_this.identifyingID)
            _this.base_information = res.data.Return_Data
            // console.log(res.data.Return_Data);
            // 单独给基地头像赋值
            _this.base_logo = _this.small_img+res.data.Return_Data.Business_LogoImgURL

            // 单独给基地视频赋值
            _this.base_video_url = res.data.Return_Data.business_VideoList[0].Bunsiness_VideoUrl
            _this.base_video_img = _this.big_img+res.data.Return_Data.business_VideoList[0].Bunsiness_VideoLogoUrl

            // 查询 基地收藏状态
            _this.queryCollection(0)
        }).catch(error => { console.log(error) });
    },

    // 获取商品推荐
    commodity_recommend:function(){
        var _this =this
        axios.get(localStorage.weburl+'/WorkStore/GetCommandList?page=1&type=1').then(res => {
            _this.product_recommend = res.data.PageData
            // console.log(res.data.PageData)

            setTimeout(function(){
                _this.set_product_more_slide()
            },1)
        }).catch(error => { console.log(error) });   //查询失败返回的值
    },
    // 热门推荐
    get_hot_data:function(){
        var _this = this;
         axios.get(localStorage.weburl+'/WorkStore/GetCommandList',{
            params: {
                page: 1,
                type:2,
                OrderType:'SaleDesc' 
            }
        }).then(res => {
            //将接口返回的数据输出
            _this.hut_data = res.data.PageData
            // console.log(res.data.PageData);
        }).catch(error => { console.log(error) });
    },
    // 查询收藏
    queryCollection:function(n){
        var _this = this
        // 1为查询商品  2位查询基地
        if(n){
             // 查询 商品是否收藏
            query_collection(this.$route.query.product_id,localStorage.user_id,1).then((res) => {
                // console.log(res)
                _this.product_collection_state = res.Collection_UserCollectionState
            })
        }else{
             // 查询 基地是否收藏
            query_collection(this.base_information.Business_ID,localStorage.user_id,2).then((res) => {
                // console.log(res)
                _this.base_collection_number = res.Collection_Count
                _this.base_collection_state = res.Collection_UserCollectionState
            })
        }
    },



    // 事件
    // 返回上一页
    back(){
        this.$router.go(-1)
    },
    // 点击头部nav 切换 //并滑动到顶部
    switch_slide:function(index){
        if(index ==3){
            this.get_hot_data()
        }

        this.serviceexplain(0)
        let swiper1 = this.$refs.product_detailed_swiper.swiper;
        swiper1.slideTo(index, 200, false);

        // console.log($(".product_detailed_con_box").scrollTop())
        $(".product_detailed_con_box").scrollTop(0) 

        this.change_style(index)
    },
    // 改变样式
    change_style:function(index){
        this.top_nav_index = index
    },
    // 设置同类推荐 查看更多的高度
    // 设置 一些最外层slide 高度占满
    set_product_more_slide:function(){
        // 同类推荐 查看更多的高度一致
        var base_shop_slide_list_height = $(".base_shop_slide_list").eq(0).outerHeight()
        // console.log(base_shop_slide_list_height)
        $(".product_more_slide").css("height",base_shop_slide_list_height+"px")
    },

    // 弹出服务说明层
    serviceexplain:function(n){
        // 1为打开，0位关闭
        if(n){
            this.service_explain = true
            $(".con").css("overflow","hidden")
        }else{
            this.service_explain = false
             $(".con").css("overflow","auto")
        }
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
            return false;			
        }
        return true;
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
        return false;
    },

    // 收藏/取消收藏操作
    // 1为商品  0为基地
    product_collection:function(type){
        var _this = this
        this.verify_login();
        var user_id = localStorage.user_id
        var product_id = this.product_detailed.Product_ID
        var base_id = this.base_information.Business_ID
        if(product_id == undefined){
            return;
        }
    
        var collection = new URLSearchParams();
        collection.append('MembersID', user_id);
        if(type){
            collection.append('CollectionTargetID',product_id);
            collection.append('CollectionType', "1");
        }else{
            collection.append('CollectionTargetID',base_id);
            collection.append('CollectionType', "2");
        }
        axios.post(localStorage.weburl+'/WorkMembers/CollectionEdit', collection).then(function (res) {
            if(type){
                if(res.data.Return_ID == 0){
                    _this.product_collection_state = !_this.product_collection_state
                    // console.log(_this.product_collection_state)
                    // 收藏提示
                    if(_this.product_collection_state == true){
                        let popup = _this.$refs.popup
                        popup.open({
                            type:3,
                            popup_information:'收藏成功',
                            whether_show:true,
                            long:false
                        })
                    }else{
                        let popup = _this.$refs.popup
                        popup.open({
                            type:3,
                            popup_information:'取消收藏',
                            whether_show:true,
                            long:false
                        })
                    }
                }
            }else{
                if(res.data.Return_ID == 0){
                    _this.base_collection_state = !_this.base_collection_state
                    // 收藏提示
                    if(_this.base_collection_state == true){
                        let popup = _this.$refs.popup
                        popup.open({
                            type:3,
                            popup_information:'收藏成功',
                            whether_show:true,
                            long:false
                        })
                    }else{
                        let popup = _this.$refs.popup
                        popup.open({
                            type:3,
                            popup_information:'取消收藏',
                            whether_show:true,
                            long:false
                        })
                    }
                    
                    if(_this.base_collection_state == true){
                        _this.base_collection_number += 1 
                    }else{
                        _this.base_collection_number -= 1
                    }
                }
            }
            // console.log(res)
        }).catch(function (err) {
        　　console.log(err)
        });






    },

      // 产品里面的基地视频  播放
    product_base_video_play:function(){
        this.video_play_icon = false
        var vdo = document.getElementById("videoPlay");
        vdo.play();  
    },

    // 弹出选择规格
    choice_specifications(n){
        this.eject_specifications = true;
    },
    // 关闭规格弹框
    product_specifications_close(){
        this.eject_specifications = false
    },

    // 产品规格  加减数量   0为减，1位加
    product_specifications_number(n){
        // console.log(n)
        if(n == 0){
            // $(".purchase_or_join_number").val()
            // console.log($(".purchase_or_join_number").val())
            if($(".purchase_or_join_number").val() == 1){
                // 提示最低数量为1
                let popup = this.$refs.popup
                popup.open({
                    type:3,
                    popup_information:'商品数量不能低于1件！',
                    whether_show:true,
                    long:true
                })
            }else{
                var number = $(".purchase_or_join_number").val();
                number--
                $(".purchase_or_join_number").val(number)
            }
        }else if(n == 1){
            var number = $(".purchase_or_join_number").val();
            console.log(this.specs_num)
            if(this.specs_num != -1){
                if(number >= this.specs_num){
                    let popup = this.$refs.popup
                    popup.open({
                        type:3,
                        popup_information:'超出库存上限!',
                        whether_show:true,
                        long:false
                    })
                    return;
                }
            }
            number++;
            $(".purchase_or_join_number").val(number)
        }
    },

    // 产品数量  失去焦点的时候 判断是否还有值，如果没有就把值变成1，有就不变
    blur_number(){
        var number =  $(".purchase_or_join_number").val()
        if(number == ''){
             $(".purchase_or_join_number").val(1)
        }
    },


    // 规格选择
    select_specifications_parameter(index){
        // 记录是否选择规格状态
        this.specs_state = 1

        this.select_specifications_index = index
        this.specs_price = this.product_specs[index].Sku_PriceCash
        this.specs_img = this.big_img+this.product_specs[index].Sku_Img
        this.specs_num = this.product_specs[index].Sku_Stock
        this.specs_skuid = this.product_specs[index].Sku_ID
        // console.log(this.specs_skuid)

        // 判断数量是否超过库存，超过就自动变成库存上限
        if($(".purchase_or_join_number").val()>= this.specs_num){
            $(".purchase_or_join_number").val(this.specs_num)
        }
    },

    // 加入购物车操作   //n  0为选择的底部按钮，1为选择的规格弹出的按钮
    product_join_car(n){
        // console.log(this.verify_login())
        if(this.verify_login()){
            if(n){
                if(this.specs_state==1){
                    // console.log(localStorage.user_id)
                    // console.log(this.product_detailed)
                    // console.log($(".purchase_or_join_number").val())
                    this.json_car_interface()
                }else{
                    let popup = this.$refs.popup
                    popup.open({
                        type:3,
                        popup_information:'请选择规格！',
                        whether_show:true,
                        long:false
                    })
                }
            }else{
               if(this.specs_state==1){
                   this.json_car_interface()
               }else{  
                   this.choice_specifications()
               }
            }
        }
        
    },
    // 加入购物车接口
    json_car_interface(){
        var _this = this
        var json_car = new URLSearchParams();
        json_car.append('MembersID', localStorage.user_id);
        json_car.append('ProductID',this.product_detailed.Product_ID)
        json_car.append('ProductSukID',this.specs_skuid)
        json_car.append('BuyType',this.product_detailed.Product_SellTypeInfo)
        json_car.append('Amount',$(".purchase_or_join_number").val())
        
        axios.post(localStorage.weburl+'/WorkCar/JoinCar', json_car).then(function (res) {
            if(res.data.Return_ID==0){
                let popup = _this.$refs.popup
                popup.open({
                    type:3,
                    popup_information:'加入成功',
                    whether_show:true,
                    long:false
                })
                _this.product_specifications_close()
            }
            console.log(res)
        }).catch(function (err) {
        　　console.log(err)
        });
    },

    // 立即购买   //n  0为选择的底部按钮，1为选择的规格弹出的按钮
    immediately_shop(n){
        // this.verify_login()
        if(this.verify_login()){
            if(n){
                if(this.specs_state==1){
                    console.log("规格立即购买")
                }else{
                    let popup = this.$refs.popup
                    popup.open({
                        type:3,
                        popup_information:'请选择规格！',
                        whether_show:true,
                        long:false
                    })
                }
            }else{
                if(this.specs_state==1){
                    console.log("底部立即购买")
                }else{
                    this.choice_specifications()
                }
            }
        }
        
    },




    // 基地介绍 拉伸   
    down_stretching:function(){
        this.eject_specifications = false
    },
  },





    // 监听地址是否发生变化
  watch:{
      $route(to, from) {
          console.log(to)
          console.log(from)
          if(to.fullPath != from.fullPath){
              this.gte_user_identification();
          }
      }
  },


}

</script>