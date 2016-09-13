$(document).ready( function() {

	// -- Scroll to id

	$("a.scrolldown").mPageScroll2id();
	// --EndScroll

	// --addText
	$("a#addText").click( function() {
		var text = "<br /><br /> Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.";
		$(".start p").append(text);

		return false;
	});

	// --EndAddText


	$("#title-left").animated("bounceInLeft", "fadeOut");

	$("#title-right").animated("bounceInRight", "fadeOut");

	$("#left-block").animated("bounceInLeft", "fadeOut");

	$("#right-block").animated("bounceInRight", "fadeOut");

	$(".toggle-mnu").click( function() {
		$(this).toggleClass("cross");
		$("nav").toggleClass("dark");
		$("ul").toggleClass("open");
		$(".scrolldown").toggle();
	}
		);
$(document).resize(function() {

	if( $( document ).width() > 700 ) {

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
});