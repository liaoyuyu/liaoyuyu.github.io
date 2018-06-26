
window.onload =function(){

var banner = document.getElementsByClassName("banner")[0];
var obj={
		url:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg'],
		auto:false,
		}
var mybanner = new Banner(banner,obj);




function Banner (el,obj) {
	this.obj = obj;
	var ulobj = document.createElement("ul");
	var circular = document.createElement("div");
	var btnleft = document.createElement("span");
	var btnright = document.createElement("span");
	btnleft.className = "btn left";
	btnright.className = "btn right";
	circular.className="circular";
	var len = this.obj.url.length;
	for (var i = 0; i < len; i++) {
		ulobj.innerHTML+=`<li><img src=${this.obj.url[i]}></li>`;
		circular.innerHTML+=`<span></span>`;
	}
	btnleft.innerHTML =`<`;
	btnright.innerHTML =`>`;
	el.appendChild(ulobj);
	el.appendChild(circular);
	el.appendChild(btnleft);
	el.appendChild(btnright);
	var a = circular.children;
	var postion = 0;	
	var timer = setInterval(play,2000);
	var index = 0;
	a[0].classList.add("back");

	// 点击小圆点准备
	for (let i = 0; i < ulobj.children.length; i++) {
		ulobj.children[i].index = i;
	};

	el.onmouseover = function(){
		clearInterval(timer);
	}
	el.onmouseleave = function(){
		timer = setInterval(play,2000);
	}
	btnleft.onclick = function(){
		play(1);
	}
	btnright.onclick = function(){
		play(0);
	}


	//点击小圆点
	for (let i = 0; i < a.length; i++) {
		// console.log(ulobj.children[i])
		a[i].onmousemove = function(){
			set_circular(i);
		}
	}





	// 动画
	function play(n){
		if (n) {
			// console.log("左滑")
			index--;
			set_index(index);
			ulobj.classList.remove("animation");
			ulobj.insertBefore(ulobj.children[ulobj.children.length-1],ulobj.firstChild);
			ulobj.style.marginLeft = -el.clientWidth+"px";
			setTimeout(function(){
				ulobj.classList.add("animation");
				ulobj.style.marginLeft = 0+"px";
			},20)
		}else{
			// console.log("右滑")
			index++;
			set_index(index);
			ulobj.classList.add("animation");
			ulobj.style.marginLeft = -el.clientWidth+"px";

			setTimeout(function(){
				ulobj.classList.remove("animation");
				ulobj.appendChild(ulobj.firstChild);
				ulobj.style.marginLeft = 0+"px";
			},1000)
		}

	}



// 点击小圆点
function set_circular(index){
	var flg = 0;
	for (let i = 0; i < ulobj.children.length; i++) {
			if (index == ulobj.children[i].index) {
				flg = i;
				break;
			};
		};	
	for (let i = 0; i < flg; i++) {
		ulobj.appendChild(ulobj.firstChild);
	};
	let n = index;
	set_index(n);

}



function set_index(index){
	if (index > ulobj.children.length-1) {
		index =0;
	};
	if (index < 0) {
		index =ulobj.children.length-1;
	};

	for (let i = 0; i < ulobj.children.length; i++) {
		a[i].classList.remove("back");
	};
	a[index].classList.add("back");
}

}
}