$(function(){
    var money = 0;

    // 单选
    $(".choice_circle").click(function(){
        if($(this).hasClass("choice_circle_selection")){
            $(this).removeClass("choice_circle_selection")
            // console.log($(this).parent().siblings(".shop_car_product_con").find(".shop_car_product_con_right_money").text())
            var reduce_money = ($(this).parent().siblings(".shop_car_product_con").find(".shop_car_product_con_right_money").text()).slice(1,)
            money -= parseFloat(reduce_money)
            $("#total_money").text("￥"+money.toFixed(2))

            $(".all_choose_circular").removeClass("choice_circle_selection")
        }else{
            $(this).addClass("choice_circle_selection")
            var plus_money = ($(this).parent().siblings(".shop_car_product_con").find(".shop_car_product_con_right_money").text()).slice(1,)
            money += parseFloat(plus_money)
            $("#total_money").text("￥"+money.toFixed(2))

            for(var i = 0; i<$(".shop_car_product_list").find(".choice_circle").length;i++){
                if(!$(".shop_car_product_list").eq(i).find(".choice_circle").hasClass("choice_circle_selection")){
                    return;
                }
            }
        $(".all_choose_circular").addClass("choice_circle_selection")            
        }

    })

    // 全选
    $(".all_choose_circular").click(function(){
        for(var i = 0;i<$(".shop_car_product_list").find(".choice_circle").length;i++){
            if(!$(".shop_car_product_list").eq(i).find(".choice_circle").hasClass("choice_circle_selection")){
                $(".choice_circle").addClass("choice_circle_selection");
                $(".all_choose_circular").addClass("choice_circle_selection")
                money = 0;
                for(var j = 0;j<$(".shop_car_product_list").find(".shop_car_product_con_right_money").length;j++){
                    // console.log($(".shop_car_product_list").eq(j).find(".shop_car_product_con_right_money").text())
                    var single_money = ($(".shop_car_product_list").eq(j).find(".shop_car_product_con_right_money").text().slice(1,))
                    single_money = parseFloat(single_money)
                    money += single_money
                }
                // console.log(money)
                $("#total_money").text("￥"+money.toFixed(2))
                return;
            }
            // console.log($(".shop_car_product_list").eq(i).find(".choice_circle").hasClass("choice_circle_selection"))
        }
        $(".choice_circle").removeClass("choice_circle_selection");
        $(".all_choose_circular").removeClass("choice_circle_selection")
        money = 0;
        $("#total_money").text("￥"+money)
        
    })



    // 数量加减
    // 减
    $(".plus_but").click(function(){
        $(".shop_tips").text("最低数量为1颗商品")
        $(".shop_tips").addClass("shop_tips_eject")
        setTimeout(function(){
            $(".shop_tips").removeClass("shop_tips_eject")
        },2000)
    })

     // 加
     $(".reduce_but").click(function(){
        $(".shop_tips").text("本商品购买数量不能超过1颗")
        $(".shop_tips").addClass("shop_tips_eject")
        setTimeout(function(){
            $(".shop_tips").removeClass("shop_tips_eject")
        },2000)
    })


    // 结算
    var Jump = false
    $(".settlement_but").click(function(){
        for(var i = 0;i<$(".shop_car_product_list").length;i++){
            if($(".shop_car_product_list").eq(i).find(".choice_circle").hasClass("choice_circle_selection")){
               Jump = true
            }
        }
        if(Jump){
            window.location.href='../confirm_order.html'
        }else{
            $(".settlement_popup_big_box").css("display","block")
        }
    })

    // 关闭 最低选择一件商品弹出框
    $(".settlement_popup_but").click(function(){
        setTimeout(function(){
            $(".settlement_popup_big_box").css("display","none")
        },200)
        
    })


    // 滑动 出现删除按钮
    var click_x = null;
    var move_x = null;
    var slide_state = false
    $(".shop_car_product_list").on("touchstart",function(e){
        // console.log(e)
        click_x =  e.originalEvent.changedTouches[0].pageX;
    })
    $(".shop_car_product_list").on("touchmove",function(e){
        slide_state = true
        // console.log(e)
        move_x = e.originalEvent.changedTouches[0].pageX;
    })
    $(".shop_car_product_list").on("touchend",function(){
        if(slide_state){
            // console.log(click_x-move_x)
            if((click_x-move_x)<= -0.3*100){
                $(this).css("left",0+"rem")
            }
            if((click_x-move_x)>= 0.3*100){
                $(this).css("left",-1+"rem")
            }
            slide_state = false
        }
    })

})