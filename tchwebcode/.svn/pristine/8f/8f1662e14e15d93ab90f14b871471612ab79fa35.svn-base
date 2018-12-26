<template> 
    <!-- 个人中心   修改密码 -->
    <div>
        <header class="modify_password_header">
            <div class="back" @click="back()"><img src="../../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">修改密码</p>
        </header>

        <!-- 内容 -->
        <div class="con modify_password_con">
            <ul class="modify_ul">
                <li class="modify_li">
                    <p class="left_p">当前手机号是</p>
                    <p class="right_p phone" id="phone">{{Phone}}</p>
                </li>
                <li class="modify_li">
                    <input class="inputobj verification" type="text" maxlength="6" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');" placeholder="请输入验证码">
                    <p class="right_p verification_p" @click="register_code">获取验证码</p>
                </li>
                <li class="modify_li">
                    <input class="inputobj password" type="password" placeholder="请输入新密码" maxlength="16">
                </li>
                <li class="modify_li">
                    <input class="inputobj password1" type="password" placeholder="请确认新密码" maxlength="16">
                </li>
            </ul>

            <!-- 确认修改 -->
            <div class="modify_bot" @click="savePwd">确认修改</div>

        </div>

        

    </div>
</template>




<style>
    @import '../../../assets/css/modify_password.css';
</style>


<script>
import axios from "axios";
import $ from "jquery";
import {html_encode,get_code} from '../../../assets/js/public.js'

export default {
  data() {
    return {
      Phone: ""
    };
  },
  components: {},
  created: function() {
    this.get_CollectionInfo();
  },
  mounted: function() {},
  methods: {
    //获取基础数据
    get_CollectionInfo() {
      var _this = this;
      axios
        .get(
          localStorage.weburl +
            "/WorkMembers/GetMembersByID?MembersID=" +
            localStorage.user_id
        )
        .then(res => {
          var infotemp = res.data.Return_Data;
          this.Phone = infotemp.Members_Phone;
        })
        .catch(error => {
          console.log(error);
        }); //查询失败返回的值
    },
    // 获取验证码
    register_code: function() {
      var register_phone = $("#phone").html();
      if (register_phone == "") {
        alert("手机号不能为空!");
        return;
      }
      get_code(".verification_p", register_phone, "phone");
    },
    //保存密码
    savePwd: function() {
      var _this = this;
      //数据验证
      var pwd = $(".password").val();
      var pwd1 = $(".password1").val();
      var verification_code = $(".verification").val();
      var md5Pwd = this.$md5(pwd1);
      //验证验证码
      $.ajax({
        url: localStorage.weburl + "/WorkMembers/VerLogin",
        type: "post",
        datatype: "Json",
        data: {
          Phone: $("#phone").html(),
          Ver: verification_code
        },
        success: function(res) {
          if (res.Return_ID == 0) {
            //保存密码
            $.ajax({
              url: localStorage.weburl + "/WorkMembers/MembersInfoEidt",
              type: "post",
              datatype: "Json",
              data: {
                MembersID: localStorage.user_id,
                Mode: "Pwd",
                New_Contact: md5Pwd
              },
              success: function(res) {
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
          else{
            alert(res.Return_Mess);
          }
        },
        error:function(){alert("系统错误，请联系客服");}
      });
    },
    // 返回上一页
    back() {
      this.$router.go(-1);
    }
  }
};

</script>