<template>
  <!-- 底部导航   个人中心 -->
  <div>
    <!-- 顶部 -->
    <div class="top_back">
      <!-- 顶部  设置 客服 消息 -->
      <div class="top_title">
        <!-- 设置 -->
        <router-link class="set" to="/my/my_html/set_up">
          <img src="../../assets/images/icon/set.png" alt>
        </router-link>
        <div class="top_right">
          <!-- 客服 -->
          <router-link class="service" to="/my/my_html/service">
            <img src="../../assets/images/icon/service.png" alt>
          </router-link>
          <!-- 消息 -->
          <router-link class="news" to="/my/my_html/message_center">
            <img src="../../assets/images/icon/news.png" alt>
            <!-- 消息提示 -->
            <span class="news_Tips"></span>
          </router-link>
        </div>
      </div>

      <!-- 头像 框 -->
      <div class="box">
        <div class="inner_box">
          <!-- 头像 -->
          <div class="inner_top">
            <div class="top_news">
              <router-link class="news_a" to="/my/my_html/account_security">
                <div class="portrait_box">
                  <img :src="this.UserLogoImgUrl" alt class="portrait">
                </div>
                <p class="name">{{this.UserName}}</p>
              </router-link>
            </div>
            <div class="vip">
              <router-link class="vip_a" to>
                <img src="../../assets/images/icon/VIP.png" alt>
              </router-link>
            </div>
          </div>
          <!-- 收藏 优惠 足迹 积分 -->
          <div class="inner_bot">
            <ul class="bot_ul">
              <li class="bot_li">
                <router-link class="bot_a" to="/my/my_html/collection">
                  <p class="bot_num">{{this.UserOperation.CollectionNum}}</p>
                  <p class="bot_name">收藏</p>
                </router-link>
              </li>
              <li class="bot_li">
                <router-link class="bot_a" to="/my/my_html/coupon">
                  <p class="bot_num">{{this.UserOperation.DiscountCouponNum}}</p>
                  <p class="bot_name">优惠券</p>
                </router-link>
              </li>
              <li class="bot_li">
                <router-link class="bot_a" to="/my/my_html/footprint">
                  <p class="bot_num">{{this.UserOperation.FootprintNum}}</p>
                  <p class="bot_name">足迹</p>
                </router-link>
              </li>
              <li class="bot_li">
                <router-link class="bot_a" to>
                  <p class="bot_num">{{this.UserOperation.IntegralNum}}</p>
                  <p class="bot_name">积分</p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 我的订单 -->
    <div class="block">
      <!-- 头部 -->
      <div class="block_title">
        <p class="block_title_left_p">我的订单</p>
        <div class="block_title_right">
          <router-link class="block_title_a" to="/my/my_html/order?type=0">
            <p class="block_title_right_p">全部订单</p>
            <img class="block_title_right_img" src="../../assets/images/icon/forward1.png" alt>
          </router-link>
        </div>
      </div>
      <!-- 内容 -->
      <div class="block_con">
        <ul class="block_ul">
          <!-- 待付款 -->
          <li class="block_li">
            <router-link class="block_a" to="/my/my_html/order?type=1">
              <div class="block_img_box">
                <img
                  class="block_img pending_payment"
                  src="../../assets/images/icon/pending_payment.png"
                  alt
                >
                <span class="number" v-if="this.CashOrder.Wait_Pay>0">{{this.CashOrder.Wait_Pay}}</span>
              </div>
              <p class="block_p">待付款</p>
            </router-link>
          </li>
          <!-- 待收货 -->
          <li class="block_li">
            <router-link class="block_a" to="/my/my_html/order?type=2">
              <div class="block_img_box">
                <img
                  class="block_img collect"
                  src="../../assets/images/icon/goods_to_be_received.png"
                  alt
                >
                <span class="number" v-if="(this.CashOrder.Wait_Send+this.CashOrder.Wait_Receive)>0">{{this.CashOrder.Wait_Send+this.CashOrder.Wait_Receive}}</span>
              </div>
              <p class="block_p">待收货</p>
            </router-link>
          </li>
          <!-- 待评价 -->
          <!-- <li class="block_li">
            <router-link class="block_a" to="/my/my_html/order?type=3">
              <div class="block_img_box">
                <img
                  class="block_img evaluate"
                  src="../../assets/images/icon/to_be_evaluated.png"
                  alt
                >
                <span class="number" v-if="this.CashOrder.Received<0">0</span>
              </div>
              <p class="block_p">待评价</p>
            </router-link>
          </li> -->
          <!-- 退款售后 -->
          <li class="block_li">
            <router-link class="block_a" to>
              <div class="block_img_box">
                <img
                  class="block_img refund"
                  src="../../assets/images/icon/refund_after_sale.png"
                  alt
                >
              </div>
              <p class="block_p">退款/售后</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- 功能 -->
    <div class="block last_block">
      <!-- 头部 -->
      <div class="block_title">
        <p class="block_title_left_p">常用功能</p>
      </div>
      <!-- 内容 -->
      <div class="block_con">
        <ul class="block_ul function_ul">
          <!-- 待付款 -->
          <li class="block_li function_li">
            <router-link class="block_a function_a" to>
              <img class="block_img function_img" src="../../assets/images/icon/integral.png" alt>
              <p class="block_p">积分兑换</p>
            </router-link>
          </li>
          <!-- 待收货 -->
          <li class="block_li function_li">
            <router-link class="block_a function_a" to="/my/my_html/task_center">
              <img class="block_img function_img" src="../../assets/images/icon/task.png" alt>
              <p class="block_p">任务中心</p>
            </router-link>
          </li>
          <!-- 待评价 -->
          <li class="block_li function_li">
            <router-link class="block_a function_a" to>
              <img class="block_img function_img" src="../../assets/images/icon/sign_in.png" alt>
              <p class="block_p">每日签到</p>
            </router-link>
          </li>
          <!-- 退款售后 -->
          <li class="block_li function_li">
            <router-link class="block_a function_a" to>
              <img class="block_img function_img" src="../../assets/images/icon/luck_draw.png" alt>
              <p class="block_p">幸运抽奖</p>
            </router-link>
          </li>
        </ul>
        <ul class="block_ul function_ul">
          <!-- 待付款 -->
          <li class="block_li function_li">
            <router-link class="block_a function_a" to>
              <img class="block_img function_img" src="../../assets/images/icon/history.png" alt>
              <p class="block_p">购买历史</p>
            </router-link>
          </li>
          <!-- 待收货 -->
          <li class="block_li function_li">
            <router-link class="block_a function_a" to="/my/my_html/Invitation">
              <img class="block_img function_img" src="../../assets/images/icon/invitation.png" alt>
              <p class="block_p">邀请有礼</p>
            </router-link>
          </li>
          <!-- 待评价 -->
          <li class="block_li function_li">
            <router-link class="block_a function_a" to>
              <img class="block_img function_img" src="../../assets/images/icon/orchard.png" alt>
              <p class="block_p">我的果园</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
