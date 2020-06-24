$(function(){
	/*메뉴 열기버튼*/
	$("#gnb img").click(function(){
		$(".gnb").animate({left:"0px"},200);
		$(".dim").addClass("on");
	});
	
	/*메뉴 닫기버튼*/
	$(".gnb .close").click(function(){
		$(".gnb").animate({left:-900},200);
		$(".dim").removeClass("on");
	});
		$(".menu li").each(function(a){
		var count = $(this).index();
		$(".menu li").eq(a).css({left:count*240});
	});
});
