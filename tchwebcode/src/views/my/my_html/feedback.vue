<template>
  <!-- 个人中心   意见反馈 -->
  <div>
    <header class="feedback_header">
      <div class="back" @click="back()">
        <img src="../../../assets/images/icon/back.png" alt>
      </div>
      <p class="header_cen">意见反馈</p>
    </header>
    <div class="con feedback_con">
      <form id="uploadForm" enctype="multipart/form-data" >
        <!-- 获取当前用户Id  -->
        <input type="hidden" name="MembersID" :value="this.UserId">
        <!-- 获取当前用户手机号码 -->
        <input type="hidden" name="Phone" :value="this.Phone">
        <!-- 获取用户选择的反馈类别 -->
        <input type="hidden" name="Type" :value="this.Type">
        <!-- 选择建议还是意见 -->
        <div class="proposal_opinion">
          <!-- 订单问题 -->
          <div
            class="feedback_type"
            @click="click_feedback_type($event,index)"
            v-for="(feedbackType,index) in feedbackType"
            :key="feedbackType.index"
          >
            <div class="proposal_circle" :class="{'spot':select_feedbackType == index}"></div>
            <span class="proposal_opinion_p" :data-Id="feedbackType.Value">{{feedbackType.Text}}</span>
          </div>
        </div>

          <input class="feedback_title" type="text" placeholder="请输入反馈标题" maxlength="16" name="Title">
        <!-- 反馈信息 -->
        <div class="feedback_con_box">
          <!-- id不能改，不然不能时时监听输入文字 -->
          <textarea name="Contents" class="feedback" placeholder="请写下您的建议" maxlength="300"></textarea>

          <!-- 输入了多少字 -->
          <div class="input_text">
            <span class="much_p">0</span>
            <span class="all_p">/ 300</span>
          </div>
        </div>
        <!-- 一段文字 -->
        <p class="section_p">每一条反馈淘厨汇都会认真对待，我们将定期选出优秀反馈意见，发送积分奖励哦~</p>

        <!-- 上传图片 -->
        <div class="upload">
          <ul class="upload_ul">
            <li class="upload_li upload_li_last">
              <img
                class="feedback_upload_img"
                src="../../../assets/images/icon/upload_icon.png"
                @click="show()"
              >
            </li>
          </ul>
        </div>

        <!-- 提交按钮 -->
        <div class="submission" @click="save_feedback()">提交</div>
      </form>
    </div>
  </div>
</template>



<style>
@import "../../../assets/css/feedback.css";
</style>


<script>
import axios from "axios";
import $ from "jquery";
import Vue from "vue";
import {html_encode,get_code} from '../../../assets/js/jquery.form.js';

export default {
  data() {
    return {
      close_img: require("../../../assets/images/icon/close_down1.png"),
      feedbackType: "", //反馈类型
      select_feedbackType: 0, //选中的反馈类型
      UserId: "", //获取当前用户Id
      Phone: "", //获取当前用户手机号码
      Type: "", //获取当前用户选中的反馈类别
      files: [], //获取预览图片的数据
      id: 1
    };
  },
  components: {},
  created: function() {
    this.get_FeedbackInfo();
  },
  methods: {
    //加载基础数据
    get_FeedbackInfo() {
      var _this = this;
      _this.url = localStorage.weburl + "/FeedBack/AddFeedBack";
      axios
        .get(localStorage.weburl + "/FeedBack/GetFeedType")
        .then(res => {
          var infotemp = res.data.Return_Data;
          _this.feedbackType = infotemp;
          _this.UserId = localStorage.user_id;
          _this.Type = infotemp[0].Value;
          axios
            .get(
              localStorage.weburl +
                "/WorkMembers/GetMembersByID?MembersID=" +
                localStorage.user_id
            )
            .then(res => {
              var infotemp = res.data.Return_Data;
              _this.Phone = infotemp.Members_Phone;
            })
            .catch(error => {
              console.log(error);
            }); //查询失败返回的值
        })
        .catch(error => {
          console.log(error);
        }); //查询失败返回的值
    },
    //切换选择的反馈类型
    click_feedback_type(obj, index) {
      this.select_feedbackType = index;
      this.Type = $(obj.currentTarget)
        .find("span")
        .attr("data-id");
    },
    //返回上一页
    back() {
      this.$router.go(-1);
    },
    //上传图片
    show() {
      var _this = this;
      var f = $("<input>");
      f.attr("name", "upload" + _this.id);
      f.attr("type", "file");
      f.attr("id", "uploads" + _this.id);
      f.attr("accept", "image/*");
      f.css("display", "none");
      f.attr("onchange", "uploadobj("+_this.id+")");
      $(".upload_li_last").before(f);
      $("input[name=upload" + _this.id + "]").trigger("click");
      _this.id++;
    },
    //提交反馈
    save_feedback(){
      var _this = this;
      $("#uploadForm").ajaxSubmit({
          url:localStorage.weburl + "/FeedBack/AddFeedBack",
          type:"post",      
          success:function(res){
            if (res.Return_ID == 0) {
                  alert(res.Return_Mess);
                  _this.$router.replace(localStorage.returned_url);
                } else {
                  alert(res.Return_Mess);
                }
          },
          error:function(){alert("系统错误，请联系客服");}
      });
    }
  }
};
//加载预览图片
window.uploadobj = function(id) {
  var _this = this;
  var f = document.getElementById("uploads" + id + "").files[0];
  var reader = new FileReader();
  //将文件以Data URL形式读入页面
  reader.readAsDataURL(f);
  reader.onload = function(e) {
    // 只能放4个，如果上传了3张图片，那么隐藏上传
    if ($(".upload_li").length > 3) {
      $(".upload_li_last").addClass("none");
    }
    // 在前面追加  元素
    var obj = $(
      "<li class='upload_li'>" +
        "<img class='feedback_upload_img' src='" +
        e.target.result +
        "' alt=''></img>" +
        " <div class='close_down' onclick='close_down()'>" +
        " <img class='close_down_img' src='../../../assets/images/icon/close_down1.png' alt=''></img>" +
        "</div>" +
        "</li>"
    );
    $(".upload_li_last").before(obj);
  };
};
//删除预览图片
// window.close_down = function(){
//   console.log(123);
// }
</script>