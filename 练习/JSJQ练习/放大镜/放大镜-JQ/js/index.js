// window.onload=function() {

// //获取对象
// var box = document.getElementsByClassName('box')[0];
// var original = document.getElementsByClassName("original")[0];
// var large = document.getElementsByClassName("large")[0];
// var block = original.children[1];
// var large_img = large.children[0];
// var list_img = document.getElementsByClassName("list")[0].children;

// //鼠标移入
// original.onmouseover = function(){
// 	block.style.display = "block";
// 	large.style.display = "block";
// 	//方块位置
// 	original.onmousemove = function(e){
// 		var X = e.clientX-box.offsetLeft-50;
// 		var Y = e.clientY-box.offsetTop-50;
// 		//判断
// 		if (X<=0) {
// 			X=0;
// 		}else if(X>=250){
// 			X=250;
// 		};
// 		if (Y<=0) {
// 			Y=0;
// 		}else if(Y>=250){
// 			Y=250;
// 		};
// 		block.style.left=X + "px";
// 		block.style.top=Y + "px";
// 	//大图移动
// 	var pre = original.offsetWidth/large_img.offsetWidth;
// 	large_img.style.left=-(1+pre)*X+"px";
// 	large_img.style.top=-(1+pre)*Y+"px";
// 	}
// }
// //鼠标移出
// original.onmouseout = function(){
// 	block.style.display = "none";
// 	large.style.display = "none";
// }

// // 遍历列表图片
// for (var i = 0; i < list_img.length; i++) {
// 		(function(i){
// 			var img = list_img[i];
// 		img.onmousemove = function(){
// 			original.children[0].src = "./img/img"+(i+1)+".jpg"	;
// 			large_img.src = "./img/img"+(i+1)+".jpg";
// 		}
// 		})(i);
// };
// }


$(".original").mouseover(function(e){
	$(".block").css("display","block");
	$(".large").css("display","block");
	console.log($(".large img"))

	$(".original").mousemove(function(e){
		var a = $(".box").offset();
		var X = e.clientX-a.left-50;
		var Y = e.clientY-a.top-50;
		//判断
		if (X<=0) {
			X=0;
		}else if(X>=250){
			X=250;
		};
		if (Y<=0) {
			Y=0;
		}else if(Y>=250){
			Y=250;
		};

		$(".block").css("left",X+"px");
		$(".block").css("top",Y+"px");

		var pre = $(".original img").width()/$(".large img").width();
		$(".large img").css("left",-(1+pre)*X+"px")
		$(".large img").css("top",-(1+pre)*Y+"px")
	})

$(".original").mouseout(function(){
	$(".block").css("display","none");
	$(".large").css("display","none");
})	

	// // 遍历列表图片
for (var i = 0; i < $(".list").children().length; i++) {
		(function(i){
			var img = $(".list").children()[i];
		img.onmousemove = function(){
			$(".original img").attr("src","./img/img"+(i+1)+".jpg");
			$(".large img").attr("src","./img/img"+(i+1)+".jpg");
		}
		})(i);
	};
})