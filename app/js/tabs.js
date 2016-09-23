  $( function() {
    $( "#tabs" ).tabs();

    $("#anhor-1").click( function() {

    	$(".project-left").animated("lightSpeedIn", "fadeOut");
    	$(".project-right").animated("zoomInRigh", "fadeOut");
    	$(".project-center").animated("flipInY", "fadeOut");
    	$(".project-up").animated("bounceInDown", "fadeOut");
    });

    $("#anhor-2").click( function() {

    	$(".project-left").animated("lightSpeedIn", "fadeOut");
    	$(".project-right").animated("zoomInRigh", "fadeOut");
    	$(".project-center").animated("flipInY", "fadeOut");
    	$(".project-up").animated("bounceInDown", "fadeOut");
    	// $(".project-left").addClass("rotate");
    });

    $("#anhor-3").click( function() {

    	$(".project-left").animated("lightSpeedIn", "fadeOut");
    	$(".project-right").animated("zoomInRigh", "fadeOut");
    	$(".project-center").animated("flipInY", "fadeOut");
    	$(".project-up").animated("bounceInDown", "fadeOut");
    });
  } );