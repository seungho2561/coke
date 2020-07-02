$(function(){
	/*윈도우 사이즈에 맞게 페이지 크기 조절*/
	$(window).resize(function(){
		win_h =$(window).height();
		win_w =$(window).width();
		$('.section').css({
			height:win_h,
			width:win_w
		});
	}).resize();
	/*새로고침하면 맨위로*/
	$('html,body').stop().animate({scrollTop:'0',scrollLeft:'0'},500);
	/*키보드 방향키 막기*/
	window.addEventListener("keydown",function(e){
		if([32,37,38,39,40].indexOf(e.keyCode) > -1){
			e.preventDefault();
		}
	},false);
	
	/*페이지1에서 마우스 휠*/
	$('#page1').mousewheel(function(e,delta){
				e.preventDefault();
					if(delta < 0){
						m = $('#page2').offset().top;
						$('html,body').stop().animate({scrollTop:m},1000,'easeOutCubic');
						$('.s2 .contents').stop(true).delay(1000).animate({opacity:1});
					} 
	});
	/*페이지2에서 마우스 휠*/
	$('#page2').mousewheel(function(e,delta){
				e.preventDefault();
					if(delta > 0){
						m = $('#page1').offset().top;
						$('html,body').stop().animate({scrollTop:m},1000,'easeOutCubic');
						$('.s2 .contents').stop(true).delay(1000).animate({opacity:0});
					}else if(delta < 0){
						m = $('#page3').offset().top;
						$('html,body').stop().animate({scrollTop:m},1000,'easeOutCubic');
						$('.s2 .contents').stop(true).delay(1000).animate({opacity:0});
						$('.s3 .contents').stop(true).delay(1000).animate({opacity:1});
					}
	});
	/*페이지3에서 마우스 휠*/
	$('#page3').mousewheel(function(e,delta){
				e.preventDefault();
					if(delta > 0){
						m = $('#page2').offset().top;
						$('html,body').stop().animate({scrollTop:m},1000,'easeOutCubic');
						$('.s2 .contents').stop(true).delay(1000).animate({opacity:1});
						$('.s3 .contents').stop(true).delay(1000).animate({opacity:0});
					}else if(delta < 0){
						m = $('#page4').offset().top;
						$('html,body').stop().animate({scrollTop:m},1000,'easeOutCubic');
						$('.s3 .contents').stop(true).delay(1000).animate({opacity:0});
						$('.s4 .contents').stop(true).delay(1000).animate({opacity:1});
					}
	});
	/*페이지4에서 마우스 휠*/
	$('#page4').mousewheel(function(e,delta){
				e.preventDefault();
					if(delta > 0){
						m = $('#page3').offset().top;
						$('html,body').stop().animate({scrollTop:m},1000,'easeOutCubic');
						$('.s3 .contents').stop(true).delay(1000).animate({opacity:1});
						$('.s4 .contents').stop(true).delay(1000).animate({opacity:0});
					}
	});
	/*페이지3에서 서브페이지로*/
	$('.page3button').click(function(e){
		e.preventDefault();
		$('#header').hide();
		m = $('#page3sub').offset().left;
		$('html,body').stop().animate({scrollLeft:m},800,'easeOutCubic');
	});
		/*서브페이지3에서 페이지3으로*/
	$('#page3sub .page3button').click(function(e){
		e.preventDefault();
		$('header').show();
		m= $('#page3').offset().left;
		$('html,body').stop().animate({scrollLeft:m},800,'easeOutCubic');
	});
		/*페이지1 액션중일땐 휠 안되게*/
		$('.leftwrap,.rightwrap,.inner,#page3sub').on('scroll touchmove mousewheel', function(e){
			e.preventDefault();
		});
		/*페이지1액션*/
	$('.wrap .leftwrap').delay(2500).animate({left:'-960px'},1000);
	$('.wrap .rightwrap').delay(2500).animate({left:'1920px'},1000);
	$("#page1 .contents").find("p,.textlogo").delay(3000).animate({opacity:"1",top:"+=50px"},500);
		$("#page1 .contents .category li:first").delay(3500).animate({opacity:"1",top:"+=50px"},300);
		$("#page1 .contents .category li:nth-child(2)").delay(4000).animate({opacity:"1",top:"+=50px"},300);
		$("#page1 .contents .category li:nth-child(3)").delay(4500).animate({opacity:"1",top:"+=50px"},300);
		$('#page1 .line').delay(4700).animate({opacity:'1',width:'100%'},1500);
		
		
	/*페이지2 액션*/
	$('#page2 .page2button').click(function(){
		if($('iframe').hasClass('leave')){
			console.log('1');
			$('iframe').removeClass('leave');
			$('#page2 .contents').fadeIn(1000);
			$('.visionlist>div').hide();
		}
	});
	/*카테고리 마우스오버*/
	$('.category li').hover(function() {
		$(this).find('span.en').stop().hide();
		$(this).find('span.ko').stop().fadeIn('1000');
	}, function(){
		$(this).find('span.ko').stop().hide();
		$(this).find('span.en').stop().fadeIn('1000');
	});
	
	/*메뉴 열기버튼*/
	$("#gnb img").click(function(){
		$(".gnb").animate({left:"0px"},200);
		$(".dim").addClass("on").on('scroll touchmove mousewheel', function(e){
			e.preventDefault();
		});
	});
	
	/*메뉴 닫기버튼*/
	$(".gnb .close").click(function(){
		$(".gnb").animate({left:-900},200);
		$(".dim").removeClass("on").off('scroll touchmove mousewheel');
		
	});
	
	/*카테고리 li 가로배치*/
	$(".category li").each(function(a){
		var count = $(this).index();
		$(".category li").eq(a).css({left:count*335});
	});

	/*페이지2 버튼*/
	$('.page2button').click(function(){
		$('.vision').toggleClass('on');
		$('.page2button').toggleClass('on');
	});
	
	/*페이지2 버튼 li리스트*/
	$('.vision li').hover(function() {
		$(this).find('div').stop().animate({width:'0'},500);
	}, function(){
		$(this).find('div').stop().animate({width:'100%'},500);
	});	
	/*페이지2 버튼 리스트 클릭시*/
	$('.vision li').click(function(){
		$('iframe').addClass('leave');
		$('#page2 .contents').fadeOut();
		$('.visionlist>div').siblings($(this).index()).hide();
		$('.visionlist>div').eq($(this).index()).show();
		
	});
	
	/*페이지3 자세히보기 마우스 오버*/
	$('.brand').hover(function() {
		$(this).find('span').stop().fadeOut(300);
		$(this).find('.ehe').stop().delay(300).fadeIn(300);
	}, function(){
		$(this).find('.ehe').stop().fadeOut(300);
		$(this).find('span:first').stop().delay(300).fadeIn(300);
	});

	/*페이지3 위치 조정*/
	$('#page3sub').offset({top:win_h*2,left:win_w});
	
	/*페이지3 서브페이지 메뉴 펼치기*/
	$(".page3submenu li").each(function(d){
		var count = $(this).index();
		$(".page3submenu li").eq(d).css({left:count*240});
	});
	

});
