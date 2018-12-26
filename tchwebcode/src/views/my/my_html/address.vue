<template>
  <!-- 个人中心   地址管理 -->
  <div>
    <header class="feedback_header">
      <div class="back" @click="back()">
        <img src="../../../assets/images/icon/back.png" alt>
      </div>
      <p class="header_cen">地址管理</p>
    </header>

    <div class="con address_con">
      <div class="baseline" v-if="this.ReceiverAddress.length==0">
        <span></span>
        <p>没有数据</p>
        <span></span>
      </div>
      <!-- 地址列表 -->
      <div
        class="address_list"
        v-for="(address,index) in this.ReceiverAddress"
        :key="address.Index"
      >
        <!-- 上面 -->
        <div class="list_top"  @click="select_address(address.Address_ID)">
          <p class="address_name">
            {{address.MembersAddress_Receiver}}
            <span
              class="address_phone"
            >{{address.MembersAddress_Phone}}</span>
          </p>
          <p class="address_p">地址：{{address.MembersAddress_Address}}</p>
        </div>
        <!-- 下面 -->
        <div class="address_bot">
          <!-- 左面 -->
          <div class="bot_left">
            <span class="choice" @click="SetDefultAddress(1,index)" v-if="address.MembersAddress_Mark!=1"></span>
            <!-- 选择默认地址样式   v-if判断显示 -->
            <div class="Choice_img_box" @click="SetDefultAddress(0,index)" v-if="address.MembersAddress_Mark==1">
              <img class="Choice_img" src="@/assets/images/icon/default_address.png" alt>
            </div>
            <p class="choice_p">默认地址</p>
          </div>

          <!-- 中间分割线 -->
          <span class="separation_line"></span>

          <!-- 右面 -->
          <div class="bot_right">
            <!-- 删除 -->
            <div class="address_delete" @click="AddressDelete(address.Address_ID)">
              <img class="delete_img" src="../../../assets/images/icon/delete.png" alt>
              <p class="delete_p">删除</p>
            </div>
            <!-- 编辑 -->
            <div class="address_edit">
              <router-link class="address_edit_a"
                :to="{path:'/my/my_html/add_address',query:{addressid:address.Address_ID,order_id:orderID,type:Type}}"
              >
                <img class="edit_img" src="../../../assets/images/icon/edit.png" alt>
                <p class="edit_p">编辑</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部  添加地址 -->
    <div class="add_address">
      <router-link class="add_address_a" :to="{path:'/my/my_html/add_address',query:{order_id:orderID,type:Type}}">
        <img class="add_address_img" src="../../../assets/images/icon/+.png" alt>
        <p class="add_address_p">添加新地址</p>
      </router-link>
    </div>

      <!-- 弹出框 -->
    <vuepopup ref="popup" v-on:yes_no="yes_no"></vuepopup>
  </div>
</template>


<style>
@import "../../../assets/css/address.css";
</style>


<script>
import axios from "axios";

import vuepopup from '@/components/popup.vue'	//引入弹出框组件

export default {
  data() {
    return {
      //    Address:{
      //        PageData:[]
      //    }
      ReceiverAddress: "",
      AddressID:'',//要删除的地址id

      orderID:'',//
    };
  },
  components: {
    vuepopup
  },
  created: function() {
    this.get_Address();

    this.orderID = this.$route.query.order_id
    this.Type = this.$route.query.type

    // console.log(localStorage.user_id)
  },
  methods: {
    get_Address() {
      var _this = this;
      axios.get(localStorage.weburl + "/WorkMembers/GetAddressByMembersID?MembersID=" + localStorage.user_id).then(res => {
      //axios.get("http://192.168.2.180/WorkMembers/GetAddressByMembersID?MembersID=" + localStorage.user_id).then(res => {
          _this.ReceiverAddress = res.data.Return_Data.PageData;
          console.log(_this.ReceiverAddress);
        })
        .catch(error => {
          //console.log(error);
        }); //查询失败返回的值
    },

    // 设置默认地址//state为0表示本身就是默认地址，不能取消，1为切换默认地址
    SetDefultAddress(state, index) {
      // console.log(this.ReceiverAddress)
      console.log(this.ReceiverAddress[index].Address_ID)
      if (state == 1) {
        this.ReceiverAddress[index].MembersAddress_Mark = state;
        // 清楚下一个默认地址状态
        this.ReceiverAddress.forEach(element => {
          if (this.ReceiverAddress[index] != element) {
            element.MembersAddress_Mark = 0;
          }
        });

        // 修改默认地址
        var _this = this;
        axios.get(localStorage.weburl + "/WorkMembers/MembersAddressSetDefault?AddressID=" +this.ReceiverAddress[index].Address_ID+ "&MembersID="+localStorage.user_id).then(res => {
            console.log(res.data);
            if(res.data.Return_ID==0){
                let popup = this.$refs.popup
                popup.open({
                    type:3,
                    popup_information:"修改默认地址成功!",
                    whether_show:true,
                    long:true,
                })
            }else{
                let popup = this.$refs.popup
                popup.open({
                    type:3,
                    popup_information:res.data.Return_Mess,
                    whether_show:true,
                    long:true,
                })
            }
          })
          .catch(error => {
            console.log(error);
            let popup = this.$refs.popup
                popup.open({
                    type:3,
                    popup_information:"网络错误，请稍后重试！",
                    whether_show:true,
                    long:true,
                })
          }); //查询失败返回的值

      } else {
          let popup = this.$refs.popup
          popup.open({
              type:3,
              popup_information:"必须需要一个默认地址！",
              whether_show:true,
              long:true,
          })
      }
    },
    AddressDelete(AddressID) {
        this.AddressID = AddressID;
        let popup = this.$refs.popup
          popup.open({
            type:1,
            popup_information:'你确定要删除这个地址吗?',
            whether_show:true,
        })
    },
    delect_address(AddressID){
        console.log(AddressID);
        var _this = this;
        axios.get(localStorage.weburl + "/WorkMembers/MembersAddressDelete?AddressID=" +AddressID).then(res => {
            console.log(res.data);
            if (res.data.Return_ID == 0) {
                let popup = _this.$refs.popup
                popup.open({
                    type:3,
                    popup_information:"删除成功!",
                    whether_show:true,
                    long:false,
                })
              _this.get_Address();
            }else{
                let popup = _this.$refs.popup
                popup.open({
                    type:3,
                    popup_information:res.data.Return_Mess,
                    whether_show:true,
                    long:false,
                })
            }
          })
          .catch(error => {
            //console.log(error);
          }); //查询失败返回的值
    },
    // 选择地址，并返回
    select_address(address_id){
      var orderID = this.$route.query.order_id
      var Type = this.$route.query.type;

      // 判断是否有临时订单id，有就跳转回去，没有不动
      if(orderID==''||orderID==undefined||orderID==null){
        return;
      }else if (Type==""||Type==undefined||Type==null) {
          this.$router.push({path: '/shopcar/shopcar_html/purchase_order', query: {order_id: orderID,addressID:address_id}});
      }else{
        console.log(address_id)
         this.$router.push({path: '/shopcar/shopcar_html/purchase_order', query: {order_id: orderID,addressID:address_id,type:Type}});
      }
    },

    // 弹出框组件方法  点击了确定还是取消
    yes_no:function(judge){
        console.log(judge)
				if(judge == 'yes'){
          this.delect_address(this.AddressID)
					return;
				}else if(judge == 'no'){
          this.AddressID = "";
					return false;
				}
    },

    // 返回上一页
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
