<template>
    <!-- 支付订单 -->
    <div>
        <header class="purchase_order_header">
            <div class="back" @click="back()"><img src="../../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">填写订单</p>
        </header>

         <div class="con purchase_order_con">
            <!-- 目的地 -->
            <div class="Destination">下单次日送达(全国送商品2~4日送达)</div>

            <!-- 地址 -->
            <div class="collect_address">
                <router-link class="collect_address_a" :to="{path:'/my/my_html/address',query:{order_id:this.$route.query.order_id}}">
                    <p class="collect_address_City">{{receiving_address.Province_Name}}  {{receiving_address.City_Name}}  {{receiving_address.County_Name}}</p>
                    <p class="collect_address_detailed">{{receiving_address.MembersAddress_Address}}</p>
                    <p class="collect_address_name">{{receiving_address.MembersAddress_Receiver}}  {{receiving_address.MembersAddress_Phone}}</p>
                    <img class="collect_address_img" src="../../../assets/images/icon/forward1.png" alt="">
                </router-link>
            </div>

            <!-- 商品 -->
            <div class="payment_shop">
                <div class="payment_shop_title">
                    <p class="payment_shop_title_p">极速配送</p>
                    <p class="payment_shop_title_tips">全国送商品2~4日送达</p>
                </div>
                <div class="payment_shop_box">
                        <div class="payment_shop_list">
                            <swiper :options="payment_shop_list_swiper" >
                                <swiper-slide v-for="order_data_list in order_data.OrderList" :key="order_data_list.index"><img class="shop_img" :src="small_img+order_data_list.Image_Url" alt=""></swiper-slide>
                            </swiper>

                            <!-- <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"><img class="shop_img" src="../../../assets/images/img/shop_img1.png" alt=""></div>
                                    <div class="swiper-slide"><img class="shop_img" src="../../../assets/images/img/shop_img1.png" alt=""></div>
                                    <div class="swiper-slide"><img class="shop_img" src="../../../assets/images/img/shop_img1.png" alt=""></div>
                                    <div class="swiper-slide"><img class="shop_img" src="../../../assets/images/img/shop_img1.png" alt=""></div>
                                    <div class="swiper-slide"><img class="shop_img" src="../../../assets/images/img/shop_img1.png" alt=""></div>
                                    <div class="swiper-slide"><img class="shop_img" src="../../../assets/images/img/shop_img1.png" alt=""></div>
                                </div>
                            </div> -->
                        </div>
                        <router-link class="payment_shop_a" :to="{path:'/shopcar/shopcar_html/purchase_order_list',query:{order_id:this.$route.query.order_id}}">
                            <p v-if="order_data.OrderList">共{{order_data.OrderList.length}}件</p>
                            <img src="../../../assets/images/icon/forward.png" alt="">
                        </router-link>
                </div>
            </div>


            <!-- 订单信息 -->
            <ul class="shop_order_ul">
                <!-- 订单号 -->
                <li class="shop_order_li">
                    <p class="shop_order_left">订单号</p>
                    <p class="shop_order_right">{{order_data.Order_ID}}</p>
                </li>
                <!-- 创建时间 -->
                <li class="shop_order_li">
                    <p class="shop_order_left">创建时间</p>
                    <p class="shop_order_right">{{temporary_order_time}}</p>
                </li>
            </ul>

            <!-- 结算信息 -->
            <ul class="shop_order_ul">
                <!-- 标题 -->
                <li class="shop_order_li">
                    <p class="shop_order_left settlement_p">结算信息</p>
                </li>
                <!-- 总价 -->
                <li class="shop_order_li">
                    <p class="shop_order_left settlement_p">商品总价</p>
                    <p class="shop_order_right settlement_p total_price">￥{{order_data.Order_BuyTotalCash}}</p>
                </li>
                <!-- 优惠券 -->
                <!-- <li class="shop_order_li"> -->
                    <!-- <p class="shop_order_left settlement_p">优惠券</p> -->
                    <!-- <router-link class="shop_order_right Discount_p shop_order_right_a" :to="{path:'/my/my_html/coupon',query:{temporary_order_id:orderid}}" v-if="coupon_state==1">有可用优惠券</router-link> -->
                    <!-- <router-link class="shop_order_right Discount_p shop_order_right_a" :to="{path:'/my/my_html/coupon',query:{temporary_order_id:orderid}}" v-if="coupon_state==0">无可用优惠券</router-link> -->
                    <!-- <router-link class="shop_order_right Discount_p shop_order_right_a" :to="{path:'/my/my_html/coupon',query:{temporary_order_id:orderid}}" v-if="coupon_state==3">还差￥19.2可减20</router-link> -->
                    <!-- <p class="shop_order_right Discount_p" v-if="coupon_state==3">还差￥19.2可减20</p> -->
                <!-- </li> -->
                <!-- 实际价格 -->
                <li class="shop_order_li price_li">
                <div class="price">
                        <p class="shop_order_left settlement_p">商品实付</p>
                        <!-- 商品总价+优惠券 -->
                        <p class="shop_order_right settlement_p price_p">￥{{order_data.Order_BuyTotalCash}}</p>
                </div>
                <div class="price">
                        <p class="shop_order_left settlement_p">运费</p>
                        <p class="shop_order_right settlement_p price_p">￥{{order_data.Order_PostAge}}</p>
                </div>
                </li>
                <!-- 总价 -->
                <li class="shop_order_li total_money_li">
                    <p class="shop_order_right total_money">合计:<span>￥{{(parseFloat(order_data.Order_BuyTotalCash)+parseFloat(order_data.Order_PostAge)).toFixed(2)}}</span></p>
                </li>
            </ul>


            <!-- 支付方式 -->
            <div class="payment_box">
                <ul class="payment_ul">
                    <!-- 微信 -->
                    <li class="payment_li WeChat_li">
                        <div class="payment_left">
                            <!-- <img class="payment_left_img" src="../../assets/images/icon/WeChat.png" alt=""> -->
                            <div class="left_right">
                                <p class="left_right_payment recommend_label">微信支付</p>
                                <p class="left_right_p">亿万用户的选择，更快更安全</p>
                            </div>
                        </div>
                        <span class="payment_right payment_right_select"></span>
                    </li>
                    <!-- 支付宝 -->
                    <!-- <li class="payment_li">
                        <div class="payment_left">
                        <img class="payment_left_img" src="../../assets/images/icon/Alipay.png" alt="">
                        <p class="payment_left_p">支付宝支付</p>
                        </div>
                        <span class="payment_right payment_right_unselect"></span>
                    </li> -->
                    <!-- 货到付款 -->
                    <!-- <li class="payment_li">
                        <div class="payment_left">
                            <p class="payment_left_p Under_line">货到付款</p>
                            <p class="payment_left_p Under_line_p">需付5元手续费，仅支持500元以下订单</p>
                        </div>
                        <span class="payment_right payment_right_unselect"></span>
                    </li> -->
                </ul>
            </div>

        </div>


        <!-- 支付 -->
        <div class="payment_bot">
            <div class="payment_bot_left">
                <p>付款:<span>￥{{(parseFloat(order_data.Order_BuyTotalCash)+parseFloat(order_data.Order_PostAge)).toFixed(2)}}</span></p>
            </div>
            <div class="payment_bot_right">去支付</div>
        </div>


    </div>
