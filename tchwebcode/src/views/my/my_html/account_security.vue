<template>
  <!-- 个人中心    个人信息 -->
  <div>
    <header class="account_security_header">
      <div class="back" @click="back()">
        <img src="../../../assets/images/icon/back.png" alt>
      </div>
      <p class="header_cen">个人信息</p>
    </header>
    <!-- 内容 -->
    <div class="con account_security_con nobottom">
      <ul class="account_ul">
        <li class="account_li portrait_li">
          <p class="li_left">头像</p>
          <div class="portraitbox" style="font-size:0.3rem">
            <form id="uploadHeadImg" enctype="multipart/form-data">
              <input type="hidden" name="membersId" :value="this.UserInfo.Members_ID">
              <input
                id="upload"
                name="uploadImg"
                class="account_upload"
                type="file"
                accept="image/*"
                @change="uploadobj($event)"
              >
            </form>
            <img class="upload_img" :src="this.UserLogoImgUrl" alt v-cloak>
          </div>
        </li>
        <li class="account_li phone_li">
          <a class="li_a" href="javascript:void(0);">
            <p class="li_left">手机号</p>
            <div class="li_right">
              <p class="right_p account_phone">{{this.UserInfo.Members_Phone}}</p>
              <img class="right_img" src="../../../assets/images/icon/forward.png" alt>
            </div>
          </a>
        </li>
        <li class="account_li">
          <p class="li_left">微信</p>
          <div class="li_right">
            <p class="right_p">{{this.IsHaveWeiXin}}</p>
          </div>
        </li>
        <li class="account_li">
          <p class="li_left">昵称</p>
          <div class="li_right">
            <input
              id="dateSelectorOne"
              class="right_p name"
              type="text"
              placeholder="请输入昵称"
              :value="this.UserName"
              maxlength="11"
              @blur="saveName()"
              v-cloak
            >
          </div>
        </li>
        <li class="account_li" @click="eject_sex_layer">
          <p class="li_left">性别</p>
          <div class="li_right">
            <p class="right_p" @click="saveSex()">{{this.Sex}}</p>
            <img class="right_img" src="../../../assets/images/icon/forward.png" alt>
          </div>
        </li>
        <li id="birthday" class="account_li" @click="select_birthday">
          <p class="li_left">生日</p>
          <div class="li_right">
            <input
              type="text"
              class="right_p"
              id="birthday_p"
              :value="this.UserInfo.Members_Birthday"
              v-cloak
            >
            <p class="right_p" id="birthday_p" v-cloak @click="saveBirthday()"></p>
            <img class="right_img" src="../../../assets/images/icon/forward.png" alt>
          </div>
        </li>
      </ul>
    </div>

    <!-- 性别弹出框 -->
     <div class="sex_box" :class="{'sex_box_anim':whether_open_sex}">
        <!-- 背景 -->
        <div class="sex_back"></div>
        <!-- 弹出层 -->
        <div class="sex_frame">
            <p class="sex_tit">性别</p>
            <div class="sex_list sex_list_sex1" data_sex="1" @click="select_sex(1)">
                <p class="list_p">男</p>
                <span class="list_option" :class="{'option':selectSex==1}"></span>
            </div>
            <div class="sex_list sex_list_sex2" data_sex="2" @click="select_sex(2)">
                <p class="list_p">女</p>
                <span class="list_option" :class="{'option':selectSex==2}"></span>
            </div>
        </div>
    </div>



  </div>
</template>

<style>
@import "../../../assets/css/account_security.css";
@import "../../../assets/css/Mdate.css";
</style>
<script>
import axios from "axios";
import $ from "jquery";
import Vue from "vue";

// formatDate
// import { html_encode, get_code } from "../../../assets/js/public.js";
import { html_encode, get_code } from "../../../assets/js/jquery.form.js";

import {iscroll} from '../../../assets/js/iscroll.js'
import {Mdate} from '../../../assets/js/Mdate.js'


