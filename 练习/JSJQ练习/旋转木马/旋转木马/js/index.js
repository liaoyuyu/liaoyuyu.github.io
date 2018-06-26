window.onload = function() {

	var json = [
		{	//1
			width: 138,	//逗号分隔  逗号分隔  逗号分隔
			height: 210,
			top:150,
			marginLeft: -69,
			zIndex: 4,
		},
		{	//2
			width: 120,
			height: 170,
			top: 175,
			marginLeft: -350,
			zIndex: 3,
		},
		{	//3
			width: 58,
			height: 93,
			top: 235,
			marginLeft: -315,
			blur:2,

			zIndex: 2,
		},
		{	//4
			width: 36,
			height: 50,
			marginLeft: -18,
			top: 250,
			blur:3,
			zIndex: 1,
		},
		{	//5
			width: 58,
			height: 93,
			top: 235,
			marginLeft: 257,
			blur:2,
			zIndex: 2,
		},
		{	//6
			width: 120,
			height: 170,
			top: 175,
			marginLeft: 225,
			zIndex: 3,
		}
	];

var box_li = document.getElementsByClassName('box-ul')[0].children;
var timer = null;
var n = true;

 timer = setInterval(fu,3000);


 	// 鼠标放上去停止移动
	$(".box-ul li").hover(function(){
		clearInterval(timer);
	},function(){
		n=true;
		timer = setInterval(fu,3000);
	})

	// 点击移动
	$(".box-ul li").click(function(){
		// 判断左边li的位置，在执行操作
		if(parseInt(this.style.marginLeft)==-350){
			clearInterval(timer);
			n=false;
			fu();
		}
		
	});
	$(".box-ul li").click(function(){
		// 判断右边li的位置来执行操作
		if (parseInt(this.style.marginLeft)==225) {
			clearInterval(timer);
			n=true;
			fu();
		};
	});
   

	function fu(){
		if (n) {
			// 先把数组最后一项放前面，之后在删除最后一项
			 json.unshift(json.pop());
		}else{
			// 先把数组第一项放最后，在删除第一项
			 json.push(json.shift());
		}
		for (var i = 0; i < json.length; i++) {
			// 使用jq的动画函数，简单点
			$(".box-ul li").eq(i).animate({
				// css的width:   json[i]中的width
				width:json[i].width,
				height:json[i].height,
				top:json[i].top,
				marginLeft:json[i].marginLeft,
				zIndex:json[i].zIndex,
			},2000);
		};
	}
}