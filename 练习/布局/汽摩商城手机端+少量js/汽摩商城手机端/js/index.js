window.onload=function(){

var timer = null;
var ulobj = document.getElementsByClassName('banner-ul')[0];
var liobj = ulobj.children;
var n=null;//滑动方向
var touch;
var len = liobj.length;
var X = null;
var click_X = null;
var move_X = null;
var circular = document.getElementsByClassName("banner-circular")[0].children;

for(let i = 0;i<liobj.length;i++){
	liobj[i].index = i;
}
for (let i = 0; i < circular.length; i++) {
	circular[i].index = i;
};

// 点搜索跳转
$(".tit-input input").focus(function(){
	window.location.href = "search.html";  
});


//////////////////// nav  跳转  //////////////////////////////
// 分类
$(".buttom-li2").click(function(){
	window.location.href = "classification.html";  
});

// 购物车
$(".buttom-li3").click(function(){
	window.location.href = "shopcar.html";  
});
// 我的
$(".buttom-li4").click(function(){
	window.location.href = "my.html";  
});


//////////////////////top 返回顶部/////////////////////////////////////////
// 滚动超过500就显示返回顶部
window.onscroll = function () {
	  let srcoll = document.documentElement.scrollTop;
	  // console.log(srcoll)
	  if(srcoll>=500){
	  	$(".top-button").css("display", "block");
	  }else{
	  	$(".top-button").css("display", "none");
	  }
}
// 点击返回顶部
$(".top-button").click(function(){
	// $('html,body').animate({scrollTop: '0px'}, 800); 
	// let srcoll = document.documentElement;
	 $("html,body").animate({scrollTop:"0px"},500);
})












//////////////////////////////////////////////////////////////////

// 轮播
timer=setInterval(play,4000);

// 触摸暂停
$(".banner-ul").on('touchstart',function(e){
	clearInterval(timer);
	touch = e.targetTouches[0];//取得第一个touch的坐标值
	click_X = touch.pageX;
	// console.log(click_X);
})
	//滑动
$(".banner-ul").on("touchmove",function(e){
	clearInterval(timer);
	touch = e.targetTouches[0];
	move_X = touch.pageX;
	// console.log(click_X-move_X)
})

// 触摸离开
$(".banner-ul").on('touchend',function(){
		X = click_X-move_X;
		// 正数为向左滑,负数为向右滑
		if (X<=-80) {
			direction();
		}else if(X>=80){
			play();
		}
	timer=setInterval(play,4000);
})

//////////// 小圆点 ////////////////////

// 点击小圆点
$(".banner-circular li").on('touchstart',function(){
	// console.log($(this).index())
	
	this.style.background = "#f76824";
})



///////////////////方法//////////////////////////

// 自动播放
function play(){
	ulobj.classList.add("animate");
    ulobj.style.marginLeft=-7.5+"rem";
    setTimeout(function(){
      ulobj.classList.remove("animate");
      ulobj.appendChild(liobj[0]);
      ulobj.style.marginLeft=0;
    },1000)
}


// 方向滑动
function direction(){
	ulobj.classList.remove("animate");
	ulobj.insertBefore(liobj[len-1],liobj[0]);
	ulobj.style.marginLeft=-7.5+"rem";
	setTimeout(function(){
		ulobj.classList.add("animate");
		ulobj.style.marginLeft=0;
	})
}


}