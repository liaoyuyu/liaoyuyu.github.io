<template>
    <!-- 订单  待收货详情 -->
    <div>
        <header class="order_details_header">
            <div class="back" @click="back()"><img src="../../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">订单详情</p>
        </header>

        <!-- 内容 -->
        <div class="con order_details_collect_con">
            <!-- 顶部 -->
            <div class="order_details_top">
                <img src="" alt="">
            </div>

            <!-- 送货信息  地址 -->
            <div class="logistics_box">
                <!-- 物流 -->
                <p class="logistics">【重庆市】已签收收款人是学田湾新世纪百货菜鸟驿站代签<span>2018-08-06  15:15:24</span></p>
                <!-- 地址 -->
                <div class="address">
                    <div class="address_left">
                        <img src="../../../assets/images/icon/address.png" alt="">
                    </div>
                    <div class="address_right">
                        <p class="address_p">收货信息: 邓晓菁 15520086360</p>
                        <p class="address_p">重庆  重庆市江北区建新南路16号西普大厦18-5</p>
                    </div>
                </div>
            </div>
            <div class="interval"></div>
            
            <!-- 商品 -->
            <div class="order_details_collect_shop_box">
                <router-link class="order_details_collect_shop_a" to="">
                    <div class="shop_a_left">
                        <img src="../../../assets/images/img/banner_img.png" alt="">
                    </div>
                    <div class="shop_a_right">
                        <p class="shop_name">散养土鸡鸡蛋</p>
                        <div class="shop_p">
                            <p>正宗散养土鸡蛋优质蛋白</p>
                        </div>
                        <!-- 标签 -->
                        <div class="Label">
                            <span class="Label_span">七天退换</span>
                        </div>
                        <!-- 数量 -->
                        <p class="order_details_collect_shop_number">x1</p>
                    </div>
                </router-link>
                
                <!-- 退货 -->
                <router-link class="Refund" to="">退换</router-link>
            </div>

            <div class="interval"></div>

            <!-- 价格 -->
            <div class="Price">
                <!-- 总价 -->
                <div class="all_money">
                    <p class="money_p">商品总价</p>
                    <p class="money_Price">￥139.8</p>
                </div>
                <!-- 运费 -->
                <div class="freight">
                    <p class="money_p">运费(快递)</p>
                    <p class="money_Price">￥10</p>
                </div>
                <!-- 订单总价 -->
                <div class="Order_all_money">
                    <p class="money_p">订单总价</p>
                    <p class="money_Price">￥149.8</p>
                </div>
                <!-- 实付款 -->
                <div class="payment">
                    <p class="money_p">实付款</p>
                    <p class="money_Price">合计:<span>￥149.8</span></p>
                </div>
            </div>

            <div class="interval"></div>


            <!-- 订单信息 -->
            <div class="order_information">
                <div class="order_information_title">订单信息</div>
                <ul class="order_information_ul">
                    <li class="order_information_li">
                        <p>淘厨汇积分:  获得10点积分</p>
                    </li>
                    <li class="order_information_li">
                        <p>订单编号:   <span class="order_code" id="order_code">DD1084564139854</span></p>
                        <!-- vue 双向绑定，execCommand只能复制input的可编辑状态 -->
                        <!-- <input id="order_code_input" type="text" value="DD1084564139854"> -->
                        <div class="copy">复制</div>
                    </li>
                    <li class="order_information_li">
                        <p>创建时间:  2018-08-06  15:15:24  </p>
                    </li>
                    <li class="order_information_li">
                        <p>付款时间:  2018-08-06  15:15:24  </p>
                    </li>
                    <li class="order_information_li">
                        <p>发货时间:  2018-08-06  15:15:24  </p>
                    </li>
                </ul>
                <!-- 联系 -->
                <div class="contact">
                    <!-- 卖家 -->
                    <div class="seller">联系卖家</div>
                    <span></span>
                    <!-- 拨打客服 -->
                    <div class="dial_service">拨打客服热线</div>
                </div>
            </div>

        </div>

        <!-- 底部 按钮 -->
        <div class="bot_btn">
            <router-link class="look_logistics" to="">查看物流</router-link>
            <router-link class="extend" to="">延长收货</router-link>
            <router-link class="confirm" to="">确认收货</router-link>
        </div>

    </div>
</template>




<style>
    @import '../../../assets/css/order_details_collect.css';
</style>


<script>
import axios from 'axios';
import $ from 'jquery'

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