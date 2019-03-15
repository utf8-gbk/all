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

			});