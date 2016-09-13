$(document).ready( function () {

	$(window).on('resize', function() {
 
            if($(window).width()>700) {
 
                $(window).scroll(function() {

		var st = $(this).scrollTop();


		 if(st < 780) {
			$("a.scrolldown").attr("href","#two");
		}

			else if(st > 780) {
				$("a.scrolldown").attr("href","#three");
			};
			

			if(st > 1920) {

			$(".scrolldown").addClass("rotate");
			$("a.scrolldown").attr("href","#one");

		}
		else if(st < 1880) {
			$(".scrolldown").removeClass("rotate");
		};
		
		$("header").css({
			"transform" : "translate(0%, " + st/200 + "%"
		});

		$(".viewport").css({
			"transform" : "translate(0%, " + st/20 + "%"
		});

		$(".start").css({
			"transform" : "translate(0%, " + -st/4 + "%" 
		});

		$(".inner-footer").css({
			"transform" : "translate(0%, " + st/32 + "%" 
		});
	});
 
            }
            
        });
        $(window).resize();
	
	

});