$(function(){

    var height = document.body.clientHeight;
    var top_height = $(".base_details_header").outerHeight()+$(".product_detailed_con_nav").outerHeight()
    var footer_height = $(".footer").outerHeight();
    
    $(".product_detailed_con .slide_transverse").css("min-height",height-top_height-footer_height+"px")


    var list_height = $(".slide_list").outerHeight()
    $(".product_more_slide").css("height",list_height+"px")


    new Vue({
        el:"#product_detailed_box",
        data:{
            data:"",
            top_nav:["商品介绍","图文详情","基地信息"],
            top_nav_index:0,//切换顶部nav 的选择样式
            product_detailed_swiper:"",
        },
        created:function(){

        },
        mounted:function(){
            // 初始化 swiper
            this.Initialization_swiper()

             // 监听滚动事件
             window.addEventListener('scroll', this.pull_up)
        },
        methods:{
            Initialization_swiper:function(){
                var _this = this
                this.product_detailed_swiper = new Swiper('.product_detailed_swiper',{
                    observer:true, //修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
                    autoHeight:true,//自适应高度
                    on: {
                        transitionEnd: function(event){
                            // alert(_this.product_detailed_swiper.activeIndex)
                            _this.change_style(_this.product_detailed_swiper.activeIndex)
                        },
                      },
                });
                var product_banner_swiper = new Swiper('.product_banner_swiper',{
                    observer:true, //修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
                    
                    pagination: {
                        el: '.swiper_point',
                        clickable: true,
                    },
                });
                var base_shop_swiper = new Swiper('.base_shop_swiper',{
                    observer:true, //修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
                    slidesPerView:3.5,//显示多少个
                    spaceBetween:5,//间隔
                    freeMode:true,//滑动后，不贴合边缘
                });
            },
            // 点击头部nav 切换
            switch_slide:function(index){
                this.change_style(index)
                this.product_detailed_swiper.slideTo(index, 200, false);
            },
            // 改变样式
            change_style:function(index){
                $(window).scrollTop(0)
                this.top_nav_index = index
            },
            // 上拉  切换页面
            pull_up:function(){
                // console.log(1)
                var _this = this
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                var scrollHeight = $(".first_slide").height(); //整个文档的高度
                var windowHeight  = $(window).height();
                var hei = $(".product_detailed_header").outerHeight()+$(".product_detailed_con_nav").outerHeight()+$(".footer").outerHeight();
                windowHeight = windowHeight-hei
                // console.log(scrollTop+windowHeight)
                // console.log(scrollHeight)
                console.log(windowHeight+scrollTop == scrollHeight)
                if(windowHeight+scrollTop == scrollHeight){
                    var pagey = null;
                    var this_pagey = null;
                    $(".first_slide").on("touchstart",function(e){
                        // 初始化
                        this_pagey = 0;
                        pagey = 0;
        
                        pagey = e.originalEvent.targetTouches[0].pageY
                        // console.log(pagey)
                        $(this).on("touchmove",function(e){
                        // 移动中的鼠标的位置
                            this_pagey = e.originalEvent.targetTouches[0].pageY
                            // console.log(this_pagey)
                            $(this).on("touchend",function(e){
                                console.log(pagey-this_pagey)
                                if(pagey-this_pagey>50){
                                    // alert("切换到第二页")
                                    _this.switch_slide(1)
                                    // _this.change_style(1)
                                }
                                $(this).unbind("touchstart touchmove touchend")
                            })
                        })
                        
                    })
                }
            },
        },
    })








})