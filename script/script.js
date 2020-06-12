$(function(){
	$(window).resize(function(){
		win_h = $(window).height();
		$('.page').css({
			height:win_h,
		});
	}).resize();
	/*풀 페이지*/
	new fullpage("#fullpage",{
				licenseKey:'',
				navigation: true,
				navigationTooltips:['Home','Vision','Business','Who We Are'],
				navigationPosition: 'left',
				anchors: ['first','second','third','fourth'],
				
			});
			
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
	
	/*카테고리 li 가로배치*/
	$(".category li").each(function(a){
		var count = $(this).index();
		$(".category li").eq(a).css({left:count*330});
	});
});
