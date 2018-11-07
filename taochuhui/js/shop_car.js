$(function(){









    
    move_box()

    function move_box(){
        // 向左滑动，滑出删除按钮
        var this_pagex = null;
        var pagex = null;

        $(".car_list").on("touchstart",function(e){
            // 初始化
            this_pagex = 0;
            pagex = 0;

            // 计算点下去是  鼠标到这个盒子左边距的距离
            var positionDiv = $(this).offset();
            pagex = e.originalEvent.targetTouches[0].pageX
            // console.log(pagex)

        $(this).on("touchmove",function(e){
            // 移动中的鼠标的位置
            this_pagex = e.originalEvent.targetTouches[0].pageX
        })

        $(this).on("touchend",function(e){
            // console.log(this_pagex-pagex)
            // 判断拖动了多少距离，来判断是否执行自动滑动动画
            var move = this_pagex-pagex
            if(move <= -0.3*100){
                // $("car_list").addClass("car_list_anim")
                $(this).css("left",-1+"rem")
            }
            if(move >=0.3*100){
                // $("car_list").addClass("car_list_anim")
                $(this).css("left",0+"rem")
            }            
            })
        })
        // $("car_list").removeClass("car_list_anim")
    }
})