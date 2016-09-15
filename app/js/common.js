$(document).ready(function() {

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
	
	//Функция просчета координат элемента

function getCoords(e) {
  // (1)
  var box = e.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  // (2)
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  // (3)
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  // (4)
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return {
    top: top,
    left: left
  };
}		

// -- end
var section = document.getElementById("two");
var top_section = getCoords(section).bottom;


});

