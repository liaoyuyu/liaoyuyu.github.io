<template>
    <!-- 搜索页 -->
    <div>
        <header class="search_header">
            <div class="back" @click="back()"><img src="../../assets/images/icon/back.png" alt=""></div>
            <div class="search">
                <div class="search_img">
                    <img src="../../assets/images/icon/search_shallow.png" alt="">
                </div>
                <input type="text" class="search_input" placeholder="请输入商品名称">
            </div>
            <p class="search_p" @click="shusuo">搜索</p>
        </header>

        <!-- 内容 -->
        <div class="con nobottom search_con">
            <!-- 搜索历史 -->
            <div class="search_history">
                <div class="search_history_title">
                    <p class="search_history_p">历史搜索</p>
                    <div class="search_history_right">
                        <img src="../../assets/images/icon/delete.png" alt="">
                        <p>清空历史记录</p>
                    </div>
                </div>

            <div class="search_Record_box">
                    <p class="search_Record">榴莲</p>
                    <p class="search_Record">蜂蜜柚子茶</p>
                    <p class="search_Record">澳洲龙虾</p>
                    <p class="search_Record">北极贝</p>
                    <p class="search_Record">土鸡</p>
            </div>

            </div>


            <!-- 推荐商品 -->
            <div class="Recommend_shop_box">
                <div class="Recommend_shop_title">推荐商品</div>
                
                <div class="Recommend_shop">
                    <a class="Recommend_shop_a" href="">
                        <div class="Recommend_shop_left">
                            <img src="../../assets/images/img/broadcast_img.jpg" alt="">
                        </div>
                        <div class="Recommend_shop_right">
                            <p class="Recommend_shop_name">散养麻鸭土鸭子老水鸭</p>
                            <div class="Recommend_shop_p">
                                <p>正宗散养土鸭两年老鸭子</p>
                            </div>
                            <div class="recommend_money">
                                <span class="new_money">¥32.8</span>
                                <!-- <span class="old_money">￥254</span> -->
                            </div>
                            <!-- <img class="Recommend_shop_img json_shop_img" src="../../assets/images/icon/json_shop.png" alt=""> -->
                        </div>
                    </a>
                </div>

                <div class="Recommend_shop">
                    <a class="Recommend_shop_a" href="">
                        <div class="Recommend_shop_left">
                            <img src="../../assets/images/img/broadcast_img.jpg" alt="">
                        </div>
                        <div class="Recommend_shop_right">
                            <p class="Recommend_shop_name">散养麻鸭土鸭子老水鸭</p>
                            <div class="Recommend_shop_p">
                                <p>正宗散养土鸭两年老鸭子</p>
                            </div>
                            <div class="recommend_money">
                                <span class="new_money">¥32.8</span>
                                <!-- <span class="old_money">￥254</span> -->
                            </div>
                            <!-- <img class="Recommend_shop_img json_shop_img" src="../../assets/images/icon/json_shop.png" alt=""> -->
                        </div>
                    </a>
                </div>

                <div class="Recommend_shop">
                    <a class="Recommend_shop_a" href="">
                        <div class="Recommend_shop_left">
                            <img src="../../assets/images/img/broadcast_img.jpg" alt="">
                        </div>
                        <div class="Recommend_shop_right">
                            <p class="Recommend_shop_name">散养麻鸭土鸭子老水鸭</p>
                            <div class="Recommend_shop_p">
                                <p>正宗散养土鸭两年老鸭子</p>
                            </div>
                            <div class="recommend_money">
                                <span class="new_money">¥32.8</span>
                                <!-- <span class="old_money">￥254</span> -->
                            </div>
                            <!-- <img class="Recommend_shop_img json_shop_img" src="../../assets/images/icon/json_shop.png" alt=""> -->
                        </div>
                    </a>
                </div>

                <div class="Recommend_shop">
                    <a class="Recommend_shop_a" href="">
                        <div class="Recommend_shop_left">
                            <img src="../../assets/images/img/broadcast_img.jpg" alt="">
                        </div>
                        <div class="Recommend_shop_right">
                            <p class="Recommend_shop_name">散养麻鸭土鸭子老水鸭</p>
                            <div class="Recommend_shop_p">
                                <p>正宗散养土鸭两年老鸭子</p>
                            </div>
                            <div class="recommend_money">
                                <span class="new_money">¥32.8</span>
                                <!-- <span class="old_money">￥254</span> -->
                            </div>
                            <!-- <img class="Recommend_shop_img json_shop_img" src="../../assets/images/icon/json_shop.png" alt=""> -->
                        </div>
                    </a>
                </div>

            </div>

            <!-- 底线 -->
            <div class="baseline search_baseline">
                <span></span>
                <p>我是有底线的</p>
                <span></span>
            </div>

        </div>

        <!-- 弹出框 -->
        <vuepopup ref="popup" v-on:yes_no="yes_no"></vuepopup>

    </div>
</template>


<style>
    @import '../../assets/css/search.css';
</style>


<script>
import axios from 'axios';
import vuepopup from '@/components/popup.vue'

export default {
    components: {
      vuepopup
    },
    data(){
        return{
           
        }
    },
    created:function(){
   
    },

  methods:{
    // 返回上一页
    back(){
        this.$router.go(-1)
    },
    // 测试 搜索
    shusuo:function(){
        let popup = this.$refs.popup
        popup.open({
            type:3,
            popup_information:'收藏成功',
            whether_show:true,
        })
        
    },
    // 弹出框 点击了确定还是取消
    yes_no:function(judge){
        console.log(judge)
        
    }
  }
}

</script>