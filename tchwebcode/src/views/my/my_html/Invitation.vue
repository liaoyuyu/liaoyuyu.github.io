<template>
    <!-- 个人中心   邀请有礼 -->
    <div>
        <header class="task_center_header">
            <div class="back" @click="back()"><img src="../../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">邀请有礼</p>
            <router-link class="reward" to=""><img src="../../../assets/images/icon/reward.png" alt=""></router-link>
        </header>

         <!-- 内容 -->
        <div class="con Invitation_con nobottom">
            <!-- 顶部图片 -->
            <img class="Invitation_top_img" src="../../../assets/images/img/Invitation_img.jpg" alt="">
            <!-- 隔阂 -->
            <div class="interval"></div>
            <div class="interval"></div>

            <!-- 自己的奖励 -->
            <div class="reward_box">
                <router-link class="reward_box_a" to="/my/my_html/reward_details">
                    <div class="reward_left">
                        <p class="reward_p">成功邀请</p>
                        <p class="reward_Invitation">28<span>人</span></p>
                    </div>
                    <div class="reward_right">
                        <p class="reward_p">累计奖励</p>
                        <p class="reward_Invitation">68.00<span>元</span></p>
                    </div>
                </router-link>
            </div>
            <!-- 隔阂 -->
            <div class="interval"></div>


            <!-- 排行榜 -->
            <div class="Rankings">
                <!-- 标题 -->
                <div class="Rankings_title">
                    <p class="Rankings_title_p">今日排行</p>
                    <span class="Rankings_title_span">TOP/10</span>
                </div>
                <!-- 排行标题 -->
                <div class="Rankings_list_title">
                    <p class="ranking_p">排名</p>
                    <p class="user_name">用户名</p>
                    <p class="Invitation_number">邀请人数</p>
                </div>
                <!-- 排名 -->
                <div class="ranking_box">
                    <ul class="ranking_ul">

                        <li class="ranking_li">
                            <div class="ranking_li_div">
                                <!-- 名次 -->
                                <div class="place_img">
                                    <img src="../../../assets/images/icon/No_1.png" alt="">
                                </div>
                                <!-- 头像 姓名 -->
                                <div class="place_people">
                                    <div class="portrait">
                                        <img src="../../../assets/images/img/portrait.png" alt="">
                                    </div>
                                    <p class="portrait_name">猫星人</p>
                                </div>
                                <!-- 人数 -->
                                <div class="people_number">28</div>
                            </div>
                        </li>

                        <!-- 第二 -->
                        <li class="ranking_li">
                            <div class="ranking_li_div">
                                <!-- 名次 -->
                                <div class="place_img">
                                    <img src="../../../assets/images/icon/No_2.png" alt="">
                                </div>
                                <!-- 头像 姓名 -->
                                <div class="place_people">
                                    <div class="portrait">
                                        <img src="../../../assets/images/img/portrait.png" alt="">
                                    </div>
                                    <p class="portrait_name">猫星人沙拉酱打死</p>
                                </div>
                                <!-- 人数 -->
                                <div class="people_number">25</div>
                            </div>
                        </li>

                        <!-- 第三 -->
                        <li class="ranking_li">
                            <div class="ranking_li_div">
                                <!-- 名次 -->
                                <div class="place_img">
                                    <img src="../../../assets/images/icon/No_3.png" alt="">
                                </div>
                                <!-- 头像 姓名 -->
                                <div class="place_people">
                                    <div class="portrait">
                                        <img src="../../../assets/images/img/portrait.png" alt="">
                                    </div>
                                    <p class="portrait_name">连续参加了坚实的</p>
                                </div>
                                <!-- 人数 -->
                                <div class="people_number">23</div>
                            </div>
                        </li>

                        <!-- 第四 -->
                        <li class="ranking_li">
                            <div class="ranking_li_div">
                                <!-- 名次 -->
                                <div class="place_img">
                                    <!-- <img src="../../../assets/images/icon/No_3.png" alt=""> -->
                                    <p>4</p>
                                </div>
                                <!-- 头像 姓名 -->
                                <div class="place_people">
                                    <div class="portrait">
                                        <img src="../../../assets/images/img/portrait.png" alt="">
                                    </div>
                                    <p class="portrait_name">大石街道</p>
                                </div>
                                <!-- 人数 -->
                                <div class="people_number">20</div>
                            </div>
                        </li>

                        <!-- 第五 -->
                        <li class="ranking_li">
                            <div class="ranking_li_div">
                                <!-- 名次 -->
                                <div class="place_img">
                                    <!-- <img src="../../../assets/images/icon/No_3.png" alt=""> -->
                                    <p>5</p>
                                </div>
                                <!-- 头像 姓名 -->
                                <div class="place_people">
                                    <div class="portrait">
                                        <img src="../../../assets/images/img/portrait.png" alt="">
                                    </div>
                                    <p class="portrait_name">乡镇灿烂说的就是</p>
                                </div>
                                <!-- 人数 -->
                                <div class="people_number">18</div>
                            </div>
                        </li>

                        <!-- 第六 -->
                        <li class="ranking_li">
                            <div class="ranking_li_div">
                                <!-- 名次 -->
                                <div class="place_img">
                                    <!-- <img src="../../../assets/images/icon/No_3.png" alt=""> -->
                                    <p>6</p>
                                </div>
                                <!-- 头像 姓名 -->
                                <div class="place_people">
                                    <div class="portrait">
                                        <img src="../../../assets/images/img/portrait.png" alt="">
                                    </div>
                                    <p class="portrait_name">怎么形成北京市</p>
                                </div>
                                <!-- 人数 -->
                                <div class="people_number">17</div>
                            </div>
                        </li>

                        <!-- 第七 -->
                        <li class="ranking_li">
                            <div class="ranking_li_div">
                                <!-- 名次 -->
                                <div class="place_img">
                                    <!-- <img src="../../../assets/images/icon/No_3.png" alt=""> -->
                                    <p>7</p>
                                </div>
                                <!-- 头像 姓名 -->
                                <div class="place_people">
                                    <div class="portrait">
                                        <img src="../../../assets/images/img/portrait.png" alt="">
                                    </div>
                                    <p class="portrait_name">现在穿看沙袋</p>
                                </div>
                                <!-- 人数 -->
                                <div class="people_number">15</div>
                            </div>
                        </li>

                        <!-- 第八 -->
                        <li class="ranking_li">
                            <div class="ranking_li_div">
                                <!-- 名次 -->
                                <div class="place_img">
                                    <!-- <img src="../../../assets/images/icon/No_3.png" alt=""> -->
                                    <p>8</p>
                                </div>
                                <!-- 头像 姓名 -->
                                <div class="place_people">
                                    <div class="portrait">
                                        <img src="../../../assets/images/img/portrait.png" alt="">
                                    </div>
                                    <p class="portrait_name">盛开的花</p>
                                </div>
                                <!-- 人数 -->
                                <div class="people_number">10</div>
                            </div>
                        </li>

                        <!-- 第九 -->
                        <li class="ranking_li">
                            <div class="ranking_li_div">
                                <!-- 名次 -->
                                <div class="place_img">
                                    <!-- <img src="../../../assets/images/icon/No_3.png" alt=""> -->
                                    <p>9</p>
                                </div>
                                <!-- 头像 姓名 -->
                                <div class="place_people">
                                    <div class="portrait">
                                        <img src="../../../assets/images/img/portrait.png" alt="">
                                    </div>
                                    <p class="portrait_name">啥都问饿哦为</p>
                                </div>
                                <!-- 人数 -->
                                <div class="people_number">9</div>
                            </div>
                        </li>

                        <!-- 第十 -->
                        <li class="ranking_li">
                            <div class="ranking_li_div">
                                <!-- 名次 -->
                                <div class="place_img">
                                    <!-- <img src="../../../assets/images/icon/No_3.png" alt=""> -->
                                    <p>10</p>
                                </div>
                                <!-- 头像 姓名 -->
                                <div class="place_people">
                                    <div class="portrait">
                                        <img src="../../../assets/images/img/portrait.png" alt="">
                                    </div>
                                    <p class="portrait_name">撒多万</p>
                                </div>
                                <!-- 人数 -->
                                <div class="people_number">7</div>
                            </div>
                        </li>

                    </ul>
                </div>


            </div>


        </div>

    </div>
</template>




<style>
    @import '../../../assets/css/Invitation.css';
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
      this.set_ranking_height()
  },
  methods:{
    // 返回上一页
    back(){
        this.$router.go(-1)
    },
    // 设置  名字盒子高度
    set_ranking_height:function(){
        // var top_hei = $(".ranking_box").offset().top
        // var win_hei = $(window).height()
        // var Rankings_hei = win_hei-top_hei
        // // console.log(top_hei)
        // $(".ranking_box").css("height",Rankings_hei+"px")
    }
  }
}




</script>