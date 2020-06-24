$(function(){
	$(window).resize(function(){
		win_h =$(window).height();
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
				scrollingSpeed:1000,
				//callback						 origin.index값: 현재 페이지, destination.index값 : 목표페이지
			/*	onLeave:function(origin, destination, direction){	//풀페이지가 전환되기 직전
					console.log(origin.index);
					console.log(destination.index);
					if(origin.index==0){
						
					}
					else if(origin.index==1){
						$('.s3 .contents').show().animate({top:"30%"});
					} else if(origin.index==2){
						$('.s3 .contents').hide().css({top:"20%"});
					}	else if(origin.index==3){
						$('.s4 .contents').hide().css({top:"20%"});
					}
					if(destination.index==0){
						$("#page1 .contents").fadeIn().css({top:"37%"});
					} else if(destination.index==1){
					//	$('.s2 .contents').fadeIn().animate({top:"28%"},1500);
					}	else if(destination.index==2){
						
					}	else if(destination.index==3){
						
					}
				},*/
				afterLoad:function(origin, destination, direction){
					if(origin.index==1){
						$('.s2 .contents').hide().css({top:'45%'});
					}else if(origin.index==2){
						$('.s3 .contents').hide().css({top:'28%'});
					}else if(origin.index==3){
						$('.s4 .contents').hide().css({top:'30%'});
					}else if(origin.index==0){
						
					}
					
					if(destination.index==1){
						$('.s2 .contents').show().animate({top:"28%"},900);
					} else if(destination.index==2){
						$('.s3 .contents').fadeIn();
					} else if(destination.index==3){
						$('.s4 .contents').fadeIn(500);
					} else if(destination.index==0){
					
					}
					
				}
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
