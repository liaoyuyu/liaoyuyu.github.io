window.onload=function() {

//获取对象
var box = document.getElementsByClassName('box')[0];
var original = document.getElementsByClassName("original")[0];
var large = document.getElementsByClassName("large")[0];
var block = original.children[1];
var large_img = large.children[0];
var list_img = document.getElementsByClassName("list")[0].children;

//鼠标移入
original.onmouseover = function(){
	block.style.display = "block";
	large.style.display = "block";
	//方块位置
	original.onmousemove = function(e){
		var X = e.clientX-box.offsetLeft-50;
		var Y = e.clientY-box.offsetTop-50;
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
		block.style.left=X + "px";
		block.style.top=Y + "px";
	//大图移动
	var pre = original.offsetWidth/large_img.offsetWidth;
	large_img.style.left=-(1+pre)*X+"px";
	large_img.style.top=-(1+pre)*Y+"px";
	}
}
//鼠标移出
original.onmouseout = function(){
	block.style.display = "none";
	large.style.display = "none";
}

// 遍历列表图片
for (var i = 0; i < list_img.length; i++) {
		(function(i){
			var img = list_img[i];
		img.onmousemove = function(){
			original.children[0].src = "./img/img"+(i+1)+".jpg"	;
			large_img.src = "./img/img"+(i+1)+".jpg";
		}
		})(i);
};

	// var im1 = document.getElementsByClassName("im1")[0];
	// var im2 = document.getElementsByClassName("im2")[0];
	// var im3 = document.getElementsByClassName("im3")[0];
	// im1.onmouseover = function(){
	// 	original.children[0].src="./img/img1.jpg";
	// 	large_img.src="./img/img1.jpg";
	// }
	// im2.onmouseover = function(){
	// 	original.children[0].src="./img/img2.jpg";
	// 	large_img.src="./img/img2.jpg";
	// }
	// im3.onmouseover = function(){
	// 	original.children[0].src="./img/img3.jpg";
	// 	large_img.src="./img/img3.jpg";
	// }
}