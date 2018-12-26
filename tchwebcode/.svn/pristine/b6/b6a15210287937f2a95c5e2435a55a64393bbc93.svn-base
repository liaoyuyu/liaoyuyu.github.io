<template>
    <div>
        <!-- 弹出框 -->
        <div class="popup_big_box" :class="{'whetherShow':whether_show}" v-if="type != 3">
            <div class="popup_inner_box" v-if="type == 1">
                <div class="popup_p">{{popup_information}}</div>
                <div class="popup_buttom">
                    <p class="popup_buttom_p" @click="select_yes">确定</p>
                    <span class="popup_buttom_span"></span>
                    <p class="popup_buttom_p" @click="select_no">取消</p>
                </div>
                <div class="close_buttom" @click="select_no">×</div>
            </div>

             <div class="popup_inner_box" v-if="type == 2">
                <div class="popup_p">{{popup_information}}</div>
                <div class="popup_buttom">
                    <p class="popup_buttom_p popup_buttom_noe_p" @click="select_yes">确定</p>
                </div>
                <div class="close_buttom" @click="select_no">×</div>
            </div>
        </div>


        <!-- 弹出动态自动消失提示 -->
        <div class="dynamic_eject_news_box" v-if="type == 3" :class="{'dynamic_eject_news_box_anim':whether_show,'dynamic_eject_news_box_long':long}">
            <p class="dynamic_eject_news">{{popup_information}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            type:1, //弹出框类型
            popup_information:"", //弹出框文字
            whether_show:false,  //弹出框是否显示
            long:false, //弹出框是否  宽点
            // no_whether_show:false,//背景遮盖层是否显示
        }
    },
    created:function(){
   
    },
    methods:{
        open(obj){
            // console.log(obj)
            this.whether_show = obj.whether_show
            this.type = obj.type
            this.popup_information = obj.popup_information
            this.long = obj.long

            if(this.type == 3){
                var _this = this
                setTimeout(function(){
                    _this.whether_show = false;
                },1000)
            }
        },
        select_yes:function(){
            this.whether_show = false
            this.$emit('yes_no', 'yes')
        },
        // 弹出框 点击了确定还是取消
        select_no:function(){
            this.whether_show = false
            this.$emit('yes_no', 'no')
        },
    }
}
</script>


<style>
    .popup_big_box{
        position: fixed;
        z-index: 99999999 !important;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
    }
    .popup_inner_box{
        width: 5rem;
        height: 3rem;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1.5rem;
        margin-left: -2.5rem;
        border-radius: 5px;
        overflow: hidden;
    }
    .popup_p{
        width: 100%;
        height: 2.2rem;
        color: #333333;
        font-size: 0.32rem;
        text-align: center;
        padding-top: 1rem;
        box-sizing: border-box;
    }
    .popup_buttom{
        width: 100%;
        height: 0.8rem;
        border-top: 1px solid #eee;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .popup_buttom_p{
        width: 49.6%;
        height: 100%;
        color: #333333;
        font-size: 0.26rem;
        text-align: center;
        line-height: 0.8rem;
    }
    .popup_buttom_p:active{
        background: #ccc;
    }
    /* 一个按钮 */
    .popup_buttom_noe_p{
        width: 100%;
    }
    .popup_buttom_span{
        width: 0.8%;
        height: 0.5rem;
        background: #eee;
    }
    /* 关闭按钮 */
    .close_buttom{
        position: absolute;
        padding: 0rem 0.1rem;
        z-index: 999;
        top: 0.05rem;
        right: 0.1rem;
        font-size: 0.45rem;
        color: #666666;
    }



    /* 动态消息提示  自动消失提示 */
    .dynamic_eject_news_box{
        position: fixed;
        width: 30%;
        background: #000;
        z-index: 9999;
        left: 50%;
        top: 50%;
        margin-left: -15%;
        padding: 0.1rem 0.2rem;
        border-radius: 8px;
        overflow: hidden;
        box-sizing: border-box;
        background: #000;
        opacity: 0;
        overflow: hidden;
        transition: all 0.5s;
    }
    /* 弹出框比较长的CSS */
    .dynamic_eject_news_box_long{
        width:45%;
        margin-left: -22.5%;
    }
    .dynamic_eject_news{
        display: block;
        width: auto;
        font-size: 0.26rem;
        color: #fff;
        text-align: center;
    }
    .dynamic_eject_news_box_anim{
        opacity: 1;
        overflow: visible;
    }




    /*  消失动画 */
    .whetherShow{
        visibility: visible;
        opacity: 1;
    }
</style>


