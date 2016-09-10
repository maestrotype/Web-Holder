$(function() {

	$(".toggle-mnu").click( function() {
		$(this).toggleClass("cross");
		$("nav").toggleClass("dark");
		$("ul").toggleClass("open");
		// $(".dark").css("width","100%");
	}
		);

});
