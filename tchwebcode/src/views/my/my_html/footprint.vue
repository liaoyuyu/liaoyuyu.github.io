<template>
  <!-- 个人中心   我的足迹 -->
  <div>
    <header class="footprint_header">
      <div class="back" @click="back()">
        <img src="../../../assets/images/icon/back.png" alt>
      </div>
      <p class="header_cen">我的足迹</p>
    </header>

    <!-- 内容 -->
    <div class="con footprint_con nobottom">
      <!-- 时间段盒子 -->
      <div class="footprint_box" v-if="this.TheDateData.length>0">
        <div class="footprint_title">
          <p>今天</p>
        </div>
        <!-- 内容 -->
        <div class="collection" v-for="foots in this.TheDateData" :key="foots.Index">
          <router-link
            class="collection_a"
            :to="{path:'/detail/product_detailed',query:{product_id:foots.Record_ProductID}}"
          >
            <div class="collection_left_img">
              <img :src="middle_img+foots.Record_ProductImgUrl" alt>
            </div>
            <div class="collection_right_con">
              <p class="collection_right_name">{{foots.Record_ProductName}}</p>
              <div class="collection_right_p">
                <p>{{foots.Record_ProductIntroduction}}</p>
              </div>
              <div class="shop_money">
                <p class="new_money">￥{{foots.Record_ProductPrice}}</p>
                <p class="old_money">￥{{foots.Record_ProductPrice}}</p>
              </div>
            </div>
          </router-link>
          <!-- 找相似 -->
          <router-link
            class="footprint_similar"
            :to="{path:'/classify_second_level',query:{ProductType_ID:foots.Record_ProductTypeID,type:1}}"
          >找相似</router-link>
        </div>
      </div>

      <!-- 时间段盒子 -->
      <div class="footprint_box" v-if="this.YesterdayData.length>0">
        <div class="footprint_title">
          <p>{{yesterday}}</p>
        </div>
        <!-- 内容 -->
        <div class="collection" v-for="foots in this.YesterdayData" :key="foots.Index">
          <router-link
            class="collection_a"
            :to="{path:'/detail/product_detailed',query:{product_id:foots.Record_ProductID}}"
          >
            <div class="collection_left_img">
              <img :src="middle_img+foots.Record_ProductImgUrl" alt>
            </div>
            <div class="collection_right_con">
              <p class="collection_right_name">{{foots.Record_ProductName}}</p>
              <div class="collection_right_p">
                <p>{{foots.Record_ProductIntroduction}}</p>
              </div>
              <div class="shop_money">
                <p class="new_money">￥{{foots.Record_ProductPrice}}</p>
                <p class="old_money">￥{{foots.Record_ProductPrice}}</p>
              </div>
            </div>
          </router-link>
          <!-- 找相似 -->
          <router-link
            class="footprint_similar"
            :to="{path:'/classify_second_level',query:{ProductType_ID:foots.Record_ProductTypeID,type:1}}"
          >找相似</router-link>
        </div>
      </div>

      <!-- 时间段盒子 -->
      <div class="footprint_box" v-if="this.BeforeYesterdayData.length>0">
        <div class="footprint_title">
          <p>{{beforeYesterday}}</p>
        </div>
        <!-- 内容 -->
        <router-link
          class="collection_a"
          :to="{path:'/detail/product_detailed',query:{product_id:foots.Record_ProductID}}"
        >
          <div class="collection_left_img">
            <img :src="middle_img+foots.Record_ProductImgUrl" alt>
          </div>
          <div class="collection_right_con">
            <p class="collection_right_name">{{foots.Record_ProductName}}</p>
            <div class="collection_right_p">
              <p>{{foots.Record_ProductIntroduction}}</p>
            </div>
            <div class="shop_money">
              <p class="new_money">￥{{foots.Record_ProductPrice}}</p>
              <p class="old_money">￥{{foots.Record_ProductPrice}}</p>
            </div>
          </div>
        </router-link>
        <!-- 找相似 -->
        <router-link
          class="footprint_similar"
          :to="{path:'/classify_second_level',query:{ProductType_ID:foots.Record_ProductTypeID,type:1}}"
        >找相似</router-link>
      </div>
      <div class="period" v-if="this.Product_Count<this.Data_Count">上拉加载更多</div>
      <!-- 没有了 -->
      <div class="period" v-if="this.Product_Count>=this.Data_Count">没有更多了</div>
    </div>
  </div>
</template>


<style>
@import "../../../assets/css/footprint.css";
</style>


<script>
import axios from "axios";

export default {
  data() {
    return {
      Product_Count: 0,
      Data_Count: 0,
      big_img: localStorage.big_img, //大
      middle_img: localStorage.middle_img, //中
      small_img: localStorage.small_img, //小

      TheDateData: [],
      YesterdayData: [],
      BeforeYesterdayData: [],
      yesterday: this.getNowFormatDate(1),
      beforeYesterday: this.getNowFormatDate(2)
    };
  },
  components: {},
  created: function() {
    this.get_ReadRecordList(1);
  },
  methods: {
    getNowFormatDate(count) {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate() - count;
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    get_ReadRecordList(type) {
      var _this = this;
      axios
        .get(
          localStorage.weburl +
            "/WorkMembers/GetReadRecordList?page=1&MembersID=" +
            localStorage.user_id +
            "&Type=" +
            type
        )
        .then(res => {
          //axios.get("http://192.168.2.180/WorkMembers/GetCollectionInfoByID?page=0").then(res => {
          var infotemp = res.data.Return_Data;
          _this.Data_Count = infotemp.RecordCount;
          var day = this.getNowFormatDate(0);
          infotemp.PageData.forEach(element => {
            if (element.Record_CreateTime == day) {
              _this.TheDateData.push(element);
            } else if (element.Record_CreateTime == _this.yesterday) {
              _this.YesterdayData.push(element);
            } else if (element.Record_CreateTime == _this.beforeYesterday) {
              _this.BeforeYesterdayData.push(element);
            }
          });
          _this.Product_Count += infotemp.PageSize;

            console.log(_this.Data_Count);
          console.log(_this.Product_Count);
          console.log(infotemp);
        })
        .catch(error => {
          console.log(error);
        }); //查询失败返回的值
    },

    // 返回上一页
    back() {
      this.$router.go(-1);
    }
  }
};
</script>