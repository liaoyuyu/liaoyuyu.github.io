var index = 0;//记录当前范围内的小圆点
var total_cir = 1;//判断全选小圆点
var num = 0; //选择了几个商品
var Total_price = 0;//总价


// nav  跳转
// 分类
$(".buttom-li2").click(function(){
	window.location.href = "classification.html";  
});
// 主页
$(".buttom-li1").click(function(){
	window.location.href = "index.html";  
});
// 我的
$(".buttom-li4").click(function(){
	window.location.href = "my.html";  
});


// 点击商品小圆点
$(".bar-con .circular").click(function(){
	// 判断商铺是否被勾选
	if (!total_cir) {
		$(".total-cir").removeClass("circular_img");
		total_cir = 1;
	}
	// 每次点击都初始化
	index = 0;
	// 判断点击的商品是都被勾选
	if ($(this).hasClass("circular_img")) {
		$(this).removeClass("circular_img");
		$(this).parent().siblings(".bar-tit").find(".circular").removeClass("circular_img");
		$(".total-cir").removeClass("circular_img");
		index--;
		num--;
		$(".total-right").find("p").text('结算('+num+')');
		// 取出价格，减入到总价中
		var price = $(this).siblings(".describe").find(".choice").find(".price").find("p").text()
		set_price(price,0);


	}else{
		$(this).addClass("circular_img");
		num++;
		$(".total-right").find("p").text('结算('+num+')');
		// 循环   每次点击小圆点，判断当前收藏商店的总商品，判断有没有类名，有就index加1
		var click_cir = $(this).parent().parent().find(".bar-con").find(".circular").length;
		for (var i = 0; i < click_cir; i++) {
			var a = $(this).parent().parent().find(".bar-con").find(".circular");
			if (a[i].className=="circular circular_img") {
				index++;
			};		
		};
		// index数量到达商品个数的时候，商铺全选勾选
		if (index>=click_cir) {
			$(this).parent().siblings(".bar-tit").find(".circular").addClass("circular_img");
		}
		get_cir();

		var price = $(this).siblings(".describe").find(".choice").find(".price").find("p").text();
		set_price(price,1);
	}
	console.log(num)
})


// 点击商铺小圆点
$(".bar-tit .circular").click(function(){
	// 判断当前index，知道你点击的谁。
	if (!$(this).hasClass("circular_img")) {
		// index重新赋值
		index = $(this).parent().siblings(".bar-con").find(".circular").length;	
		get_price(this,1,index)
        $(this).addClass("circular_img");
		$(this).parent().siblings(".bar-con").find(".circular").addClass("circular_img"); 
 	 	get_cir();
	}else{
		index = $(this).parent().siblings(".bar-con").find(".circular").length;	
		get_price(this,0,index);
		$(this).removeClass("circular_img");
		$(this).parent().siblings(".bar-con").find(".circular").removeClass("circular_img");
		$(".total-cir").removeClass("circular_img");
		index = 0;
	}
	console.log(num)
})


// 点击全选小圆点
$(".total-cir").click(function(){
	if (total_cir) {
		$(".circular").addClass("circular_img");
		total_cir = 0;
		Total_price = 0;
		// console.log($(".price").find("p").text());
		let a = []
		let p = $(".price").find("p");
		num = p.length;
		$(".total-right").find("p").text('结算('+num+')');
		// let a = $(".price").find("p").text();
		for (let i = 0; i < p.length; i++) {
			let len = p[i].innerHTML.length;
			a[i] = p[i].innerHTML;
			set_price(a[i],1);
		};
		
	}else{
		$(".circular").removeClass("circular_img");
		total_cir = 1;
		Total_price = 0;
		num = 0;
		num = 0;
		$(".total-right").find("p").text('结算('+num+')');
		$(".total-left").find("span").text('￥0万');
	}
})




//////////////////// 点击加减 ///////////////////////////////
//点击减
$(".reduce").click(function(){
	// 判断数量是不是1，不是1才继续减
	if ($(this).siblings(".cen").find("span").text()!="1") {
		set_money(this,0);
		
	};
})
// 点击加
$(".plus").click(function(){
	set_money(this,1);
})


////////////////////***********方法**************/////////////////////////
// 判断小圆点是否被选择完了，选完了，就添加全选框的类
function get_cir(){
		var len=0;
		let b = $(".content").find(".circular");
		for (let i = 0; i < b.length; i++) {
			if (b[i].className=="circular circular_img") {
				len++;
			};
		};
		if (len == b.length) {
			$(".total-cir").addClass("circular_img");
		};
}

//如果先选择几个商品，在选择商铺，这样要算出你没勾选的商品的价格
function get_price(that,n,index){
	if (n) {
		//判断 有几个小圆点没点击，取出价格赋值
		for (let i = 0; i < index; i++) {
 	 		let a = $(that).parent().parent().find(".bar-con").find(".circular");
			if (a[i].className=="circular") {
				let price = $(a[i]).siblings(".describe").find(".price").find("p").text()
				set_price(price,1);
				num++;
				// console.log($(a[i]).siblings(".describe").find(".price").find("p").text())
			};
 	 	};
 	 	$(".total-right").find("p").text('结算('+num+')');
	}else{
		//取出商铺有几个商品，取出价格赋值
		for (let i = 0; i < index; i++) {
 	 		let a = $(that).parent().parent().find(".bar-con").find(".circular");
			if (a[i].className=="circular circular_img") {
				num--;
				let price = $(a[i]).siblings(".describe").find(".price").find("p").text()
				set_price(price,0);
				// console.log($(a[i]).siblings(".describe").find(".price").find("p").text())
			};
 	 	};
 	 	$(".total-right").find("p").text('结算('+num+')');
	}
	
}


function set_price(price,i){
	// 取出价格，加入到总价中
	var company = price.substring(price.length-1,)
	price = price.substring(1,price.length-1);
		// 判断单位是万,之后进行计算转换成元
	if (company == "万") {
		price = price*10000;
	}
	if (i) {
		// parseFloat精度误差
		Total_price =(parseFloat(Total_price)*1000000000000 + parseFloat(price)*1000000000000)/1000000000000;
	}else{
		// parseFloat精度误差
		Total_price =(parseFloat(Total_price)*1000000000000 - parseFloat(price)*1000000000000)/1000000000000;
	}
	// 总价赋值
	$(".total-left").find("span").text('￥'+Total_price/10000+'万');
}


// 设置你选择了数量的价格
function set_money(that,m){
	var n = parseInt($(that).siblings(".cen").find("span").text());
	var price = $(that).parent().siblings(".price").find("p").text();
	price = parseFloat(price.substring(1,price.length-1))*10000000000;
	// 先除n，算出一个多少钱
	price = price/n;
	if (!m) {
		$(that).siblings(".cen").find("span").text(n-=1);
	}else{
		$(that).siblings(".cen").find("span").text(n+=1);
	}
	// n加或者减了之后，在乘以单价,得到总价
	price = price*n;
	let company = $(that).parent().siblings(price).find("p").text();
	company = company.substring(company.length-1,);
	if (company == "万") {
		$(that).parent().siblings(price).find("p").text("￥"+(price/10000000000)+"万");
	}else{
		$(that).parent().siblings(price).find("p").text("￥"+(price/10000000000)+"元");
	}
}