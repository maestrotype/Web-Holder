$(function() {

	$(".toggle-mnu").click( function() {
		$(this).toggleClass("cross");
		$("nav").toggleClass("dark");
		$("ul").toggleClass("open");
		// $(".dark").css("width","100%");
	}
		);

	$(window).scroll(function() {

		var st = $(this).scrollTop();

		$("header").css({
			"transform" : "translate(0%, " + st/200 + "%"
		});

		$(".viewport").css({
			"transform" : "translate(0%, " + st/20 + "%"
		});

		$(".start").css({
			"transform" : "translate(0%, " + -st/2 + "%" 
		});
	});

});
