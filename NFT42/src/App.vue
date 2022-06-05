<template>
  <div id="app">
        <div class="top">
            <div class="info">
                <li>
                    <p>token：</p>
                    <input id="token" type="text" v-model="token" placeholder="输入用户token">
                </li>
                <li>
                    <p>页面id：</p>
                    <input type="text" v-model="id" placeholder="页面id">
                </li>
            </div>
            <div class="btn" @click.stop="save">保存</div>
            <!-- 滑块 -->
            <div id="__nc">
                <div id="nc"></div>
            </div>
        </div>
        <div class="consloe_con">
            <p v-for="(item,index) in list" :key="index">{{index == 0?"当前：":index + "："}}{{item}}</p>
        </div>
  </div>
</template>


<script>
// import touchRobot from 'touch-robot/lib'
export default {
    data(){
        return{
            token:"",
            id:"",

            list:[],
        }
    },
    created(){
        this.token = localStorage.__nft42InfoToken__?localStorage.__nft42InfoToken__:"";
        this.id = localStorage.__nft42InfoId__?localStorage.__nft42InfoId__:"";
    },
    mounted(){
        this.check();

        // this.$ajax({
        //     url:"/front/product/detail/153",
        // }).then(res => {
        //     console.log(res);
        // });
    },
    methods:{
        // 初始化滑块
        check() {
            let _this = this;
            let n = ["FFFF0N0000000000A949",new Date().getTime(),Math.random(),].join(":");
            let o = NoCaptcha.init({
                renderTo: "#nc",
                appkey: "FFFF0N0000000000A949",
                scene: "nc_login_h5",
                token: n,
                trans: {
                    key1: "code0",
                },
                language: "cn",
                timeout: 1e4,
                retryTimes: 5,
                bannerHidden: !0,
                initHidden: !1,
                callback: function (t) {
                    if(_this.id){
                        _this.$post({
                            url:"/front/order/pre/order",
                            params:{
                                aliAfsRequest:{
                                    scene: "nc_login_h5",
                                    sessionId:t.csessionid,
                                    sig:t.sig,
                                    token:n
                                },
                                orderDetails:[{
                                    orderNo: "",
                                    productId: _this.id,
                                    productNum: 1
                                }]
                            }
                        }).then(res => {
                            console.log(res);
                            let item = {code:res.code,message:res.message};
                            item = JSON.stringify(item);
                            _this.list.unshift(item);
                        });
                        o.reset()
                        _this.check();
                    }else{
                        console.error("id！id！id！")
                        o.reset()
                        _this.check();
                    }
                },
                error: function (e) {
                    o.reset();
                },
            });
            NoCaptcha.setEnabled(!0)
            o.reset()
            NoCaptcha.upLang("cn", {
                _startTEXT: "请按住滑块，拖动到最右边",
                _yesTEXT: "验证通过",
                _error300:
                    '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次',
                _errorNetwork:
                    '网络不给力，请<a href="javascript:__nc.reset()">点击刷新</a>',
            });
        },
        // 保存
        save(){
            if(this.token&&this.id){
                localStorage.__nft42InfoToken__ = this.token;
                localStorage.__nft42InfoId__ = this.id;
            }else{
                console.error("填写token和页面id")
            }
        }
    }
}
</script>



<style lang="less" scoped>
@import "./assets/index.css";
#app{
    height: 100vh;
    .top{
        width: 100%;
        padding-bottom: 0.3rem;
    }
    .info{
        width: 100%;
        padding: 0.3rem;
        box-sizing: border-box;
        li{
            width: 100%;
            height: 1rem;
            position: relative;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #eee;
            p,input{
                font-size: 0.28rem;
                color: #000;
                line-height: 1rem;
            }
            input{
                flex: 1;
            }
        }
    }
    .btn{
        width: 90%;
        height: 1rem;
        font-size: 0.36rem;
        color: #fff;
        background: #333;
        text-align: center;
        line-height: 1rem;
        border-radius: 0.2rem;
        margin: 0.2rem auto;
        margin-bottom: 0.6rem;
        user-select: none;
    }

    /deep/#__nc{
        width: 40%;
        margin: 0 auto;
        >div{
           display: block !important;
        }
    }


    .consloe_con{
        width: 100%;
        overflow: hidden;
        overflow-y: scroll;
        flex: 1;
        p{
            font-size: 0.22rem;
            width: 100%;
            text-align: center;
            line-height: 0.5rem;
        }
    }
}
</style>


