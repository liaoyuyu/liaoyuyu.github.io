<template>
    <!-- 订单   订单已取消详情 -->
    <div>
        <header class="order_details_header">
             <div class="back" @click="back()"><img src="../../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">产品详情</p>
        </header>

        <!-- 内容 -->
        <div class="con">
            <!-- 顶部  图片 已取消 -->
            <div class="cancel padd">
                <img class="cancel_img" src="../../../assets/images/icon/cancel.png" alt="">
                <p class="cancel_p">订单已取消</p>
            </div>

            <!-- 地址 -->
            <div class="address padd">
                <div class="address_left">
                    <img src="../../../assets/images/icon/address.png" alt="">
                </div>
                <div class="address_right">
                    <p class="address_p">收货信息: 邓晓菁 15520086360</p>
                    <p class="address_p">重庆  重庆市江北区建新南路16号西普大厦18-5</p>
                </div>
            </div>

            <!-- 商品 -->
            <div class="cancel_shop_box padd">
                <div class="cancel_shop_title">
                    <p class="cancel_shop_title_left">商品信息</p>
                    <p class="cancel_shop_title_right">共3件商品</p>
                </div>
                <div class="order_details_cancel_shop_box">
                    <div class="Recommend_shop">
                        <router-link class="Recommend_shop_a" to="">
                            <div class="Recommend_shop_left">
                                <img src="../../../assets/images/img/broadcast_img.jpg" alt="">
                            </div>
                            <div class="Recommend_shop_right">
                                <p class="Recommend_shop_name">散养麻鸭土鸭子老水鸭</p>
                                <div class="Recommend_shop_p">
                                    <p>正宗散养土鸭两年老鸭子</p>
                                </div>
                                <div class="recommend_money">
                                    <span class="new_money">¥32.8</span>
                                    <span class="old_money">￥254</span>
                                </div>
                                <!-- <img class="Recommend_shop_img json_shop_img" src="../../../assets/images/icon/json_shop.png" alt=""> -->
                            </div>
                        </router-link>
                    </div>

                    <div class="Recommend_shop">
                        <router-link class="Recommend_shop_a" to="">
                            <div class="Recommend_shop_left">
                                <img src="../../../assets/images/img/broadcast_img.jpg" alt="">
                            </div>
                            <div class="Recommend_shop_right">
                                <p class="Recommend_shop_name">散养麻鸭土鸭子老水鸭</p>
                                <div class="Recommend_shop_p">
                                    <p>正宗散养土鸭两年老鸭子</p>
                                </div>
                                <div class="recommend_money">
                                    <span class="new_money">¥32.8</span>
                                    <span class="old_money">￥254</span>
                                </div>
                                <!-- <img class="Recommend_shop_img json_shop_img" src="../../../assets/images/icon/json_shop.png" alt=""> -->
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>


            <!-- 订单信息 -->
            <div class="order_information">
                <div class="order_information_title">订单信息</div>
                <ul class="order_information_ul">
                    <li class="order_information_li">
                        <p>订单编号:   <span class="order_code" id="order_code">DD1084564139854</span></p>
                        <!-- vue 双向绑定，execCommand只能复制input的可编辑状态 -->
                        <!-- <input id="order_code_input" type="text" value="DD1084564139854"> -->
                        <div class="copy">复制</div>
                    </li>
                    <li class="order_information_li">
                        <p>创建时间:  2018-08-06  15:15:24  </p>
                    </li>
                </ul>
            </div>


            <!-- 结算信息 -->
            <div class="Settlement padd">
                <p class="Settlement_title">结算信息</p>
                <ul class="Settlement_ul">
                    <li class="Settlement_li">
                        <p class="Settlement_p">运费</p>
                        <p class="Settlement_money">￥0.00</p>
                    </li>
                    <li class="Settlement_li">
                        <p class="Settlement_p">优惠券</p>
                        <p class="Settlement_money">￥0.00</p>
                    </li>
                    <li class="Settlement_li">
                        <p class="Settlement_p">积分抵扣</p>
                        <p class="Settlement_money">￥0.00</p>
                    </li>
                    <li class="Settlement_li">
                        <p class="Settlement_p">活动优惠</p>
                        <p class="Settlement_money">￥0.00</p>
                    </li>
                </ul>
            </div>
            
            <!-- <div class="interval"></div>
            <div class="interval"></div> -->
            
        </div>

        <!-- 底部 -->
        <div class="footer">
            <span class="footer_span">删除订单</span>
            <span class="footer_span">重新购买</span>
        </div>

    </div>
</template>



<style>
    @import '../../../assets/css/order_details_cancel.css';
</style>


<script>
import axios from 'axios';

export default {
    data(){
        return{
            
        }
    },
  components: {

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