$(function(){
	var _wHeight = $(window).height();
	$("#login_wrapper").height(_wHeight);
	$(window).resize(function() {
		_wHeight = $(window).height();
		$("#login_wrapper").height(_wHeight);
	});
	//图片滚动 直接平滑过去 改2022/1/21
	var login_i = 2;
	var max_i = $("#login_wrapper ul#login_bg li").length;
	$("ul.clearfix li#login_item_prev").click(function(){
		if(login_i > max_i){
			login_i = 1;
		}
		$("#login_wrapper ul#login_bg li").eq(login_i-1).show().siblings().hide();
		login_i++
	})
	$("ul.clearfix li#login_item_next").click(function(){
		if(login_i < 1){
			login_i = max_i;
		}
		$("#login_wrapper ul#login_bg li").eq(login_i-1).show().siblings().hide();
		login_i--
	})
})