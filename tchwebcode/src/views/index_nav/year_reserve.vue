<template>
  <!-- 年货预定 -->
  <div>
    <header class="preferential_recommendation_header">
      <div class="back" @click="back()">
        <img src="../../assets/images/icon/back.png" alt>
      </div>
      <p class="header_cen">年货预定</p>
    </header>

    <div class="con nobottom">
      <!-- 顶部图片 -->
      <div class="top_img year_reserve_tio_img">
          <div class="reserve_scene_p_box">
              <p class="reserve_scene_title">{{TitleName}}</p>
              <p class="reserve_scene_p">{{TitleRmark}}</p>
          </div>
          <img :src="TitleImgUrl" alt="">
      </div>

      <!-- 预定导航 -->
      <div class="reserve_nav_box">
        <div class="reserve_nav_field">
          <swiper class="time_swiper_box" :options="year_swiper" ref="TimeTitle">
            <swiper-slide
              class="reserve_nav_slide"
              :class="classIndex==index?'reserve_nav_slide_select':''"
              v-for="(item,index) in ReservationInfo"
              :key="item.index"
            >
              <!-- class="reserve_nav_slide " :class="TimeToDateTime(item.RType_BenginTime)<=TimeToDateTime(getNowFormatDate())?'reserve_nav_slide_select':''" -->
              <p class="reserve_time">{{item.RType_BenginTime.replace('T',' ')}}</p>
              <p class="reserve_time">{{item.RType_EndTime.replace('T',' ')}}</p>
              <p
                class="reserve_time_p"
                v-if="TimeToDateTime(item.RType_BenginTime)<=TimeToDateTime(getNowFormatDate())"
              >已开抢</p>
              <p
                class="reserve_time_p"
                v-if="TimeToDateTime(item.RType_BenginTime)>TimeToDateTime(getNowFormatDate())"
              >未开抢</p>
            </swiper-slide>
          </swiper>
        </div>

        <!-- 预定 结束时间 -->
        <div class="reserve_end_time">
          <p>距本场结束剩余{{this.timedate}}</p>
        </div>
      </div>

      <!-- 热销榜 -->
      <div class="hot_rankings">
        <div class="hot_rankings_title">热销榜</div>
        <div class="hot_rankings_con">
          <!-- 每个商品 -->
          <div class="Recommend_shop Recommend_shop_list" v-for="product in ResultData" :key="product.Index">
            <router-link
              class="Recommend_shop_a"
              :to="{path:'/detail/product_detailed',query:{product_id:product.Product_ID}}"
            >
              <div class="Recommend_shop_left">
                <img :src="middle_img+product.Product_Info.Image_Url" alt="">
              </div>
              <div class="Recommend_shop_right">
                <p class="Recommend_shop_name">{{product.Product_Info.Product_Name}}</p>
                <div class="Recommend_shop_p Recommend_shop_list_p year_reserve_shop_p">
                  <p>{{product.Product_Info.Product_Explain}}</p>
                </div>
                <div class="recommend_money">
                  <span class="new_money">¥{{(product.Product_Info.Product_Sku[0].Sku_PriceCash * product.Reser_Deposit).toFixed(2)}}</span>
                  <span class="old_money">￥{{product.Product_Info.Product_Sku[0].Sku_PriceCash}}</span>
                </div>
                <!-- 进度条 -->
                <div class="Recommend_shop_right_bot">
                  <div class="progress_bar_box">
                    <div class="progress_bar" :style="{'width': ''+((product.Product_Info.Product_SaleTotal/product.Product_Info.Product_Sku[0].Sku_Stock)*100)+'%'}"></div>
                    <p class="already_orb">已抢{{product.Product_Info.Product_SaleTotal}}件</p>
                    <p class="percentage">{{parseInt((product.Product_Info.Product_SaleTotal/product.Product_Info.Product_Sku[0].Sku_Stock)*100)}}%</p>
                  </div>
                  <div class="immediately_reserve">
                    <p class="immediately_reserve_p">立即预定</p>
                    <img
                      class="immediately_reserve_img"
                      src="../../assets/images/icon/reserve_go.png"
                      alt
                    >
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- 底线 -->
      <div class="baseline">
        <span></span>
        <p>没有更多了哦~</p>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style>
