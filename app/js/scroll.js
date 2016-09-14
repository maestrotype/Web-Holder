$(document).ready( function () {

	var flag;
	if( $(this).width() > 700 ) {
   	parallax_run();
   } else parallax_stop();

	$(window).resize(function(){
   if( $(this).width() > 700 ) {

   	parallax_run();
   } else parallax_stop();
});
	




	function parallax_run() {

		flag = 1;
		parallax(flag);
		return true;
	};

	function parallax_stop() {
		flag = 0;
		parallax(flag);
		return false;
						};



	function parallax(flag) {
	
		$(window).scroll(function() {

			var st = $(this).scrollTop();

			$("header").css({
			"transform" : "translate(0%, " + flag*st/200 + "%"
		});

		$(".viewport").css({
			"transform" : "translate(0%, " + flag*st/20 + "%"
		});


		$(".start").css({
			"transform" : "translate(0%, " + -flag*st/4 + "%" 
		});


		// $(".inner-footer").css({
		// 	"transform" : "translate(0%, " + flag*st/32 + "%" 
		// });
	});	
};

$(window).scroll(function() {

		var st = $(this).scrollTop();

		if(st > 1280) {
			// $("#three").css("bottom", "294px");
			$("#three").css({

			"transform" : "translate(0%, " + -flag*st/50 + "%" 
		});

		};


		 if(st < 780) {
			$("a.scrolldown").attr("href","#two");
		}

			else if(st > 780) {
				$("a.scrolldown").attr("href","#three");

			};
			

			if(st > 1580) {

			$(".scrolldown").addClass("rotate");
			$("a.scrolldown").attr("href","#one");

		}
		else if(st < 1580) {
			$(".scrolldown").removeClass("rotate");
		};
		
	});

});