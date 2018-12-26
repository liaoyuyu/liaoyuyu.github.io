<template>
  <!-- 个人中心  订单 -->
  <div>
    <header class="order_header">
      <div class="back" @click="back()">
        <img src="../../../assets/images/icon/back.png" alt>
      </div>
      <p class="header_cen">我的订单</p>
    </header>

    <!-- 订单导航 -->
    <div class="order_nav">
      <ul class="order_ul">
        <li class="order_li order_nav_select" @click="click_nav('0')">全部</li>
        <li class="order_li" @click="click_nav('1')">待付款</li>
        <li class="order_li" @click="click_nav('2')">已付款</li>
        <!-- <li class="order_li" @click="click_nav(3)">待评价</li> -->
        <!-- <li class="order_li" @click="click_nav('4')">已发货</li>
        <li class="order_li" @click="click_nav('5')">已签收</li>
        <li class="order_li" @click="click_nav('7')">已取消</li> -->
      </ul>
    </div>

    <!-- 内容 -->
    <div class="con order_con_box nobottom">
      <!-- 隔阂 -->
      <div class="interval"></div>
      <div class="interval"></div>

      <!-- 订单数据 盒子 -->
      <div class="order_box" v-for="order in this.orderdata" :key="order.index">
        <!-- 每个订单的盒子 -->
        <div class="order_list_box">
          <!-- 头部 -->
          <div class="order_title">
            <p class="order_order_number">订单编号：{{order.Order_ID}}</p>
            <p class="order_state" v-if="order.Order_Mark==10">待付款</p>
            <p class="order_state" v-if="order.Order_Mark==11">已付款</p>
            <p class="order_state" v-if="order.Order_Mark==12">已发货</p>
            <p class="order_state" v-if="order.Order_Mark==13">已签收</p>
            <p class="order_state" v-if="order.Order_Mark==14">已拒绝</p>
            <p class="order_state" v-if="order.Order_Mark==19">已取消</p>
            <p class="order_state" v-if="order.Order_Mark==20">退货申请中</p>
            <p class="order_state" v-if="order.Order_Mark==21">退货已确认</p>
            <p class="order_state" v-if="order.Order_Mark==22">退货已发货</p>
            <p class="order_state" v-if="order.Order_Mark==23">退货已签收</p>
            <p class="order_state" v-if="order.Order_Mark==24">退货拒绝</p>
            <p class="order_state" v-if="order.Order_Mark==29">退货取消</p>
          </div>
          <!-- 商品内容 -->
          <div class="order_con" v-for="orderli in order.OrderList" :key="orderli.index">
            <div class="Recommend_shop">
              <router-link class="Recommend_shop_a" to>
                <div class="Recommend_shop_left">
                  <img :src="middle_img+orderli.Image_Url" alt>
                </div>
                <div class="Recommend_shop_right">
                  <p class="Recommend_shop_name">{{orderli.Product_Name}}</p>
                  <div class="Recommend_shop_p">
                    <p>{{orderli.ProductSku_PriceIntegral}}</p>
                  </div>
                  <div class="recommend_money">
                    <span class="new_money">¥{{orderli.ProductSku_PriceCash|numFilter}}</span>
                    <span class="old_money">￥{{orderli.ProductSku_PriceCash|numFilter}}</span>
                  </div>
                  <!-- <img class="Recommend_shop_img json_shop_img" src="../../../assets/images/icon/json_shop.png" alt=""> -->
                  <div class="order_number">x{{orderli.OrderList_Amount}}</div>
                </div>
              </router-link>
            </div>
          </div>
          <!-- 顶部 -->
          <div class="order_bottom">
            <p class="money">
              应付：
              <span>￥{{order.Order_BuyTotalCash}}</span>
            </p>
            <router-link
              class="state"
              :to="{path:'/shopcar/shopcar_html/purchase_order',query:{order_id:order.Order_ID}}"
              v-if="order.Order_Mark==10"
            >待付款</router-link>
            <router-link
              class="state"
              :to="{path:'order_details_collect',query:{order_id:order.Order_ID}}"
              v-if="order.Order_Mark==11"
            >已付款</router-link>
            <router-link
              class="state"
              :to="{path:'order_details_collect',query:{order_id:order.Order_ID}}"
              v-if="order.Order_Mark==12"
            >已发货</router-link>
            <router-link
              class="state"
              :to="{path:'order_details_collect',query:{order_id:order.Order_ID}}"
              v-if="order.Order_Mark==13"
            >已签收</router-link>
            <router-link
              class="state"
              :to="{path:'order_details_collect',query:{order_id:order.Order_ID}}"
              v-if="order.Order_Mark==14"
            >已拒绝</router-link>
            <router-link
              class="state"
              :to="{path:'order_details_collect',query:{order_id:order.Order_ID}}"
              v-if="order.Order_Mark==19"
            >已取消</router-link>
            <router-link
              class="state"
              :to="{path:'order_details_collect',query:{order_id:order.Order_ID}}"
              v-if="order.Order_Mark==20"
            >退货申请中</router-link>
            <router-link
              class="state"
              :to="{path:'order_details_collect',query:{order_id:order.Order_ID}}"
              v-if="order.Order_Mark==21"
            >退货已确认</router-link>
            <router-link
              class="state"
              :to="{path:'order_details_collect',query:{order_id:order.Order_ID}}"
              v-if="order.Order_Mark==22"
            >退货已发货</router-link>
            <router-link
              class="state"
              :to="{path:'order_details_collect',query:{order_id:order.Order_ID}}"
              v-if="order.Order_Mark==23"
            >退货已签收</router-link>
            <router-link
              class="state"
              :to="{path:'order_details_collect',query:{order_id:order.Order_ID}}"
              v-if="order.Order_Mark==24"
            >退货拒绝</router-link>
            <router-link
              class="state"
              :to="{path:'order_details_collect',query:{order_id:order.Order_ID}}"
              v-if="order.Order_Mark==29"
            >退货取消</router-link>
            <!-- <router-link class="state" to="">待评价</router-link> -->
            <!-- <router-link class="state" to="">查看详情</router-link> -->
          </div>
        </div>
      </div>

      <!-- 底线 -->
      <div class="baseline">
        <span></span>
        <p>我是有底线的</p>
        <span></span>
      </div>
    </div>
  </div>
