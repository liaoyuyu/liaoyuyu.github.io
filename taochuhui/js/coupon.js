$(function(){


    new Vue({
        el:"#coupon_box",
        data:{
            data:"",
            switch_not:1,//未使用
            switch_already:0,//已使用
        },
        created:function(){
            // var _this = this
            // get_data("","/Home/GetShopBanner","get").then(function(res){
            //     _this.data = res
            // },function(err){
            //     // alert("系统错误，请联系客服！")
            // }) 
        },
        mounted:function(){

        },
        methods:{
            switch_option:function(n){
                if(n){
                    this.switch_not = 1
                    this.switch_already = 0
                }else{
                    this.switch_not = 0
                    this.switch_already = 1
                }
            }
        },
    })


})