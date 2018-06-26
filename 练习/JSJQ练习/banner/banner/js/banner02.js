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
	ulobj.innerHTML+= `<li><img src=${this.obj.url[len-1]}></li>`;
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
	ulobj.innerHTML+= `<li><img src=${this.obj.url[0]}></li>`;
	ulobj.style.width = ulobj.children.length*1000+"px";
	var a = circular.children;
	a[0].classList.add("back");
	var index = 0;
	for (let i = 0; i < ulobj.children.length; i++) {
		ulobj.children[i].index = i;
	};
	var ti = setInterval(function(){
	var target = ulobj.offsetLeft-1000;
		play(target)
	},2500);

el.onmousemove = function(){
	clearInterval(ti)
}
el.onmouseleave = function(){
	ti = setInterval(function(){
	var target = ulobj.offsetLeft-1000;
		play(target);
	},2500);
}

btnright.onclick = function(){
	var target = ulobj.offsetLeft-1000;
	play(target);
}


function play(target){
	// A = A + (B - A) / 10
	clearInterval(timer);
	var timer = setInterval(function(){
		var val = target-ulobj.offsetLeft;
		ulobj.style.marginLeft = ulobj.offsetLeft + val/10 + "px";
		if (val >=-5) {
			ulobj.style.marginLeft = target+"px";
			clearInterval(timer);
		};
		// console.log((ulobj.children.length-2)*el.offsetWidth)
		// console.log(ulobj.offsetLeft)
		if (ulobj.offsetLeft == -(ulobj.children.length-1)*el.offsetWidth) {
			ulobj.style.marginLeft = -1000+"px";
		};
		// console.log(val)
	},20)

	if (index == 5) {
			index = 0;
		}else{
			index++;
		}
		for (let i = 0; i <a.length; i++) {
			a[i].classList.remove("back");
		};
		a[index].classList.add("back");



	// index++;
	// console.log(index)
	// ulobj.classList.add("animation");
	// ulobj.style.marginLeft = -1000*index+"px";
	// if (index >= 8) {
	// 	index = 1;
	// 	ulobj.classList.remove("animation");
	// 	console.log(ulobj.className);
	// 	ulobj.style.marginLeft = -1000+"px";
	// };
 //  }




	}
  }
}