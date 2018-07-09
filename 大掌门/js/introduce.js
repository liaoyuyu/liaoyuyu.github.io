$(function(){
    var json = [
        {top: 0,left: 0,Zindex: 1,},
        {top: 15,left: 30,Zindex: 2,},
        {top: 30,left: 60,Zindex: 3,},
        {top: 45,left: 90,Zindex: 4,},
        {top: 60,left: 120,Zindex: 5,},
    ]


    var timer = setInterval(play,2000)
    var n = 1;
    var control = false;

    // hover
    $(".banner_btn").hover(function(){
		clearInterval(timer);
	},function(){
		n=1;
		timer = setInterval(play,2000);
	})


    // 按钮点击
    $(".banner_left").click(function(){
        n = 0;
        play()
    })
    $(".banner_right").click(function(){
        n = 1;
        play()
    })



    function play(){
        if(control){
            return;
        }
        control = true;
        if(n){
            json.push(json.shift());
        }else{
            json.unshift(json.pop());
        }
       
        for (var i = 0; i < json.length; i++) {
			// 使用jq的动画函数，简单点
			$(".banner li").eq(i).animate({
				// css的width:   json[i]中的width
                top:json[i].top,
                left:json[i].left,
				zIndex:json[i].Zindex,
            },1000,function(){
                control = false;
                console.log(1)
            });
        };
    }

})

