/***************************************************
==================== JS INDEX ======================
****************************************************

01. Common Js
02. Wow Js******************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// 01. Common Js

	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	$(".has-img").each(function () {
		var imgSrc = $(this).attr("data-menu-img");
		var img = `<img class="mega-menu-img" src="${imgSrc}" alt="img">`;
		$(this).append(img);

	});


	////////////////////////////////////////////////////
	// 02. Wow Js
	new WOW().init();


	function scrollNav() {
		$('.nav a').click(function(){
		  $(".active").removeClass("active");     
		  $(this).addClass("active");
		  
		  $('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 160
		  }, 300);
		  return false;
		});
	  }
	  scrollNav();
	  
})(jQuery);