// document.cookie="obj=0; expires=Thu, 18 Dec 2013 12:00:00 GMT;path=/";   //清楚相对应的cookie值
// document.cookie="SQ=0; expires=Thu, 18 Dec 2013 12:00:00 GMT;path=/";   //清楚相对应的cookie值



// 按返回键返回  要刷新
window.addEventListener('pageshow', function(event) {
    //event.persisted属性为true时，表示当前文档是从往返缓存中获取
    if (event.persisted) {
        location.reload();  
    }
});


$(function(){
    // 授权
    // if(getCookie("SQ")==""||getCookie("SQ") =="0"){
    //     var back_html = "http://www.taochuhui.com/html_authorization/judge_sj.html";
    // }
    $.ajax({type:"OPTIONS",url:"/",complete:function(x){alert(x.getResponseHeader("Date"))}})
    
    // 轮播
    // get_data("","/Home/GetShopBanner","get").then(function(res){
    //     new Vue({
    //         el:".banner",
    //         data:{
    //             banner_data:res.Return_Data.PageData,//首页banner
    //         },
    //         created:function(){     
    //             // console.log(this.banner_data)           
    //         },
    //         mounted:function(){
    //             // 初始化 swiper
    //             Initialization_swiper()
    //         },
    //         methods:{
    
    //         },
    //     })
    
    // },function(err){
    //     // alert("系统错误，请联系客服！")
    // }) 

    // // 公告
    // var fd = {"PageIndex":0}
    // get_data(fd,"/Home/GetMessage","get").then(function(res){
    //     new Vue({
    //         el:".horn_box",
    //         data:{
    //             Notice:res.Return_Data.PageData,//公告
    //         },
    //         created:function(){
    //             // console.log(this.Notice)
    //         },
    //         mounted:function(){
    //             // 初始化 swiper
    //             Initialization_swiper()
    //         },
    //         methods:{
    
    //         },
    //     })
    // },function(err){
    //     // alert("系统错误，请联系客服！")
    // })

    // // 预定
    // get_data("","/Home/ResterInfo_HomeShow","get").then(function(res){
    //     new Vue({
    //         el:".limit_time",
    //         data:{
    //            data:res,
    //         },
    //         created:function(){
    //             console.log(this.data)
    //         },
    //         mounted:function(){
    //             // var time= $.ajax({async: false}).getResponseHeader("Date");
    //             // alert(time)
    //             $.ajax({type:"OPTIONS",url:"/",complete:function(x){alert(x.getResponseHeader("Date"))}})
    //         },
    //         methods:{
    
    //         },
    //     })
    // },function(err){
    //     // alert("系统错误，请联系客服！")
    // })



    // 初始化  swiper
    
    
    function Initialization_swiper(){
        // banner
        var banner = new Swiper('.banner_box',{
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            loop:true,
            speed: 1000,//切换速度
            observer:true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            // 小圆点
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
        });

        // 公告
        var horn = new Swiper('.horn', {
            observer:true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            loop:true,
            direction: 'vertical',//垂直
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            simulateTouch : false,//禁止鼠标模拟
            allowTouchMove: false,//禁止触摸滑动
        });
        
        var fresh = new Swiper('.fresh_box', {
            observer:true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            slidesPerView: 3,
            spaceBetween : 5,
            freeMode: true,
        });

    }



})