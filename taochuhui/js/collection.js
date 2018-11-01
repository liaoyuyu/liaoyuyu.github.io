$(function(){


    // get_data("","Advertisement/GetWebIndexData","get").then(function(res){

    // },function(err){
    //     alert("系统错误，请联系客服！")
    //     console.log(err)
    // })

    new Vue({
        el:"#collection_box",
        data:{
            ad:1,//切换管理或者取消按钮
            all:1,//判断全选还是不全选//1代表全选，0代表取消全选
        },
        created:function(){
            
        },
        mounted:function(){

        },
        methods:{
            // 点击管理
            Administration(){
                this.ad = 0;
                $(".collection_box").removeClass("collection_box_anim")
                $(".collection_box").css("left",0)
                set_delete(this.ad)
            },
            // 点击取消
            cancel(){
                this.ad = 1;
                $(".circular").removeClass("circular_obj")
                set_delete(this.ad)
            },
            // 单选
            single_election(e){
                var el = e.target
                // 如果为0，说明全选了
                if(this.all == 0){
                    this.all = 1
                    $(".whole").removeClass("circular_obj")
                }
                // 判断有没有类，有就添加
                if(el.getAttribute("class")=="circular"){
                    el.classList.add("circular_obj")
                    // 判断是否全都选择了，全选了，就把全选勾上，没有不动
                    for(var i = 0;i<$(".collection_box").length;i++){
                        if(!$(".collection_box").eq(i).find(".circular_box").find(".circular").hasClass("circular_obj")){
                            return;
                        }
                    }
                    this.all = 0;
                    $(".whole").addClass("circular_obj")
                }else{
                    el.classList.remove("circular_obj")
                }
            },
            // 全选
            total_selection(){
                if(this.all){
                    $(".con .circular").addClass("circular_obj")
                    $(".whole").addClass("circular_obj")
                    this.all = 0
                }else{
                    $(".con .circular").removeClass("circular_obj")
                    $(".whole").removeClass("circular_obj")
                    this.all = 1
                }
            },
        },
    })


    // 向右滑动，滑出删除圆圈，并弹出底部全选 删除
    function set_delete(n){
        if(!n){
            // 点击管理  禁止向左滑动
            $(".collection_box").off("touchstart touchmove touchend")

            $(".similar").animate({right:"1.1"+"rem"},150)
            $(".edit_box").animate({bottom:"0"+"rem"},150)
            $(".collection_box").animate({left:"0.8"+"rem"},150)
        }else{
            move_box()
            $(".similar").animate({right:"0.3"+"rem"},150)
            $(".edit_box").animate({bottom:"-1"+"rem"},150)
            $(".collection_box").animate({left:"0"+"rem"},150)
        }
    }



    function move_box(){
        // 向左滑动，滑出删除按钮
        var this_pagex = null;
        var pagex = null;

        $(".collection_box").on("touchstart",function(e){
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
            // console.log(this_pagex-pagex)
            // 判断移动距离//乘100是应为要把rem转换为px（我的比例为100）
            // if(this_pagex-pagex<=-1*100){
            //     $(this).css("left",-1+"rem")
            //     return;
            // }
            // if(this_pagex-pagex>=0){
            //     $(this).css("left",0+"rem")
            //     return;
            // }
            // $(this).css("left",(this_pagex-pagex)/100+"rem")
        })

        $(this).on("touchend",function(e){
            // console.log(this_pagex-pagex)
            // 判断拖动了多少距离，来判断是否执行自动滑动动画
            var move = this_pagex-pagex
            if(move <= -0.3*100){
                $(this).addClass("collection_box_anim")
                $(this).css("left",-1+"rem")
            }
            if(move >=0.3*100){
                $(this).addClass("collection_box_anim")
                $(this).css("left",0+"rem")
            }

            
        })

        })
    }
    
    move_box()
})