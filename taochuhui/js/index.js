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
    // get_data("","Advertisement/GetWebIndexData","get").then(function(res){
       
    // },function(err){
    //     alert("系统错误，请联系客服！")
    //     // console.log(err)
    // })


    new Vue({
        el:"#index_con",
        data:{
            data:res
        },
        created:function(){
            console.log(this.data)
            if(this.data.Return_ID == 999){
                alert("系统错误，请联系客服！")
            }
        },
        mounted:function(){
            // 初始化 swiper
            Initialization_swiper()
        },
        methods:{

        },
    })

    

    // 初始化  swiper
    function Initialization_swiper(){
        var banner = new Swiper('.banner_box',{
            autoplay: {
                observer:true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                speed:1000,//切换速度
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            loop:true,
        });
        
        var fresh = new Swiper('.fresh_box', {
            observer:true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            slidesPerView: 3,
            spaceBetween : 5,
            freeMode: true,
        });
        
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
            // on:{
            //     slideChangeTransitionStart: function(){//开始过渡时执行
            //         _this.get_index()
            //     }
            // },
        });
    }



})