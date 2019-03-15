
				$(function() {

					var maskLeft = $(".nav .mask").position().left
					$(".nav ul li").hover(function() {
						$(".nav .mask").stop().animate({ "left": $(this).position().left - 3 });

					}, function() {
						$(".nav .mask").stop().animate({ "left": maskLeft });
					})

		
		
				$(".navBgBox li").hover(function() {
					$(this).addClass("hover")
				}, function() {
					$(this).removeClass("hover")
				})
				
				
				
	$(function(){
		showScroll();
		function showScroll(){
			$(window).scroll( function() { 
				var scrollValue=$(window).scrollTop();
				scrollValue > 100 ? $('div[class=scroll]').fadeIn():$('div[class=scroll]').fadeOut();
			} );	
			$('#scroll').click(function(){
				$("html,body").animate({scrollTop:0},200);	
			});	
		}
	})
	
	
    $(".funbox").hover(function(){
        $(this).addClass("boxfun1234")
    },function(){
       
        $(this).removeClass("boxfun1234")
    });


	
	
	
	

				});

