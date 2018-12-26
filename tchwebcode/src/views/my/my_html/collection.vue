<template>
  <!-- 个人中心   我的收藏 -->
  <div>
    <header class="collection_header">
      <div class="back" @click="back()">
        <img src="../../../assets/images/icon/back.png" alt>
      </div>
      <p class="header_cen">我的收藏</p>
      <p class="header_right_p" @click="Administration" v-if="ad">管理</p>
      <p class="header_right_p" @click="cancel" v-if="!ad">取消</p>
    </header>

    <!-- 内容 -->
    <div class="con nobottom">
      <!-- 商品  基地 -->
      <div class="collection_titele">
        <p
          class="collection_shop collection_titele_p"
          @click="get_ProductInfo()"
        >商城 ({{ProductInfo.RecordCount}})</p>
        <p
          class="collection_base collection_titele_p"
          @click="get_BusinessInfo()"
        >基地 ({{BusinessInfo.RecordCount}})</p>
      </div>

      <!-- 收藏内容 -->
      <div class="collection_con" v-for="(info,index) in this.ReservationInfo.PageData" :key="info.Index" @touchstart.stop='prohibit_slide && down($event,index)' @touchmove.stop="move($event,index)" @touchend.stop="end($event,index)">
        <!-- 收藏盒子 -->
        <div class="collection_box">
          <!-- 勾选圆圈 -->
          <div class="circular_box">
            <span class="circular" @click="single_election($event)"></span>
          </div>
          <!-- 内容 -->
          <div class="collection">
            <router-link
              class="collection_a"
              :to="{path:'/detail/product_detailed',query:{product_id:info.Collection_TargetID}}"
              v-if="info.Collection_Type==1"
            >
              <div class="collection_left_img">
                <img :src="middle_img+info.Collection_ImgUrl" alt>
              </div>
              <div class="collection_right_con">
                <p class="collection_right_name">{{info.Collection_Name}}</p>
                <div class="collection_right_p">
                  <p>{{info.Collection_Introduction}}</p>
                </div>
                <div class="shop_money">
                  <p class="new_money">￥{{info.Collection_PriceCash}}</p>
                  <p class="old_money">￥{{info.Collection_PriceCash}}</p>
                </div>
              </div>
            </router-link>
            <router-link
              class="collection_a"
              :to="{path:'/base_detail',query:{baseID:info.Collection_TargetID}}"
              v-if="info.Collection_Type==2"
            >
              <div class="collection_left_img">
                <img :src="middle_img+info.Collection_ImgUrl" alt>
              </div>
              <div class="collection_right_con">
                <p class="collection_right_name">{{info.Collection_Name}}</p>
                <div
                  class="collection_right_p"
                  v-if="info.Collection_Type==2"
                  v-html="info.Collection_Introduction"
                ></div>
              </div>
            </router-link>
            <!-- 找相似 -->
            <a class="similar" href v-if="info.Collection_Type==1">找相似</a>
          </div>
          <!-- 滑动  删除 -->
          <div class="delete">删除</div>
        </div>
      </div>

      <!-- 没有了 -->
      <div class="period">没有更多了</div>
    </div>

    <!-- 点击 编辑 后 -->
    <div class="edit_box">
      <!-- 全选 -->
      <div class="whole_box">
        <span class="whole circular" @click="total_selection"></span>
        <p class="whole_p">全选</p>
      </div>
      <p class="edit_delete">删除</p>
    </div>
  </div>
</template>


<style>
@import "../../../assets/css/collection.css";
</style>


<script>
import axios from "axios";
import $ from "jquery";