</template>


<style>
    @import '../../../assets/css/purchase_order.css';
</style>


<script>
import axios from 'axios';
import 'swiper/dist/css/swiper.css'    //在全局没引入，这里记得要！
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import vuepopup from '@/components/popup.vue'	//引入弹出框组件

export default {
    data(){
        return{
            orderid:'',//url 传过来的订单临时ID
            order_data:'',//临时订单数据
            temporary_order_time:'',//临时订单的时间

            // 可用优惠券状态 true为有优惠券，false为没有优惠券
            coupon_state:1,
            coupon_index:null,//选择优惠券返回来的index
            coupon_money:0,//优惠金额

            receiving_address:'',//收货地址
           
            //图片接口
            big_img:localStorage.big_img,//大
            middle_img:localStorage.middle_img,//中
            small_img:localStorage.small_img, //小

           payment_shop_list_swiper:{
                observer:true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                slidesPerView: 4.2,
                spaceBetween: 5,
                freeMode: true,
           },
        }
    },
  components: {
    vuepopup,
    swiper,
    swiperSlide
  },
  created:function(){
    this.orderid = this.$route.query.order_id;
    this.coupon_index = this.$route.query.coupon_index;
    // console.log(this.coupon_index)
    // console.log(localStorage.user_id)
    console.log(this.orderid)

    // 获取临时订单数据
   this.get_orderdata();

    //获取用户的收货地址
    this.get_user_address()

    // 获取优惠券
    // this.get_coupon_number()
  },
  methods:{
      get_orderdata(){
        var _this = this;
        axios.get(localStorage.weburl + "/WorkOrder/GetOrderTemporaryInfo?OrderID=" + this.orderid).then(res => {
            console.log(res.data.Return_Data);
            _this.order_data = res.data.Return_Data
            // 订单时间
            _this.temporary_order_time = (res.data.Return_Data.Order_CreateTime).replace("T"," ");
            _this.temporary_order_time = (_this.temporary_order_time).slice(0,(_this.temporary_order_time).lastIndexOf("."))
        })
        .catch(error => {
            console.log(error);
        }); //查询失败返回的值
      },
      
      get_user_address(){
        //   console.log(localStorage.user_id)
           var _this = this;
           var addressID = this.$route.query.addressID;
        //    console.log(addressID)
           if(addressID==""||addressID==undefined){
                axios.get(localStorage.weburl + "/WorkMembers/GetAddressByMembersID?MembersID=" + localStorage.user_id).then(res => {
                    // console.log(res.data.Return_Data.PageData);
                    _this.receiving_address = res.data.Return_Data.PageData
                    $.each(_this.receiving_address,function(i,item){
                        if(item.MembersAddress_Mark == 1){
                            _this.receiving_address = item
                            console.log(_this.receiving_address)
                            return;
                        }
                    })
                })
                .catch(error => {
                    console.log(error);
                }); //查询失败返回的值
           }else{
               axios.get(localStorage.weburl + "/WorkMembers/GetMembersAddressByID?MembersID=" + localStorage.user_id+"&AddressID="+addressID).then(res => {
                    console.log(res.data.Return_Data);
                    _this.receiving_address = res.data.Return_Data
                })
                .catch(error => {
                    console.log(error);
                }); //查询失败返回的值
           }
            
      },

      get_coupon_number(){
           var _this = this;
            axios.get(localStorage.weburl + "/GetDiscountCouponList?page=0&UseState=1&MembersID=" + localStorage.user_id).then(res => {
                // console.log(res.data.PageData);
                if((res.data.PageData).length>0){
                    _this.coupon_state = 1
                    var coupon_data = res.data.PageData[_this.coupon_index]
                    console.log(coupon_data)
                    // 选择的优惠券是全站
                    if(coupon_data.UseType==1&&coupon_data.MinAmount<_this.order_data.Order_BuyTotalCash){
                         _this.coupon_money = coupon_data.Denomination
                    }else if(coupon_data.UseType==1&&coupon_data.MinAmount>_this.order_data.Order_BuyTotalCash) {
                        let popup = this.$refs.popup
                        popup.open({
                            type:3,
                            popup_information:'无法使用此优惠券',
                            whether_show:true,
                            long:true,
                        })
                    }
                }else{
                    _this.coupon_state = 0
                }
            })
            .catch(error => {
                console.log(error);
            }); //查询失败返回的值
      },
    // 返回上一页
    back(){
        this.$router.go(-1)
    },
  }
}

</script>