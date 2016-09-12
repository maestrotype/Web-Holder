$(function() {

	$("#title-left").animated("bounceInLeft", "fadeOut");

	$("#title-right").animated("bounceInRight", "fadeOut");

	$("#left-block").animated("bounceInLeft", "fadeOut");

	$("#right-block").animated("bounceInRight", "fadeOut");

	$(".toggle-mnu").click( function() {
		$(this).toggleClass("cross");
		$("nav").toggleClass("dark");
		$("ul").toggleClass("open");
		$(".side-button").toggle();
		// $(".dark").css("width","100%");
	}
		);

	$(window).scroll(function() {

		var st = $(this).scrollTop();
		$(".scrolldown").css("opacity", "0.3");
		$("header").css({
			"transform" : "translate(0%, " + st/200 + "%"
		});

		$(".viewport").css({
			"transform" : "translate(0%, " + st/20 + "%"
		});

		$(".start").css({
			"transform" : "translate(0%, " + -st/4 + "%" 
		});
	});

});
