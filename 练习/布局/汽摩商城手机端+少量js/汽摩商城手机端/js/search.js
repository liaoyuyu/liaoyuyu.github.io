window.onload=function(){

var top_height = $(".history").offset().top; 
var button_height = $(".buttom").height();
var height = $(document.body).height();
var history_tit = $(".history-tit").height();
// console.log(height)
var history_height=null;


history_height = height-top_height-button_height-history_tit;
// console.log(history_height)
$(".history-con").height(history_height);



// 添加历史搜索


// 这是电脑模拟的回车，手机端回车要重写事件
$(".search").keydown(function(e){
	if(e.keyCode==13){
		var input_val = $(".search").val();
		$(".history-con ul").append('<li><p>'+input_val+'</p></li>');
	}
})


// 清除按钮
$(".delete").on('click',function(e){
	$(".history-con li").remove();
});


}