@import "../../assets/css/my.css";
</style>



<script>
import axios from "axios";
import bus from "../../assets/js/bus.js"; //非组件传值

export default {
  data() {
    return {
      UserName: "",
      UserLogoImgUrl: "",
      UserOperation: "",
      CashOrder:"",

      big_img: localStorage.big_img, //大
      middle_img: localStorage.middle_img, //中
      small_img: localStorage.small_img //小
    };
  },
  created: function() {
    this.get_UserInfo();
    this.get_UserOperationInfo();
    this.get_CashOrder();

    // 到这个页面就把 Tabbar 组件 的 page 传过去，改变底部导航的选择状态，不然返回时，选择状态一直带首页
    this.change_bottom_selection();
  },
  mounted() {},
  methods: {
    // 到这个页面就把 Tabbar 组件 的 page 传过去，改变底部导航的选择状态，不然返回时，选择状态一直带首页
    change_bottom_selection: function() {
      bus.$emit("change_selection", 4);
    },
    get_UserInfo() {
      var _this = this;
      axios.get(localStorage.weburl + "/WorkMembers/GetMembersByID?MembersID=" + localStorage.user_id).then(res => {
      //axios.get("http://192.168.2.180/WorkMembers/GetMembersByID?MembersID=" + localStorage.user_id).then(res => {
          var ReservationInfo = res.data.Return_Data;
          console.log(ReservationInfo);
          if (
            ReservationInfo.Members_NikeName == "" ||
            ReservationInfo.Members_NikeName == null
          ) {
            if (
              ReservationInfo.WeiXin_Name == "" ||
              ReservationInfo.WeiXin_Name == null
            ) {
              _this.UserName = "昵称";
            } else {
              _this.UserName = ReservationInfo.WeiXin_Name;
            }
          } else {
            _this.UserName = ReservationInfo.Members_NikeName;
          }

          if (
            ReservationInfo.Members_HeadPhoto == "" ||
            ReservationInfo.Members_HeadPhoto == null
          ) {
            if (
              ReservationInfo.Members_OtherHead == "" ||
              ReservationInfo.Members_OtherHead == null
            ) {
              _this.UserLogoImgUrl = _this.small_img+"/../user/userhad.png";
            } else {
              _this.UserLogoImgUrl = ReservationInfo.Members_OtherHead;
            }
          } else {
            _this.UserLogoImgUrl =
              _this.small_img + ReservationInfo.Members_HeadPhoto;
          }
        })
        .catch(error => {
          //console.log(error);
        }); //查询失败返回的值
    },
    get_UserOperationInfo() {
      var _this = this;
      // console.log(localStorage.user_id);
      axios.get(localStorage.weburl + "/WorkMembers/GetOperationInfo?MembersID=" + localStorage.user_id).then(res => {
      //axios.get("http://192.168.2.180/WorkMembers/GetOperationInfo?MembersID=" + localStorage.user_id).then(res => {
          _this.UserOperation = res.data.Return_Data;
          //console.log(_this.UserOperation);
        })
        .catch(error => {
          //console.log(error);
        }); //查询失败返回的值
    },
    get_CashOrder() {
      var _this = this;
      axios.get(localStorage.weburl + "/WorkOrder/GetCashOrder?MembersID=" + localStorage.user_id).then(res => {
      //axios.get("http://192.168.2.180/WorkOrder/GetCashOrder?MembersID=" + localStorage.user_id).then(res => {
          _this.CashOrder = res.data.Return_Data;
          //console.log(_this.CashOrder);
        })
        .catch(error => {
          console.log(error);
        }); //查询失败返回的值
    }
  }
};
</script>