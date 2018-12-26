<template>
  <!-- 个人中心   添加地址 -->
  <div>
    <header>
      <div class="back" @click="back()">
        <img src="../../../assets/images/icon/back.png" alt>
      </div>
      <p class="add_p">添加或编辑地址</p>
      <p class="preservation" @click="preservation_address">保存</p>
    </header>

    <!-- 内容 -->
    <div class="con add_addredss_con nobottom">
      <!-- 列表 -->
      <div class="column_box">
        <div class="column">
          <p class="column_p">收货人</p>
          <input type="text" class="column_input add_address_consignee" id="name" maxlength="8">
        </div>
        <div class="column">
          <p class="column_p">联系电话</p>
          <input type="tel" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');"  class="column_input add_address_phone" maxlength="11" id="phone">
        </div>
        <div class="column">
          <p class="column_p">所在地区</p>
           <input type="text" class="column_input add_address_location" @focus="choice_region()">
        </div>
        <!-- <div class="column">
          <p class="column_p">街道</p>
          <input type="text" class="column_input">
        </div> -->
        <div class="column_detailed">
          <p class="column_p">详细地址</p>
          <!-- <input type="text" class="list_input"> -->
          <textarea class="column_textarea" maxlength="100"></textarea>
        </div>
      </div>

      <!-- 设置默认地址 -->
      <div class="set_default">
        <p class="set_default_p">设为默认地址</p>

        <!-- vue v-if判断显示隐藏 -->
        <!-- 勾选框 -->
        <div class="default_box" v-if="!select_default_box" @click="set_default_box(1)"></div>
        <!-- 勾选选中框 -->
        <div class="default_select default_box" v-if="select_default_box"  @click="set_default_box(0)">
            <img src="../../../assets/images/icon/default_address.png" alt="">
        </div>
      </div>
    </div>

    <!-- 选择地区弹出框 -->
    <div class="address_region_popup_box" v-if="show_region_list" @click="choice_region">
        <div class="address_region_popup" @click.stop>
          <div class="address_region_popup_title">
            <p class="address_region_title_p">选择地区</p>
            <p class="address_region_popup_cancel" @click="choice_region">取消</p>
          </div>
          <div class="address_region_popup_con">
              <div class="region_popup_title">
                  <p>省</p><p>市</p><p>县</p>
              </div>
              <div class="address_region_popup_inner_con">
                  <div class="choice_region_box" id="sheng">
                      <p class="choice_region_list" :class="{'address_select_region':seletc_province_region == index}" v-for="(province_list,index) in province_list" :key="province_list.index" @click="address_select_region(0,index,province_list.Value)">{{province_list.Text}}</p>
                  </div>
                  <div class="choice_region_box" id="xian">
                    <p class="choice_region_list" :class="{'address_select_region':seletc_city_region == index}" v-for="(city_list,index) in city_list" :key="city_list.inex" @click="address_select_region(1,index,city_list.Value)">{{city_list.Text}}</p>
                  </div>
                  <div class="choice_region_box">
                    <p class="choice_region_list"  v-for="(county_list,index) in county_list" :key="county_list.inex" @click="address_select_region(2,index,county_list.Value)">{{county_list.Text}}</p>
                  </div>
              </div>
          </div>
        </div>
    </div>

      <!-- 弹出框 -->
      <vuepopup ref="popup"></vuepopup>

  </div>
</template>



<style>
@import "../../../assets/css/add_address.css";
</style>


<script>
import axios from "axios";
import $ from 'jquery'
// // 括号里写  要用到的方法名字
import {html_encode} from '@/assets/js/public.js';

import vuepopup from '@/components/popup.vue'	//引入弹出框组件