export default {
  data() {
    return {
      ProductInfo: "",
      BusinessInfo: "",
      ReservationInfo: "",

      prohibit_slide:true,//点击管理后，禁止滑动
      flags:false,  //阻止滑动事件，只能点下去了才能滑动
      position:0,   //X坐标位置

      Businesscount: 0,

      big_img: localStorage.big_img, //大
      middle_img: localStorage.middle_img, //中
      small_img: localStorage.small_img, //小
      ad: 1, //切换管理或者取消按钮
      all: 1 //判断全选还是不全选//1代表全选，0代表取消全选
    };
  },
  components: {},
  created: function() {
    this.get_CollectionInfo(1);
    this.get_CollectionInfo(2);
  },
  mounted: function() {
    // this.move_box();
  },
  methods: {
    get_ProductInfo() {
      if (this.ProductInfo == undefined || this.ProductInfo == "") {
        //console.log(1);
        this.get_CollectionInfo(1);
      } else {
        this.ReservationInfo = this.ProductInfo;
      }
    },
    get_BusinessInfo() {
      if (this.BusinessInfo == undefined || this.BusinessInfo == "") {
        //console.log(2);
        this.get_CollectionInfo(2);
      } else {
        this.ReservationInfo = this.BusinessInfo;
      }
    },
    get_CollectionInfo(type) {
      var _this = this;
      axios
        .get(
          localStorage.weburl +
            "/WorkMembers/GetCollectionInfoByID?page=0&MembersID=" +
            localStorage.user_id +
            "&Type=" +
            type
        )
        .then(res => {
          //axios.get("http://192.168.2.180/WorkMembers/GetCollectionInfoByID?page=0").then(res => {
          var infotemp = res.data.Return_Data;
          if (
            infotemp.PageData.length > 0 &&
            infotemp.PageData[0].Collection_Type == 1
          ) {
            _this.ProductInfo = infotemp;
          } else {
            _this.BusinessInfo = infotemp;
          }

          this.ReservationInfo = this.ProductInfo;
          //console.log(infotemp);
        })
        .catch(error => {
          console.log(error);
        }); //查询失败返回的值
    },

    // 返回上一页
    back() {
      this.$router.go(-1);
    },
    // 点击管理
    Administration() {
      this.ad = 0;
      $(".collection_box").removeClass("collection_box_anim");
      $(".collection_box").css("left", 0);
      this.set_delete(this.ad);
      this.prohibit_slide = false
    },
    // 点击取消
    cancel() {
      this.ad = 1;
      $(".circular").removeClass("circular_obj");
      this.set_delete(this.ad);
      this.prohibit_slide = true;
    },
    // 单选
    single_election(e) {
      var el = e.target;
      // 如果为0，说明全选了
      if (this.all == 0) {
        this.all = 1;
        $(".whole").removeClass("circular_obj");
      }
      // 判断有没有类，有就添加
      if (el.getAttribute("class") == "circular") {
        el.classList.add("circular_obj");
        // 判断是否全都选择了，全选了，就把全选勾上，没有不动
        for (var i = 0; i < $(".collection_box").length; i++) {
          if (
            !$(".collection_box")
              .eq(i)
              .find(".circular_box")
              .find(".circular")
              .hasClass("circular_obj")
          ) {
            return;
          }
        }
        this.all = 0;
        $(".whole").addClass("circular_obj");
      } else {
        el.classList.remove("circular_obj");
      }
    },
    // 全选
    total_selection() {
      if (this.all) {
        $(".con .circular").addClass("circular_obj");
        $(".whole").addClass("circular_obj");
        this.all = 0;
      } else {
        $(".con .circular").removeClass("circular_obj");
        $(".whole").removeClass("circular_obj");
        this.all = 1;
      }
    },
    set_delete(n) {
      if (!n) {
        // 点击管理  禁止向左滑动
        $(".collection_box").off("touchstart touchmove touchend");

        $(".similar").animate({ right: "1.1" + "rem" }, 150);
        $(".edit_box").animate({ bottom: "0" + "rem" }, 150);
        $(".collection_box").animate({ left: "0.8" + "rem" }, 150);
      } else {
        $(".similar").animate({ right: "0.3" + "rem" }, 150);
        $(".edit_box").animate({ bottom: "-1" + "rem" }, 150);
        $(".collection_box").animate({ left: "0" + "rem" }, 150);
      }
    },



    // 滑动
    down(e,index){
        this.flags = true;
        var touch;
        if(event.touches){
            touch = event.touches[0];
        }else {
            touch = event;
        }
        this.position = touch.clientX
    },
    move(e,index){
        if(this.flags){
            var touch ;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
        
            var move_distance = touch.clientX - this.position
            var obj = document.getElementsByClassName("collection_box")[index]
            // console.log(obj)
            // obj.classList.add("collection_box_anim")
            
            // console.log(Math.abs(move_distance))
            if (move_distance <= -0.3 * 100) {
                obj.classList.add("collection_box_anim")
                obj.style.left = -1+"rem";
            }
            if (move_distance >= 0.3 * 100) {
                obj.classList.add("collection_box_anim")
                obj.style.left = 0+"rem";
            }

             //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
            // document.addEventListener("touchmove",function(){
            //     event.preventDefault();
            // },false);
        }
    },
    end(e,index){
      this.flags = false;
       var obj = document.getElementsByClassName("collection_box")[index]
       obj.classList.remove("collection_box_anim")
    },

  }
};
</script>