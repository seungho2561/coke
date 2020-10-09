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
		/*이온음료*/
		$('#page3sub .menulineup .hydration div').eq(0).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/dasani.png');
		$('#page3sub .box1 .goods-title').text('다사니');
		$('#page3sub .box1 .goods-etitle').text('1999 년에 만들어진 DASANI는 미국 최고의 물 브랜드입니다. DASANI는 역삼 투 여과 공정과 독점적 인 미네랄 혼합물을 결합하여 신선하고 깨끗한 맛을 제공합니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('500ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('0kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('0mg');
	});
		$('#page3sub .menulineup .hydration div').eq(1).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/smartwater.png');
		$('#page3sub .box1 .goods-title').text('스마트워터');
		$('#page3sub .box1 .goods-etitle').text('스마트워터는 수분을 공급할뿐만 아니라 맛도 좋습니다. 전해질은 칼륨, 칼슘, 마그네슘과 같은 이온화 된 미네랄이며, 스마트 워터의 독특한 전해질 혼합물은 뚜렷하게 신선하고 바삭하며 순수한 맛을 만듭니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('500ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('0kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('0mg');
	});
			$('#page3sub .menulineup .hydration div').eq(2).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/Powerade.png');
		$('#page3sub .box1 .goods-title').text('파워에이드');
		$('#page3sub .box1 .goods-etitle').text('수분 유지가 우리의 일입니다.  우리는 당신이해야 할 일을 할 수 있도록 우리가해야 할 일을합니다. 파워 에이드는 열심히 일하는 데 연료를 공급하는 전해질 음료로 파워 스루를 통해 최선을 다할 수 있습니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('600ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('24kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('6g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('6g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('127mg');
	});
			$('#page3sub .menulineup .hydration div').eq(3).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/vitaminwater.png');
		$('#page3sub .box1 .goods-title').text('비타민워터');
		$('#page3sub .box1 .goods-etitle').text('다양한 맛의 비타민 워터의 비타민과 전해질로 물 마시는 경험을 향상시키면서 수분을 유지하십시오.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('500ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('92kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('23g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('23g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('0mg');
	});
	/*쥬스*/
			$('#page3sub .menulineup .juice div').eq(0).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/minute-maid.png');
		$('#page3sub .box1 .goods-title').text('미닛메이드');
		$('#page3sub .box1 .goods-etitle').text('오렌지 주스에서 사과 주스, 레모네이드에서 펀치에 이르기까지 100 가지가 넘는 다양한 맛과 품종으로 최고 품질의 주스를 ​​얻을 수 있도록 가장 신선한 재료를 사용합니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('180ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('80kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('20g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('19g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('14mg');
	});
			$('#page3sub .menulineup .juice div').eq(1).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/innocent.png');
		$('#page3sub .box1 .goods-title').text('이노센트');
		$('#page3sub .box1 .goods-etitle').text('우리 모두는 우리에게 나쁘다는 것을 알고있는 죄책감의 기쁨을 가지고 있지만 어쨌든 우리는 즐깁니다. innocent는 두 세계의 장점을 결합하여 죄책감의 즐거움을 느끼게하고 건강에 좋은 천연 음료를 제공합니다. 스무디, 코코넛 워터, 주스 및 어린이 음료에서 innocent는 모두에게 무언가를 제공합니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('360ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('204kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('41g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('2g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('0mg');
	});
			$('#page3sub .menulineup .juice div').eq(2).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/SimplyOrange.png');
		$('#page3sub .box1 .goods-title').text('심플리 - Orange');
		$('#page3sub .box1 .goods-etitle').text('Simply는 맛있는 과일로 시작하여 상쾌하고 맛있는 쥬스, 스무디, 주스 음료 및 가벼운 음료로 끝납니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('500ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('224kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('56g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('54g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('30mg');
	});
			$('#page3sub .menulineup .juice div').eq(3).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/Fairlife.png');
		$('#page3sub .box1 .goods-title').text('페어라이프');
		$('#page3sub .box1 .goods-etitle').text('페어 라이프 회사가 2012 년에 출범 한 이래, 우리는 소비자에게 영양을 공급하고 그들의 현대적인 라이프 스타일에 맞는 훌륭한 시음 제품을 만들기 위해 최선을 다하고 있습니다. 우리는 우유의 자연적인 건강상의 이점을 믿으며 강력한 영양 프로필을 가진 맛있는 유제품을 생산하기 위해 노력합니다. 그들은 단백질과 칼슘과 같은 우유에서 자연적으로 발견되는 장점을 농축하고 약간의 유당을 제거하는 저온 여과 시스템을 사용하여 만들어집니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('237ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('150kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('6g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('6g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('13g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('8g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('5g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('120mg');
	});
			/*커피*/
			$('#page3sub .menulineup .coffee div').eq(0).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/georgiacoffee.png');
		$('#page3sub .box1 .goods-title').text('조지아 커피');
		$('#page3sub .box1 .goods-etitle').text('일본을 대표하는 커피 브랜드 인 Georgia Coffee는 1975 년부터 고품질의 캔 커피를 제공해 왔습니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('240ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('94kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('21g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('18g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('1g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0.7g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0.5g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('58mg');
	});
		
			$('#page3sub .menulineup .coffee div').eq(1).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/costacoffee.png');
		$('#page3sub .box1 .goods-title').text('코스타 커피');
		$('#page3sub .box1 .goods-etitle').text('45 년 전 두 명의 형제와 단 하나의 꿈으로 시작되었습니다. 그 이후로 많은 변화가 있었지만 훌륭한 시음 커피를 제공하기위한 우리의 가치와 헌신은 변하지 않았습니다. 그것은 우리의 DNA에 있습니다. 이제 영국에서 가장 좋아하는 커피 숍으로 시작된 것이 이제 전 세계에서 이용 가능하며, 전 세계 커피 애호가들에게 현지 카페의 관리와 품질을 제공합니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('240ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('116kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('17g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('17g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('3g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('3g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('2g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('0mg');
	});
				/*tea*/
			$('#page3sub .menulineup .tea div').eq(0).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/Fuze.png');
		$('#page3sub .box1 .goods-title').text('퓨즈티');
		$('#page3sub .box1 .goods-etitle').text('퓨즈티는 독특한 맛 경험을 위해 주스와 차 추출물의 맛있는 혼합을 제공합니다. 우리의 양질의 차 추출물은 지역 사회의 경제 발전을 돕기 위해 독립적으로 인증 된 특별히 선별 된 농장에서 나옵니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('240ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('76kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('19g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('19g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('30mg');
	});
			$('#page3sub .menulineup .tea div').eq(1).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/Honest.png');
		$('#page3sub .box1 .goods-title').text('어니스트');
		$('#page3sub .box1 .goods-etitle').text('어니스트는 가능할 때마다 공정 무역 재료로 만든 맛있고 저당 또는 무설탕 유기농 음료를 만들기 위해 노력합니다. 모든 제품은 유기농이며 모든 찻잎 품종과 사탕 수수 설탕은 공정 거래 인증을 받았습니다. 정직한 음료를 구입하기 위해 상대적으로 적은 선택을하는 것만으로도 자신의 삶, 가족 및 전 세계 다른 사람들의 복지에 지속적이고 긍정적 인 영향을 미칠 수있는 기회를 갖게됩니다.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('240ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('70kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('18g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('18g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('10mg');
	});
		$('#page3sub .menulineup .tea div').eq(2).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/GoldPeak.png');
		$('#page3sub .box1 .goods-title').text('골드피크');
		$('#page3sub .box1 .goods-etitle').text('골드피크는 집에서 얼마나 멀리 떨어져 있든 상관없이 모든 한 모금에서 집에서 만든 맛을 제공합니다. 우리는 집이 장소 그 이상이라고 믿습니다. 테이크 아웃 병에 담긴 맛있는 차, 참여 레스토랑에서 갓 내린 상쾌한 차 한잔, 갓 내린 커피의 따끈 따끈한 컵 등 어디에서나 가져야 할 편안한 느낌입니다. .');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('470ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('154kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('38g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('38g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('30mg');
	});
		$('#page3sub .menulineup .tea div').eq(3).click(function(){
		$('#page3sub .box1 div:nth-child(3) img').attr('src','images/coke/PeaceTea.png');
		$('#page3sub .box1 .goods-title').text('피스티');
		$('#page3sub .box1 .goods-etitle').text('재미를 선택하십시오. 친절을 선택하십시오. 기쁨을 선택하십시오. 좋은 느낌을 선택하십시오. 피스 티를 선택하십시오.');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(1) .cell1').text('500ml');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(2) .cell1').text('150kcal');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(3) .cell1').text('36g');
		$('#page3sub .box1 .goods-text1 .infocell:nth-child(4) .cell1').text('36g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(1) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(2) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(3) .cell1').text('0g');
		$('#page3sub .box1 .goods-text2 .infocell:nth-child(4) .cell1').text('70mg');
	});
});
