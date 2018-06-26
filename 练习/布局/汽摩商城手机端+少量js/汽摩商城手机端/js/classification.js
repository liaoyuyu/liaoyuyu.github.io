window.onload=function(){


// 点搜索跳转
$(".tit-input input").focus(function(){
	window.location.href = "search.html";  
});

// nav  跳转
// 主页
$(".buttom-li1").click(function(){
	window.location.href = "index.html";  
});

// 购物车
$(".buttom-li3").click(function(){
	window.location.href = "shopcar.html";  
});
// 我的
$(".buttom-li4").click(function(){
	window.location.href = "my.html";  
});



}