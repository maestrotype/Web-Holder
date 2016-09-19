$(document).ready(function() {


//  slider
	setInterval(function() {
  $(".slide-2").slideToggle(2000);
  $(".slide-1").slideToggle(2000);
}, 5000);

// --drop-menu
	$(".drop-list").click( function() {

	$(this).children(".sum-list").slideToggle(300);

	});
// --end-drop-menu

	// -- Scroll to id

	$("a.scrolldown").mPageScroll2id();
	// --EndScroll

	// --addText
	$("a#addText").click( function() {
		var text = "<br /><br /> Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.";
		$(".start p").append(text);
		$(this).hide();

		return false;
	});

	// --EndAddText

	
	$("#title-left").animated("bounceInLeft", "fadeOut");

	$("#title-right").animated("bounceInRight", "fadeOut");

	$("#left-block").animated("bounceInLeft", "fadeOut");

	$("#right-block").animated("bounceInRight", "fadeOut");

	// --click-menu

	$(".toggle-mnu").click( function() {
		$(this).toggleClass("cross");
		$("nav").toggleClass("dark");
		$("ul").toggleClass("open");
		$(".scrolldown").toggle();
		if($(window).screen()) {
			$(".side-button").toggle();
		}	
	}
		);

	// --end-click

});

