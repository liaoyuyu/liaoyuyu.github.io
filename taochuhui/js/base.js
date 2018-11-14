$(function(){

    new Vue({
        el:"#base_vue",
        data:{

        },
        created:function(){

        },
        mounted:function(){
              // 初始化 swiper
              Initialization_swiper()
        },
        methods:{
            slide_click:function(e){
                var el = e.target;
            }
        },
    })


    // 初始化 swiper
    function Initialization_swiper(){
        var base_nav = new Swiper('#base_nav',{
            observer:true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            slidesPerView:4,//显示多少个
            freeMode:true,//滑动后，不贴合边缘
            slideToClickedSlide:true,//点击过渡到当前slide
        });
    }


    // // 导航滑动到顶部时，导航固定定位
    // var distance_top =  $(".base_nav").offset().top//元素到顶部的距离
    // $(window).scroll(function(){
    //     var scr_distance = $(window).scrollTop()//滚动的距离
    //     if(scr_distance >= distance_top){
    //         $(".base_nav").addClass("base_nav_top")
    //         $(".prop_up").addClass("prop_up_up")
    //     }else{
    //         $(".base_nav").removeClass("base_nav_top")
    //         $(".prop_up").removeClass("prop_up_up")
    //     }
    // })


})