// 按返回键返回  要刷新
window.addEventListener('pageshow', function(event) {
    //event.persisted属性为true时，表示当前文档是从往返缓存中获取
    if (event.persisted) {
        location.reload();  
    }
});


$(function(){
    localStorage.switch_class = 1//默认模式大图模式

    // get_data("","Advertisement/GetWebIndexData","get").then(function(res){

    // },function(err){
    //     alert("系统错误，请联系客服！")
    //     console.log(err)
    // })


    new Vue({
        el:"#classify_con",
        data:{
            // data:res
            switch_class:localStorage.switch_class,//切换类(改变模式)
            none:1,//筛选显示
        },
        created:function(){
            // console.log(this.data)
        },
        mounted:function(){
            // 初始化 swiper
            Initialization_swiper()

            // 监听滚动事件
            window.addEventListener('scroll', this.handleScroll)
        },
        methods:{
            // 滚动隐藏头部header
            handleScroll:function(){
                this.none = 1;
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                fixed(scrollTop)
            },
            // 点击导航，切换样式
            click_nav:function(e){
                this.none = 1;
                var el = e.target
                for(var i = 0;i<$(".top_nav_p").length;i++){
                    $(".top_nav_p").eq(i).removeClass("click_style")
                }
                el.className =el.className+" click_style"
            },
            // 筛选
            screen_down:function(){
                this.none = !this.none
            },
            // 切换大图和列表模式
            switchClass:function(){
                this.none = 1
                this.switch_class = !this.switch_class
                localStorage.switch_class = !localStorage.switch_class
            }
        },
    })


    // 初始化swiper
    function Initialization_swiper(){
        var top_nav = new Swiper('.top_nav',{
            observer:true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            slidesPerView:4.5,//显示多少个
            slideToClickedSlide:true,//点击 跳转到相应solid
        });
    }

    // 让顶部导航  变成 fixed
    function fixed(scrTop){
        var height = $(".classify_header").height()
        if(scrTop>height){
            $(".calssify_top_function").addClass("fixed")
        }else{
            $(".calssify_top_function").removeClass("fixed")
        }
    }



})