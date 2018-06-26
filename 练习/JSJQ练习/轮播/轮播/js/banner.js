window.onload=function(){
	var bannerbox = document.getElementsByClassName("bannerbox")[0];
	var ulobj = bannerbox.getElementsByTagName('ul')[0];

	var liobj = ulobj.chlidren;

    var temp=setInterval(move,1000);

  	var n=1000;
	var isanimat=false;

 	// for (var i = 0; i < liobj.length; i++) {
		// 	liobj[i].index=i;
		// };

   function move(){
   			
   		if(n>=5000){
   			n=0;
   			ulobj.classList.remove("animate");
   			ulobj.style.marginLeft=-1000+"px";
   		}
   		ulobj.classList.add("animate");
   		ulobj.style.marginLeft=-n+"px";
   		n+=1000;
   // 		setTimeout(function(){
			// 	ulobj.classList.remove("animate");
			// 	ulobj.appendChild(liobj[0]);
			// 	ulobj.style.marginLeft=0;
			// 	isanimat=false;
			// },1000)
   }














}