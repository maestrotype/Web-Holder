$(document).ready( function () {

	var flag;
	if( $(this).width() > 800 ) {
   	parallax_run();
   } else parallax_stop();

	$(window).resize(function(){
   if( $(this).width() > 800 ) {

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

		$(".start").css({
			// "transform" : "translate(0%, " + -flag*st/2 + "px" 
			"bottom" : flag*st
		});

		
	});	

		$(window).scroll(function() {

			var st = $(this).scrollTop();

			if(st > $("header").height()) {
			$("header").css({ 
			"bottom" : st - $("header").height()
		});
		}	
			
	});
};
	
	
				

$(window).scroll(function() {
		

		var st = $(this).scrollTop();
		console.log(getCoords(document.querySelector(".wrapper")).bottom);
		console.log(st);
		// console.log($(".wrapper").height() - $("header").height());	
		if(st > (getCoords(document.querySelector(".wrapper")).bottom) - $(".wrapper").height()) {
			 
			$(".wrapper").css({
			"bottom" : 294		
		});
		} else  {
			$("header").css({
				"bottom" : 0		
				});
			$(".wrapper").css({
			"bottom" : 0		
			// "transform" : "translate(0%, " + -flag*st/4 + "px" 
		})
		};


		 if(st < $("#two").height()) {
			$("a.scrolldown").attr("href","#two");
		}

			else if(st > $("#two").height()) {
				$("a.scrolldown").attr("href","#three");

			};
			

			if(st > 2*($("#two").height())) {

			$(".scrolldown").addClass("rotate");
			$("a.scrolldown").attr("href","#one");

		}
		else if(st < 2*($("#two").height())) {
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
  var bottom = box.bottom + scrollTop - clientTop;

  return {
    top: top,
    left: left,
    bottom: bottom
  };
}		

// -- end
var sectionTwo = document.getElementById("two");
var topCoordSectionTwo = getCoords(sectionTwo).top;

var sectionThree = document.getElementById("three");
var topCoordSectionThree = getCoords(sectionThree).top;

var sectionFour = document.getElementById("four");
var topCoordSectionFour = getCoords(sectionFour).top;

// var wrapper = document.getElementById("wrap");
// var cordwrap = getCoords(document.getElementById("wrap")).top;

});