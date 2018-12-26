<template>
  <!-- 个人中心   我的优惠券 -->
  <div>
    <header class="coupon_header">
      <div class="back" @click="back()">
        <img src="../../../assets/images/icon/back.png" alt>
      </div>
      <p class="header_cen">我的优惠券</p>
    </header>

    <!-- 顶部切换 -->
    <div class="top_switch">
      <p
        class="top_switch_p"
        :class="{top_switch_p_select:switch_not}"
        @click="switch_option(1)"
      >未使用</p>
      <p
        class="top_switch_p"
        :class="{top_switch_p_select:switch_already}"
        @click="switch_option(0)"
      >已失效</p>
    </div>

    <div class="con nobottom coupon_con">
      <!-- 优惠券 -->
      <div class="coupon_box" v-for="(discount,index) in this.data" :key="discount.Index">
        <div class="coupon_information" @click="return_coupon_index(index)">
          <p
            class="coupon_p"
            :class="{Invalid:switch_already}"
            v-cloak
          >{{discount.DiscountCouponName}}</p>
          <p
            class="coupon_condition"
            :class="{Invalid:switch_already}"
            v-if="discount.UseType!=1"
            v-cloak
          >仅限{{discount.TargetName}}使用</p>
          <p
            class="coupon_condition"
            :class="{Invalid:switch_already}"
            v-if="discount.UseType==1"
            v-cloak
          >{{discount.TargetName}}可用</p>
          <p
            class="coupon_term"
            :class="{Invalid:switch_already}"
            v-cloak
          >有效期：{{discount.BeginTime}} - {{discount.EndTime}}</p>

          <p class="coupon_money" :class="{Invalid:switch_already}" v-cloak>
            ￥
            <span>{{discount.Denomination}}</span>
          </p>
        </div>
        <router-link class="coupon_a" to v-if="switch_not">
          <p class="coupon_a_p" v-cloak>满{{discount.Discount}}元减{{discount.Denomination}}元</p>
          <div class="coupon_a_see">
            <p class="see_shop">查看可用商品</p>
            <img class="see_shop_img" src="../../../assets/images/icon/coupon_see.png" alt>
          </div>
        </router-link>
        <router-link class="coupon_a" to v-if="switch_already">
          <p
            class="coupon_a_p"
            :class="{Invalid:switch_already}"
            v-cloak
          >满{{discount.Discount}}元减{{discount.Denomination}}元</p>
          <p class="see_shop Invalid" v-if="discount.UseState==2">已使用</p>
          <p class="see_shop Invalid" v-if="discount.UseState==3">已过期</p>
        </router-link>
      </div>

    </div>
  </div>
</template>



<style>
@import "../../../assets/css/coupon.css";
</style>


<script>
import axios from "axios";

export default {
  data() {
    return {
      not_use: "",
      already: "",
      data: "",
      switch_not: 1, //未使用
      switch_already: 0, //已使用

      order_id:'',//临时订单id
    };
  },
  components: {},
  created: function() {
    this.order_id = this.$route.query.temporary_order_id;
    // console.log(this.order_id)
    this.get_DiscountCouponList(1);
    this.data = this.not_use;
  },
  methods: {
    get_DiscountCouponList(type) {
      var _this = this;
      axios
        .get(
          localStorage.weburl +
            "/GetDiscountCouponList?page=0&MembersID=" +
            localStorage.user_id +
            "&UseState=" +
            type
        )
        .then(res => {
          //axios.get("http://192.168.2.180/WorkMembers/GetCollectionInfoByID?page=0").then(res => {
          var infotemp = res.data.PageData;
          console.log("-------");
          console.log(type);
          console.log(infotemp);
          console.log("-------");
          if (type == 3) {
            if (infotemp.length > 0) {
              infotemp.forEach(element => {
                _this.already.push(element);
              });
            }
            _this.data=_this.already;
          } else {
            if (type == 1) {
              _this.not_use = infotemp;
              _this.data=_this.not_use;
            } else {
              _this.already = infotemp;
            }
          }
          if (type == 2) {
            _this.get_DiscountCouponList(3);
          }
          //console.log(_this.data);
        })
        .catch(error => {
          console.log(error);
        }); //查询失败返回的值
    },

    // 返回上一页
    back() {
      this.$router.go(-1);
    },
    switch_option: function(n) {
      if (n) {
        this.switch_not = 1;
        this.switch_already = 0;
        if (this.not_use != undefined && this.not_use != "") {
          this.data = this.not_use;
        } else {
          this.get_DiscountCouponList(1);
        }
      } else {
        this.switch_not = 0;
        this.switch_already = 1;
        if (this.already != undefined && this.already != "") {
          this.data = this.already;
        } else {
          this.get_DiscountCouponList(2);
        }
      }
    },

    // 选择使用那个  优惠券
    return_coupon_index(index){
      if(this.switch_already == 0){
          this.$router.push({path: '/shopcar/shopcar_html/purchase_order', query: {order_id: this.order_id,coupon_index:index}});
      }
    
    }, 
  }
};
</script>