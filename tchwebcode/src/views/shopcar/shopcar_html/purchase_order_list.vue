<template>
    <!-- 支付订单  的商品列表详情 -->
    <div>
        <header class="purchase_order_list_header">
            <div class="back" @click="back()"><img src="../../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">商品列表</p>
        </header>

         
        <div class="con nobottom purchase_order_list_con">

            <!-- 每个商品 -->
            <div class="Recommend_shop" v-for="order_data_list in order_data_list" :key="order_data_list.index">
                <router-link class="Recommend_shop_a" :to="{path:'/detail/product_detailed',query:{product_id:order_data_list.OrderList_ProductID}}">
                    
                    <div class="Recommend_shop_left">
                        <img :src="big_img+order_data_list.Image_Url" alt="">
                    </div>
                    <div class="Recommend_shop_right">
                        <p class="Recommend_shop_name">{{order_data_list.Product_Name}}</p>
                        <div class="Recommend_shop_p">
                            <!-- <p>{{order_data_list.ProductSku_Name}}</p> -->
                        </div>
                        <div class="recommend_money">
                            <span class="new_money">¥{{order_data_list.ProductSku_PriceCash}}</span>
                            <!-- <span class="new_money">¥{{(parseFloat(order_data_list.Order_BuyTotalCash)/parseFloat(order_data_list.OrderList_Amount)).toFixed(2)}}</span> -->
                            <!-- <span class="old_money">￥254</span> -->
                        </div>
                        <!-- <img class="Recommend_shop_img json_shop_img" src="../../../assets/images/icon/json_shop.png" alt=""> -->
                        <p class="recommend_shop_all_number">x{{order_data_list.OrderList_Amount}}</p>
                    </div>
                </router-link>
            </div>

        </div>


    </div>
</template>


<style>
    @import '../../../assets/css/purchase_order_list.css';
</style>


<script>
import axios from 'axios';


export default {
    data(){
        return{
            orderid:'',//临时订单ID
            order_data_list:'',

            //图片接口
            big_img:localStorage.big_img,//大
            middle_img:localStorage.middle_img,//中
            small_img:localStorage.small_img, //小

        }
    },
  created:function(){
     this.orderid = this.$route.query.order_id;
     console.log(this.orderid)

    // 获取临时订单数据
   this.get_orderdata();
  },
  methods:{
       get_orderdata(){
        var _this = this;
        axios.get(localStorage.weburl + "/WorkOrder/GetOrderTemporaryInfo?OrderID=" + this.orderid).then(res => {
            console.log(res.data.Return_Data.OrderList);
            _this.order_data_list = res.data.Return_Data.OrderList
        })
        .catch(error => {
            console.log(error);
        }); //查询失败返回的值
      },
    // 返回上一页
    back(){
        this.$router.go(-1)
    },
  }
}

</script>