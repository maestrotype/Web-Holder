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
			"transform" : "translate(0%, " + -flag*st/2 + "px" 
		});


		// $(".inner-footer").css({
		// 	"transform" : "translate(0%, " + flag*st/32 + "%" 
		// });
	});	
};

$(window).scroll(function() {
			
		var st = $(this).scrollTop();
		
		if(st > (topCoordSectionTwo + $("#two").height())) {
			// $("#three").css("bottom", "294px");
			 
			console.log(st);
			$("#three").css({
			"bottom" : flag*(st - (topCoordSectionTwo + $("#two").height() - 194))		
			// "transform" : "translate(0%, " + -flag*st/4 + "px" 
		});



		} ;


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
var sectionTwo = document.getElementById("two");
var topCoordSectionTwo = getCoords(sectionTwo).top;

var sectionThree = document.getElementById("three");
var topCoordSectionThree = getCoords(sectionThree).top;

var sectionFour = document.getElementById("four");
var topCoordSectionFour = getCoords(sectionFour).top;



});