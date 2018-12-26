<template>
    <!-- 公告详情 -->
    <div>
        <header class="notice_details_header">
            <div class="back" @click="back()"><img src="../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">消息详情</p>
        </header>

        <div class="con nobottom notice_details_con">
            
            <div class="interval notice_details_interval"></div>
            <div class="interval notice_details_interval"></div>

            <!-- 标题 -->
            <div class="notice_details_title">
                <p class="notice_details_title_p">{{notice_details_data.Message_Title}}</p>
            </div>

            <!-- 公告内容 -->
            <div class="notice_details_content">
                <!-- <p class="notice_details_content_p">{{notice_details_data.Message_Contents}}</p> -->
                <!-- <xmp class="notice_details_content_p">{{notice_details_data.Message_Contents}}</xmp> -->
            </div>

            <!-- 公告时间 -->
            <p class="notice_details_time"></p>

        </div>

    </div>
</template>


<style>
    @import '../../assets/css/notice_details.css';
</style>


<script>
import axios from 'axios';
import $ from 'jquery'


export default {
    data(){
        return{
            notice_details_data:"",//公告详情数据
            operation_time:[],//创建时间 
        }
    },
  created:function(){
    
    this.get_notice_details()
  },
  methods:{
    // 返回上一页
    back(){
        this.$router.go(-1)
    },
    get_notice_details(){
        console.log(this.$route.query.Message_ID)
        let id = this.$route.query.Message_ID

        var _this =this
        axios.get(localStorage.weburl+'/Home/GetMessageByID?MessageID='+id).then(res => {
            _this.notice_details_data= res.data.Return_Data  
            console.log(_this.notice_details_data.Message_Contents)  

            $(".notice_details_content").html(_this.notice_details_data.Message_Contents)

            // 转化时间
            var establish_time = _this.notice_details_data.Operation_Time
            // 年月日
            var a = establish_time.slice(0,establish_time.indexOf("T"))
            this.operation_time.push(a.split("-"))

            // 时分
            var b = establish_time.slice(establish_time.lastIndexOf("T")+1,)
             this.operation_time.push(b.split(":"))
            // console.log(this.operation_time)

            $(".notice_details_time").text(this.operation_time[0][0]+"年"+this.operation_time[0][1]+"月"+this.operation_time[0][2]+"日"+this.operation_time[1][0]+":"+this.operation_time[1][1])

        }).catch(error => { console.log(error) });   //查询失败返回的值

    },
  }
}

</script>