window.onload=function(){
	var bannerbox = document.getElementsByClassName("bannerbox")[0];
	var ulobj = bannerbox.getElementsByTagName('ul')[0];
	var liobj = ulobj.children;
  var next = bannerbox.getElementsByClassName("rt")[0];
  var previous = bannerbox.getElementsByClassName("lf")[0];
  var len = liobj.length;
  var n=0;

  var temp=setInterval(moveleft,2000);

//向右
  previous.onmousemove=function(){
    clearInterval(temp);
  }
  previous.onmouseleave=function(){
    temp=setInterval(moveleft,2000);
  }
  previous.onclick=function(){
    moveright();
  }

// 向左
  next.onmousemove=function(){
    clearInterval(temp);
    // console.log(1);
  }
  next.onmouseleave=function(){
   temp=setInterval(moveleft,2000);
  }

  next.onclick=function(){
    moveleft();
  }



//向前
   function moveleft(){
    ulobj.classList.add("animate");
    ulobj.style.marginLeft=-1000+"px";
    
    setTimeout(function(){
      ulobj.classList.remove("animate");
      ulobj.appendChild(liobj[0]);
      ulobj.style.marginLeft=0;
    },1000)
  }

// 向后
  function moveright(){
    ulobj.classList.remove("animate");
    ulobj.insertBefore(liobj[len-1],liobj[0]);
    ulobj.style.marginLeft=-1000+"px";
    setTimeout(function(){
      ulobj.classList.add("animate");
      ulobj.style.marginLeft=0+"px";
    },100)
  }
}














