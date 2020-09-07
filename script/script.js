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
	
	/*헤더 로고를 누르면 새로고침*/
	$('#header>h1>a').click(function() {
		location.reload();
	});
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
		
	/*페이지1에서 카테고리 메뉴를 누를때 페이지 이동*/
	$('#page1 .category li').eq('0').click(function(){
		m = $('#page2').offset().top;
		$('html,body').stop().animate({scrollTop:m},1000,'easeOutCubic');
		$('.s2 .contents').stop(true).delay(1000).animate({opacity:1});
	});
		$('#page1 .category li').eq('1').click(function(){
		m = $('#page3').offset().top;
		$('html,body').stop().animate({scrollTop:m},1000,'easeOutCubic');
		$('.s2 .contents').stop(true).delay(1000).animate({opacity:0});
		$('.s3 .contents').stop(true).delay(1000).animate({opacity:1});
	});
		$('#page1 .category li').eq('2').click(function(){
		m = $('#page4').offset().top;
		$('html,body').stop().animate({scrollTop:m},1000,'easeOutCubic');
		$('.s3 .contents').stop(true).delay(1000).animate({opacity:0});
		$('.s4 .contents').stop(true).delay(1000).animate({opacity:1});
	});
		
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
	/*페이지3 서브페이지 메뉴 클릭시*/
	$('.page3submenu li').click(function(){
		var d = $(this).index();
		$('.page3submenu li').siblings().find('a').removeClass('on');
		$(this).find('a').addClass('on');
		$('#page3sub #container .menulineup').css({'border-bottom':'1.5px solid rgba(238,238,238,1)'});
		$('#page3sub #container .in').hide();
		$('#page3sub #container .in').eq(d).show();
	});

	/*페이지3 서브페이지  음료 종류 클릭시*/
	$('#page3sub .menulineup .beverage div').eq(0).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/coke.png');
		$('#page3sub .box1 .goods-title').text('코카콜라');
		$('#page3sub .box1 .goods-etitle').text('가장 기본에 충실한 코카콜라 브랜드의 메인 음료 더 많은 지역에서 판매되는 더 많은 패키지에 다양한 카테고리의 저당 및 무설탕 옵션을 포함하여 사람들이 원하는 음료를 더 많이 제공함으로써 종합 음료 회사가되기위한 비즈니스 전략을 발전시키고 있습니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('500ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('224kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('56g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('54g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('30mg');
	});
		$('#page3sub .menulineup .beverage div').eq(1).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/sprite.png');
		$('#page3sub .box1 .goods-title').text('스프라이트');
		$('#page3sub .box1 .goods-etitle').text('전 세계적으로 팔리고 있는 코카콜라 브랜드의 소다 제품 스프라이트는 레몬 라임 향이 나는 청량 음료로 상쾌하고 깔끔한 맛으로 최고의 컷 스루 상쾌함을 선사합니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('500ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('228kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('57g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('57g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('47mg');
	});
		$('#page3sub .menulineup .beverage div').eq(2).click(function(){
		$('#page3sub .box1 div img').attr('src','images/coke/fanta.png');
		$('#page3sub .box1 .goods-title').text('환타');
		$('#page3sub .box1 .goods-etitle').text('코카 콜라 브랜드의 과일맛 탄산음료. 오렌지, 포도, 사과, 파인애플맛 등이 있습니다. 밝고 거품이 많고 인기있는 Fanta는 재미를 더해주는 청량 음료입니다. 1940 년에 소개 된 Fanta는 코카콜라 브랜드에서 두 번째로 오래된 브랜드입니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('355ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('156kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('39g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('39g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('0mg');
	});
		$('#page3sub .menulineup .beverage div').eq(3).click(function(){
		$('#page3sub .box1 div img').attr('src','images/coke/schweppes.png');
		$('#page3sub .box1 .goods-title').text('슈웹스');
		$('#page3sub .box1 .goods-etitle').text('세계최초의 청량음료 토닉 워터는 1783 년에 세계 최초의 청량 음료로 시작되었습니다. 창립자 Jacob Schweppe는 탄산 음료의 새로운 기술에 이끌려 생수를 만드는 자신의 프로세스를 정제하고 특허를 얻었습니다. 230 년 이상 동안 Schweppes는 품질과 우수성을 위해 노력해 왔습니다. ');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('350ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('136kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('34g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('34g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('60mg');
	});
});