@import "../../assets/css/year_reserve.css";
</style>


<script>
// 括号里写  要用到的方法名字
// import {back} from '../../assets/js/public.js'

import axios from "axios";
import "swiper/dist/css/swiper.css"; //在全局没引入，这里记得要！
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      ReservationInfo: "",
      ResultData: "",
      //图片接口
      big_img: localStorage.big_img, //大
      middle_img: localStorage.middle_img, //中
      small_img: localStorage.small_img, //小
      TitleName: "",
      TitleImgUrl: "",
      TitleRmark: "",
      classIndex: 0,
      timer: "",
      timedate: "",
      // 基地分类
      // banner  swiper
      year_swiper: {
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        slidesPerView: 2.5,
        freeMode: true,
        slideToClickedSlide: true,
        on: {
          click: () => {
            let swiper = this.$refs.TimeTitle.swiper;
            let i = swiper.clickedIndex;
            this.TitleName = this.ReservationInfo[i].RType_Name;
            this.TitleImgUrl = this.big_img+this.ReservationInfo[i].Image_Url;
            this.TitleRmark = this.ReservationInfo[i].RType_Rmark;
            this.classIndex = i;
            this.ResultData = this.ReservationInfo[i].Reservation_Info;
            this.beforeDestroy();
          }
        }
      }
    };
  },
  created: function() {
    this.get_ReservationInfo();
  },
  methods: {
    get_ReservationInfo() {
      var _this = this;
      axios.get(localStorage.weburl+'/Home/GetResterInfo?page=0').then(res => {
      //axios.get("http://192.168.2.180/Home/GetResterInfo?page=0").then(res => {
          _this.ReservationInfo = res.data.Return_Data;
          _this.TitleName = res.data.Return_Data[0].RType_Name;
          _this.TitleImgUrl = _this.big_img+res.data.Return_Data[0].Image_Url;
          _this.TitleRmark = res.data.Return_Data[0].RType_Rmark;
          _this.ResultData = res.data.Return_Data[0].Reservation_Info;
          console.log(_this.ReservationInfo);

          this.interval();
        })
        .catch(error => {
          console.log(error);
        }); //查询失败返回的值
    },
    // 返回上一页
    back() {
      this.$router.go(-1);
    },

    /**
     * 获取当前时间
     * 格式YYYY-MM-DD
     */
    getNowFormatDate() {
      var datetime = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var year = datetime.getFullYear();
      var month = datetime.getMonth() + 1;
      var strDate = datetime.getDate();
      var Hours = datetime.getHours();
      var Minutes = datetime.getMinutes();
      var Seconds = datetime.getSeconds();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate =
        year +
        seperator1 +
        month +
        seperator1 +
        strDate +
        " " +
        Hours +
        seperator2 +
        Minutes +
        seperator2 +
        Seconds;
      return currentdate;
    },
    TimeToDateTime(time) {
      return new Date(time.replace("T", " "));
    },
    interval() {
      var _this = this;
      _this.timer = setInterval(function() {
        var t = parseInt(
          (_this.TimeToDateTime(
            _this.ReservationInfo[_this.classIndex].RType_EndTime
          ) -
            new Date()) /
            1000
        );
        var h = parseInt(t / 3600);
        // var m = Math.round((t % 3600) / 60);
        var m = parseInt((t - h * 3600) / 60);

        var s = t - h * 3600 - m * 60;
        _this.timedate = h + "小时" + m + "分钟" + s + "秒";
      }, 1000);
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer); //在vue实例销毁钱，清除我们的定时器
      }
      this.interval();
    }
  }
};
</script>