export default {
  data() {
    return {
      //ReceiverAddress: ""
      show_region_list:false,//弹出地区列表
      province_list:"",//省份列表
      city_list:[{Text:"--请选择上级--",value:""}],//市列表
      county_list:[{Text:"--请选择上级--",value:""}],//县列表
      seletc_province_region:null,//选中的省份下标
      seletc_city_region:null,//选择的市的下标
      // seletc_county_region:null,//选中的县的下标

      province_id:'',//省ID
      city_id:'',//市ID
      county_id:'',//县ID


      select_default_box:0,//是否设为默认地址

    };
  },
  components: {
    vuepopup
  },
  created: function() {
    // 地址管理点击的编辑//获取不到就为添加新地址，获得得到就是编辑地址
    this.get_AddressInfo();

    // 获取地区一级列表
    this.get_region_list(0,0)
  },
  methods: {
    // 编辑
    get_AddressInfo() {
      var addid = this.$route.query.addressid;
      if (addid != undefined && addid != "") {
        var _this = this;
        //axios.get(localStorage.weburl + "/WorkMembers/GetMembersAddressByID?AddressID="+addid+"&MembersID="+localStorage.user_id).then(res => {
        axios
          .get(
            "http://192.168.2.180/WorkMembers/GetMembersAddressByID?AddressID="+addid+"&MembersID=" +localStorage.user_id)
          .then(res => {
            var ReceiverAddress = res.data.Return_Data;
            console.log(ReceiverAddress);
            $("#name").val(ReceiverAddress.MembersAddress_Receiver);
            $("#phone").val(ReceiverAddress.MembersAddress_Phone)
            // $("")
          })
          .catch(error => {
            //console.log(error);
          }); //查询失败返回的值
      }
      // console.log(addid);
    },

    // 选择地区弹出
    choice_region(){
      this.show_region_list = !this.show_region_list

      // 初始化
      this.province_list = '';
      this.city_list=[{Text:"--请选择上级--",value:""}];//市列表
      this.county_list=[{Text:"--请选择上级--",value:""}];//县列表
      this.seletc_province_region=null;//选中的省份下标
      this.seletc_city_region=null;//选择的市的下标
      this.get_region_list(0,0)
    },

    // 获取地区弹出框的地址数据//第一级列表
    get_region_list(region,value){
         var _this = this;
        axios.get(localStorage.weburl + "/BaseSelect/GetPCCByParentId?parentId=" + value).then(res => {
            if(region == 0){
                _this.province_list = res.data.Return_Data
            }
            if(region == 1){
              // console.log(res.data.Return_Data)
                _this.city_list = res.data.Return_Data
            }
            if(region == 2){
              _this.county_list = res.data.Return_Data
            }
            // console.log(res.data)
          })
          .catch(error => {
            console.log(error);
          }); //查询失败返回的值
    },

    // 选择地区，请求下一级   //0为省份，1为市,3为县
    address_select_region(region,index,value){
      if(region == 0){
          this.seletc_province_region = index;
          // console.log(this.province_list)
          this.province_id =this.province_list[index].Value
          // console.log(this.province_id)
          this.seletc_city_region = null;
          this.seletc_county_region = null;
          this.get_region_list(1,value)
      }
      if(region == 1){
          this.seletc_city_region = index;
          // console.log(this.city_list)
          this.city_id = this.city_list[index].Value
          // console.log(this.city_id)
          this.seletc_county_region = null;
          this.get_region_list(2,value)
      }
      if(region == 2){
          this.county_id = this.county_list[index].Value
          // console.log(this.county_id)
          this.show_region_list = false

          // 渲染在页面上
          var add_address_location = this.province_list[this.seletc_province_region].Text+"-"+this.city_list[this.seletc_city_region].Text+"-"+this.county_list[index].Text
          $(".add_address_location").val(add_address_location)
      }
       
      
    },

    // 设为默认地址//n为0位不设置为默认地址，1为设置成默认地址
    set_default_box(n){
      console.log(n)
      if(n){
        this.select_default_box = 1;
      }else{
        this.select_default_box = 0;
      }
    },

    // 保存地址
    preservation_address(){
        var add_address_consignee = $(".add_address_consignee").val()//收货人
        add_address_consignee = html_encode(add_address_consignee)
        
        var add_address_phone = $(".add_address_phone").val();//联系电话
        add_address_phone = html_encode(add_address_phone)

        var column_textarea = $(".column_textarea").val();//详细地址
        column_textarea = html_encode(column_textarea)

        if(add_address_consignee==""){
          this.tips_function("请输入收货人姓名!")
          return;
        }
        if(add_address_phone.length!=11){
            this.tips_function("请输入正确的手机号！")
            return;
        }
        if(this.province_id==''&&this.city_id==''&&this.county_id==''){
            this.tips_function("请选择所在地区!")
            return;
        }

        if(column_textarea==""){
          this.tips_function("请填写详细地址!")
          return;
        }


        var addressid = this.$route.query.addressid;
         var _this = this
         var address_data = new URLSearchParams();
        // 如果没有，就为添加新地址，有就编辑地址
        if(addressid==""||addressid==undefined){
            //添加新地址 
              address_data.append('AddressName', "家");
              address_data.append('MembersID', localStorage.user_id);
              address_data.append('Receiver', add_address_consignee);
              address_data.append('Phone', add_address_phone);
              address_data.append('ProvinceID', _this.province_id);
              address_data.append('CityID', _this.city_id);
              address_data.append('CountyID', _this.county_id);
              address_data.append('Address', column_textarea);
              address_data.append('Mark', _this.select_default_box);

              axios.post(localStorage.weburl+'/WorkMembers/AddMembersAddress', address_data).then(function (res) {
                  console.log(res)
                  if(res.data.Return_ID==0){
                    _this.tips_function("添加成功!")
                    setTimeout(function(){
                      _this.$router.push({path: '/my/my_html/address',query:{order_id:_this.$route.query.order_id,type:_this.$route.query.type}});
                    },500)
                  }else{
                    _this.tips_function(res.data.Return_Mess)
                  }
              }).catch(function (err) {
              　　console.log(err)
                _this.tips_function("网络故障，请稍后重试！")
              });
        }else{
            // 编辑地址
              address_data.append('AddressID', addressid);
              address_data.append('AddressName', "家");
              address_data.append('MembersID', localStorage.user_id);
              address_data.append('Receiver', add_address_consignee);
              address_data.append('Phone', add_address_phone);
              address_data.append('ProvinceID', _this.province_id);
              address_data.append('CityID', _this.city_id);
              address_data.append('CountyID', _this.county_id);
              address_data.append('Address', column_textarea);
              address_data.append('Mark', _this.select_default_box);

              axios.post(localStorage.weburl+'/WorkMembers/MembersAddressEdit', address_data).then(function (res) {
                  if(res.data.Return_ID==0){
                      _this.tips_function("修改成功!")
                      setTimeout(function(){
                        _this.$router.push({path: '/my/my_html/address',query:{order_id:_this.$route.query.order_id,type:_this.$route.query.type}});
                      },500)
                  }else if (res.data.Return_ID==2) {
                      _this.tips_function("当前修改地址为默认地址，请切换默认地址或点击设为默认地址在修改！")
                  }else{
                     _this.tips_function(res.data.Return_Mess)
                  }
                  console.log(res)
              }).catch(function (err) {
              　　console.log(err)
                _this.tips_function("网络故障，请稍后重试!")
              });
        }
    },

    // 提示
    tips_function(tips){
      let popup = this.$refs.popup
      popup.open({
          type:3,
          popup_information:tips,
          whether_show:true,
          long:true,
      })
    },

    // 返回上一页
    back() {
      this.$router.go(-1);
    }
  }
};
</script>