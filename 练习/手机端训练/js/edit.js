var sex = document.getElementsByClassName("Sex-right")[0];
var box = document.getElementsByClassName("box")[0];
var po_li2 = document.getElementsByClassName("Popup-li2")[0];
var po_li3 = document.getElementsByClassName("Popup-li3")[0];

var n=null;

 sex.addEventListener('touchstart', function(e) {
 		this.style.background="#fff";
 		this.style.opacity="0.3";
// 		$(".Sex-right span").css("color","#000");
 	this.ontouchend=function(){
 		 box.style.display="block";
 		 this.style.background=""
 		 this.style.opacity="1";
// 		 $(".Sex-right span").css("color","");
 		 
 	}
    });
    
po_li2.ontouchstart=function(){
		po_li2.style.background="#5a5a5a";
		po_li2.style.opacity="0.5";
		po_li2.style.color="#fff";
	this.ontouchend=function(){
		box.style.display="none";
		po_li2.style.background="";
		po_li2.style.color="#000";
		po_li2.style.opacity="1";
		$(".Sex-right span").text("男");
	}	
  }

po_li3.ontouchstart=function(){
		po_li3.style.opacity="0.5";
   		po_li3.style.background="#5a5a5a";
   		po_li3.style.color="#fff";
	this.ontouchend=function(){
		box.style.display="none";
		po_li3.style.background="";
		po_li3.style.color="#000";
		po_li3.style.opacity="1";
		n=0;
		$(".Sex-right span").text("女");
		
	}
 }

//if (n) {
//	$(".Sex-right span").text("男");
//} else{
//	$(".Sex-right span").text("女");
//}