</template>



<style>
@import "../../../assets/css/order.css";
</style>


<script>
import axios from "axios";
import $ from "jquery";

export default {
  data() {
    return {
      querytype: 0,
      orderdata: "", //当前显示数据
      alldata: "", //所有数据
      waitpaydata: "", //待付款数据
      waitgetdata: "", //待收货数据
      big_img: localStorage.big_img, //大
      middle_img: localStorage.middle_img, //中
      small_img: localStorage.small_img //小
    };
  },
  components: {},
  created: function() {
    console.log(localStorage.user_id)
  },
  mounted: function() {
    this.get_url_index();
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位

      let realVal = Number(value).toFixed(2); // num.toFixed(2)获取的是字符串

      return Number(realVal);
    }
  },
  methods: {
    get_orderdata(gettype,index) {
      var _this = this;
      var collection = new URLSearchParams();
      collection.append("MembersID", localStorage.user_id);
      collection.append("PageIndex", 0);
      switch (gettype) {
        case "0":
          collection.append("Mark", 9);
          break;
        case "1":
          collection.append("Mark", 10);
          break;
        case "2":
          collection.append("Mark", 11);
          break;
        case "3":
          //collection.append("Mark", 13);
          break;
        case "4":
          collection.append("Mark", 12);
          break;
        default:
          break;
      }
      axios
        .post(localStorage.weburl + "/WorkOrder/GetOrderList", collection)
        .then(res => {
          if (res.data.Return_ID == 0) {
            var ordertemp = res.data.Return_Data.PageData;
            if (gettype == 0) {
              _this.alldata = ordertemp;
              _this.orderdata=ordertemp;
            } else if (gettype == 1) {
              _this.waitpaydata = ordertemp;
              _this.orderdata=ordertemp;
            } else if (gettype == 2) {
              _this.waitgetdata = ordertemp;
              this.get_orderdata('4');
            } else if (gettype == 3) {
            } else {
              ordertemp.forEach(element => {
                _this.waitgetdata.push(element);
              });
              _this.orderdata= _this.waitgetdata;
            }
            if(index==0){
                if(gettype==4)
                {
                    _this.click_nav(2);
                }
                else
                {
                    _this.click_nav(gettype);
                }
            }
            console.log(ordertemp);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    // 返回上一页
    back() {
      this.$router.go(-1);
    },
    // 获取链接地址传过来的值
    get_url_index: function() {
      this.querytype = this.$route.query.type;
      this.get_orderdata(this.querytype,0);
    },
    // 切换导航样式 和 数据
    click_nav: function(index) {
      for (var i = 0; i < $(".order_li").length; i++) {
        $(".order_li")
          .eq(i)
          .removeClass("order_nav_select");
      }
      $(".order_li")
        .eq(index)
        .addClass("order_nav_select");


      switch (index) {
        case "0":
          if (this.alldata == undefined || this.alldata.length == 0) {
            this.get_orderdata(index,1);
          } else {
            this.orderdata = this.alldata;
          }
          break;
        case "1":
          if (this.waitpaydata == undefined || this.waitpaydata.length == 0) {
            this.get_orderdata(index,1);
          } else {
            this.orderdata = this.waitpaydata;
          }
          break;
        case "2":
          if (this.waitgetdata == undefined || this.waitgetdata.length == 0) {
            this.get_orderdata(index,1);
          } else {
            this.orderdata = this.waitgetdata;
          }
          break;
        // case "3":
        //   this.orderdata = this.alldata;
        //   break;
        case "4":
          if (this.waitgetdata == undefined || this.waitgetdata.length == 0) {
            this.get_orderdata(2,1);
          } else {
            this.orderdata = this.waitgetdata;
          }
          break;
        default:
          break;
      }
    }
  }
};
</script>