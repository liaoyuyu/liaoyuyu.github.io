<template>
    <!-- 订单   带评论详情 -->
    <div>
        <header class="order_details_evaluate_header">
            <div class="back" @click="back()"><img src="../../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">发表评价</p>
            <p class="Release">发布</p>
        </header>

          <!-- 内容 -->
        <div class="con nobottom order_details_evaluate_con">
            <!-- 描述评分 -->
            <div class="describe_score padd">
                <p class="describe_score_p">描述相符</p>
                <img class="describe_score_img describe_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                <img class="describe_score_img describe_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                <img class="describe_score_img describe_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                <img class="describe_score_img describe_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                <img class="describe_score_img describe_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                <p class="describe"></p>
            </div>
        

            <!-- 评价文字 -->
            <div class="evaluate_box padd">
                <textarea class="evaluate_p" name="" id="" cols="30" rows="10" maxlength="300" placeholder="宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧"></textarea>
                <div class="upload_img_box">
                    <div class="upload_img upload">
                        <img src="../../../assets/images/icon/upload_img.png" alt="">
                        <input class="upload_input" id="file" type="file" multiple accept="image/*" onchange="uploadobj()">
                    </div>
                </div>
            </div>

            <!-- 匿名 -->
            <div class="anonymous_box padd">
                <div class="anonymous_left">
                    <img class="anonymous_select" src="../../../assets/images/icon/anonymous.png" alt="">
                    <p class="anonymous_p">匿名</p>
                </div>
                <p class="anonymous_right">你的评价能帮助其他小伙伴哟</p>
            </div>

            <!-- 间隔 -->
            <div class="interval"></div>

            <!-- 店铺评价 -->
            <div class="shop_score_box padd">
                <div class="shop_score_title">
                    <img src="../../../assets/images/icon/shop_score.png" alt="">
                    <p>店铺评分</p>
                </div>
                <!-- 物流评分 -->
                <div class="describe_score score">
                    <p class="describe_score_p">物流服务</p>
                    <img class="describe_score_img logistics_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                    <img class="describe_score_img logistics_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                    <img class="describe_score_img logistics_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                    <img class="describe_score_img logistics_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                    <img class="describe_score_img logistics_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                </div>

                <!-- 服务评分 -->
                <div class="describe_score score">
                    <p class="describe_score_p">服务态度</p>
                    <img class="describe_score_img attitude_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                    <img class="describe_score_img attitude_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                    <img class="describe_score_img attitude_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                    <img class="describe_score_img attitude_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                    <img class="describe_score_img attitude_evaluate" src="../../../assets/images/icon/score_unselected.png" alt="">
                </div>
            </div>

        </div>

    </div>
</template>



<style>
    @import '../../../assets/css/order_details_evaluate.css';
</style>


<script>
import axios from 'axios';
import $ from 'jquery'

export default {
    data(){
        return{
            
        }
    },
  components: {

  },
  created:function(){

  },
  methods:{
    // 返回上一页
    back(){
        this.$router.go(-1)
    },

  }
}

</script>