export default {
  data() {
    return {
      UserInfo: "", //用户基本信息
      IsHaveWeiXin: "", //是否绑定微信号
      UserName:"", //用户昵称
      UserLogoImgUrl:"", //用户头像
      Sex:'',


      whether_open_sex:false,//是否打开性别层
      selectSex:'',//选择的性别
    };
  },
  created: function() {
    this.get_UserInfo();
    
  },
  mounted:function(){
    this.select_birthday()
  },
  methods: {
    //加载基础数据
    get_UserInfo() {
      var _this = this;
      axios
        .get(
          localStorage.weburl +
            "/WorkMembers/GetMembersByID?MembersID=" +
            localStorage.user_id
        )
        .then(res => {
          var ReservationInfo = res.data.Return_Data;
          switch (ReservationInfo.Members_Sex) {
            case 0:
              _this.Sex = "保密";
              break;
            case 1:
              _this.Sex = "男";
              break;
            case 2:
              _this.Sex = "女";
              break;
          }
          if (
            ReservationInfo.WeiXin_OpenID == "" ||
            ReservationInfo.WeiXin_OpenID == null
          ) {
            _this.IsHaveWeiXin = "未绑定";
          } else {
            _this.IsHaveWeiXin = "已绑定";
          }
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
              _this.UserLogoImgUrl = _this.small_img + "/../user/userhad.png";
            } else {
              _this.UserLogoImgUrl = ReservationInfo.Members_OtherHead;
            }
          } else {
            _this.UserLogoImgUrl =
              _this.small_img + ReservationInfo.Members_HeadPhoto;
          }
          _this.UserInfo = ReservationInfo;
        })
        .catch(error => {
          console.log(error);
        }); //查询失败返回的值
    },
    //保存昵称
    saveName() {
      $.ajax({
        url: localStorage.weburl + "/WorkMembers/MembersInfoEidt",
        type: "post",
        datatype: "Json",
        data: {
          MembersID: localStorage.user_id,
          Mode: "NickName",
          New_Contact: $("#dateSelectorOne").val()
        },
        success: function(res) {
          if (res.Return_ID != 0) {
            alert("保存失败，请重试");
          }
        },
        error: function() {
          alert("系统错误，请联系客服");
        }
      });
    },
    //保存头像
    uploadobj(e) {
      var _this = this;
      $("#uploadHeadImg").ajaxSubmit({
        url: localStorage.weburl + "/WorkMembers/UpdateHeadImg",
        type: "post",
        success: function(res) {
          if (res.Return_ID == 0) {
            alert(res.Return_Mess);
            _this.$router.replace(localStorage.returned_url);
          } else {
            alert(res.Return_Mess);
          }
        },
        error: function() {
          alert("系统错误，请联系客服");
        }
      });
    },
    //保存生日
    saveBirthday() {
      $.ajax({
        url: localStorage.weburl + "/WorkMembers/MembersInfoEidt",
        type: "post",
        datatype: "Json",
        data: {
          MembersID: localStorage.user_id,
          Mode: "Birthday",
          New_Contact: $("#dateSelectorOne").val()
        },
        success: function(res) {
          if (res.Return_ID != 0) {
            alert("保存失败，请重试");
          }
        },
        error: function() {
          alert("系统错误，请联系客服");
        }
      });
    },
    //保存性别
    saveSex() {
      $.ajax({
        url: localStorage.weburl + "/WorkMembers/MembersInfoEidt",
        type: "post",
        datatype: "Json",
        data: {
          MembersID: localStorage.user_id,
          Mode: "Sex",
          New_Contact: $("#dateSelectorOne").val()
        },
        success: function(res) {
          if (res.Return_ID != 0) {
            alert("保存失败，请重试");
          }
        },
        error: function() {
          alert("系统错误，请联系客服");
        }
      });
    },
    // 返回上一页
    back() {
      this.$router.go(-1);
    },
    // 弹出性别层
    eject_sex_layer(){
        this.whether_open_sex = true
    },
    // 选择性别
    select_sex(n){
      if(n==1){
        this.selectSex =1
        this.UserInfo.Members_Sex ="男"
      }else if (n==2) {
        this.selectSex = 2
        this.UserInfo.Members_Sex ="女"
      }
      // 请求接口

      this.whether_open_sex = false;
    },
    // 选择生日
    select_birthday() {
        var date=new Date() 
        date=date.getFullYear()-100 // birthday为点击的元素id，birthday_p为要渲染名字的元素id
        new Mdate("birthday", {
            acceptId: "birthday_p", beginYear: date, //此项为Mdate的初始年份，不填写默认为2000
            beginMonth: "1", //此项为Mdate的初始月份，不填写默认为1
            beginDay: "1", //此项为Mdate的初始日期，不填写默认为1
            endYear: "", //此项为Mdate的结束年份，不填写默认为当年
            endMonth: "", //此项为Mdate的结束月份，不填写默认为当月
            endDay: "", //此项为Mdate的结束日期，不填写默认为当天
            format: "" //此项为Mdate需要显示的格式，可填写"/"或"-"或".",不填写默认为年-月-日
        })
    },
  },


  
};


</script>

