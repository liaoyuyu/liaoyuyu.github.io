$(function(){
    // 监听物理返回//物理返回就返回进入页
    if(window.history && window.history.pushState) {  
        $(window).on('popstate', function() {  
            var hashLocation = location.hash;  
            var hashSplit = hashLocation.split("#!/");  
            var hashName = hashSplit[1];  
            if(hashName !== '') {  
                var hash = window.location.hash;  
                if(hash === '') {  
                   window.location.href = "../my.html"
                }  
            }  
        });  
    }  


    new Vue({
        el:".order",
        data:{
            data:"",
        },
        created:function(){

        },
        mounted:function(){
            this.get_url_index()
        },
        methods:{
            // 获取链接地址传过来的值
            get_url_index:function(){
                var url = document.URL
                console.log(url)
                url = url.substr(url.lastIndexOf("?")+1)
                this.click_nav(url)
            },
            // 切换导航样式 和 数据
            click_nav:function(index){
                // 改变当前URL 参数
                var target_url = window.location.href; 
                var Now_url = (target_url.substr(0,target_url.lastIndexOf("?")+1)+index);
                // console.log(Now_url)
                history.pushState({},"",Now_url)

                for(var i = 0;i<$(".order_li").length;i++){
                    $(".order_li").eq(i).removeClass("order_nav_select")
                }
                $(".order_li").eq(index).addClass("order_nav_select")

                // 请求数据
                // get_data("","Advertisement/GetWebIndexData","get").then(function(res){
    
                // },function(err){
                //     alert("系统错误，请联系客服！")
                //     // console.log(err)
                // })
            },
        },
    })





})