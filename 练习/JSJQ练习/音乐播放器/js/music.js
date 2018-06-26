
window.onload=function(){
	var songList=[112,113,114]
	ininMusic(songList);
}

function ininMusic(songList){
	
var mu = document.getElementById("music");
var stop = document.getElementsByClassName("stop")[0];
var upper = document.getElementsByClassName("upper")[0];
var lower = document.getElementsByClassName("lower")[0];
var jindutiao = document.getElementsByClassName("jindutiao")[0];
var jindu_back = document.getElementsByClassName("jindutiao-back")[0];
var yuan = document.getElementsByClassName("circular")[0];
var time = document.getElementsByClassName("time")[0];
var volume = document.getElementsByClassName("volume")[0];
var volume_back = document.getElementsByClassName("volume-back")[0];
var volume_inner = document.getElementsByClassName("volume-inner")[0];
var volume_size = document.getElementsByClassName("volume-size")[0];
var volume_circular = document.getElementsByClassName("volume-circular")[0];


var n=0;
var currIndex = 0;
var playList = songList;
var playIndex=0;
jindutiao.style.width=0+"px";
getTime();
var timer=null;


//上一曲
upper.onclick = function(){
	Front();
}
// 下一首
lower.onclick = function(){
	after();
}

//播放按钮   的转换类名实现添加删除类名和播放
stop.onclick = function(){
	if (hasClass(this,"play")){
		clearInterval(timer);
		this.classList.remove("play");
		mu.pause();
	} 
	else{
		this.classList.add("play");
		play();
	}
}
	//判断类名方法
	function hasClass(el,className){
		var nameList = el.className.split(" ");
		for(var i = 0;i < nameList.length;i++){
			if (nameList[i]==className) {
				return true;
			}
		};
		return false;
	}

    

//点击位置播放
jindu_back.onclick=function(e){
	var a = jindu_back.offsetLeft;
	var x_dangqian = e.clientX;
	var x = x_dangqian-a;
	
	var pre = parseInt(x)/parseInt(jindu_back.offsetWidth);
    
    mu.currentTime=mu.duration*pre;    
       
        getTime();
        _setwidth(x);
       play();
       

}

//拖拽
yuan.onmousedown=function(e){
	clearInterval(timer);
	var x = e.clientX;
	var left = jindutiao.offsetWidth;
	document.onmousemove=function(e){
		var mov = e.clientX-x;
		var moveX = mov+left;
		if(moveX<=0){
			moveX=0;
		}
		if(moveX>=494-8){
			moveX=494-8;
		}
		
		_setwidth(moveX);
		getTime();
	
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
	}
}
	document.onmouseup=function(){
		var pre=jindutiao.offsetWidth/jindu_back.offsetWidth;
		mu.currentTime=mu.duration*pre;
		play();
		document.onmousemove=null;
	}


// 打开音量设置
volume.onclick=function(){
	if(n%2==0){
		volume_back.style.display="block"
	}else{
		volume_back.style.display="none"
	}
	n++;
	console.log(n);
}


// 点击调借音量大小
 volume_inner.onclick=function(e){
 	// 点击的位置离窗口顶部的距离
 	var Y=e.clientY;
 	// 元素顶部到父级元素的距离
 	var A = volume_inner.offsetTop;
 	// 父级元素到窗口顶部的距离
 	var B = volume_back.offsetTop;
 	// 元素的宽度
 	var C = volume_inner.offsetHeight;
 	// 元素底部到窗口顶部的距离
 	var Y_bottom = A+B+C;
 	var Y_onclick = Y_bottom-Y;
	var pre = parseInt(Y_onclick)/parseInt(volume_inner.offsetHeight);
    mu.volume=1*pre;    
	_setheight(Y_onclick);	
 }


// 移动调借音量大小
volume_circular.onmousedown=function(e){
	var x = e.clientY;
	var Height = volume_size.offsetHeight;
	document.onmousemove=function(e){
		var mov =(x-e.clientY)+Height;
		if (mov<=0) {
			mov=0;
		}else if (mov>=92) {
			mov=92;
		};
		_setheight(mov);
		var pre=volume_size.offsetHeight/volume_inner.offsetHeight;
		mu.volume=1*pre;
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
	}
}
	document.onmouseup=function(){
		document.onmousemove=null;
	}


	/*****************方法********************/

//进度条
 function play(){
 	mu.play();
 	stop.classList.add("play");
 	clearInterval(timer);
 	timer=setInterval(function(){
 		var prac=mu.currentTime/mu.duration;
 		var width = jindu_back.offsetWidth*prac;
 		_setwidth(width);
 		getTime();
 	},200);
 }

// 设置音乐进度条
 function _setwidth(width){
   	jindutiao.style.width=width+"px";
 	yuan.style.transform = `translate3d(${width}px,0,0)`;
 }

// 设置音量大小高度
function _setheight(height){
	volume_size.style.height=height+"px";
	volume_circular.style.transform = `translate3d(0,-${height}px,0)`;
}


	//时间
 function getTime(){
      time.innerHTML=format(mu.currentTime)+"/"+format(mu.duration)
    }

     function format(interval) {
        interval = interval | 0
        const minute = _pad(interval / 60 | 0)
        const second = _pad(interval % 60)
        return `${minute}:${second}`
      };
	function _pad(num, n = 2) {
        let len = num.toString().length
        while (len < n) {
          num = '0' + num
          len++
        }
        return num
      };

 // 上一首
 function Front(){
 	currIndex--;
 	if(currIndex==-1){
 		currIndex=songList.length-1;
 	}
 	changeMusic(currIndex);
 }

// 下一首
function after(){
	currIndex++;
	if(currIndex==3){
		currIndex=0;
	}
	changeMusic(currIndex);
}

 function changeMusic(index){
      // mu.src= songList[index]+".m4a"
      mu.src= `${playList[index]}.m4a`;
      mu.load();
       getTime();
       play();
    }


}

