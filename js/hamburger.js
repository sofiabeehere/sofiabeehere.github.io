/* 

Portfolio Website by Sofia Bautista ©
Created: December 2016
Last modifed: September 2017

Languages used: HTML5, CSS3, and JS (JQuery)

*/

"use strict";

console.log("Javascript is running!");

$(window).on('load resize', function () {

	var width = window.innerWidth;

	console.log("Width: "+width);


		// Handles mobile navigation animations
		if (width<945) {
			document.getElementById("sidebar").style.display = "none";
			document.getElementById("mobile-sidebar").style.display = "block";
			$(".filter").css({'margin-top':'2em'});
			$(".mobile-nav").hide();
			
			$(".mobile-nav").each (function() {
				$(this).css("height", $(this).height());
			});
			
 			$(".menu-btn").on("touchstart",function(){
				if ( $('#menu-icon').attr('src') == 'img/menu.svg' ) {
					$("#menu-icon").attr("src","img/close.svg");
					$(".mobile-nav").slideDown();
					$('body').css({'overflow':'hidden'});
				} else {
					$("#menu-icon").attr("src","img/menu.svg");
 					$(".mobile-nav").slideUp();
					$('body').css({'overflow':'auto'});
				}
   			 });

		} else {
			document.getElementById("sidebar").style.display = "block";
			document.getElementById("mobile-sidebar").style.display = "none";
			$(".filter").css({'margin-top':'0'});
		}

		// Handles dynamic filtering on home/work page
		if ($(".filter-list").change(function() {

			if ($('#web').is(':checked')) {
				$('.filter-list').css({'visibility':'visible',
								'opacity':'1'});
				$('.filter-button').css({'background-color': '#26231d',
								'color': '#fff'});
				$('label[class="web"]').css({'border-bottom': '1px solid black'});
				$('label:not([class="web"])').css({'border-bottom': ''});
				$('div[class~="tile"]:not([class~="web"])').fadeOut("fast");
				$('div[class~="web"]').fadeIn("slow");
			 	$('.main-content-work .grid-row').css({'width':'70vw'});
			}

			if ($('#ui-ux').is(':checked')) {
				$('.filter-list').css({'visibility':'visible',
								'opacity':'1'});
				$('.filter-button').css({'background-color': '#26231d',
								'color': '#fff'});
				$('label[class="ui-ux"]').css({'border-bottom': '1px solid black'});
				$('label:not([class="ui-ux"])').css({'border-bottom': ''});
				$('div[class~="tile"]:not([class~="ui-ux"])').fadeOut("fast");
				$('div[class~="ui-ux"]').fadeIn("slow")
				$('.main-content-work .grid-row').css({'width':'70vw'});
			}

			if ($('#other').is(':checked')) {
				$('.filter-list').css({'visibility':'visible',
								'opacity':'1'});
				$('.filter-button').css({'background-color': '#26231d',
								'color': '#fff'});
				$('label[class="other"]').css({'border-bottom': '1px solid black'});
				$('label:not([class="other"])').css({'border-bottom': ''});
				$('div[class~="tile"]:not([class~="other"])').fadeOut("fast");
				$('div[class~="other"]').fadeIn("slow");
				$('.main-content-work .grid-row').css({'width':'70vw'});
			}

			if ($('#all').is(':checked')) {
				$('.filter-list').css({'visibility':'',
								'opacity':''});
				$('.filter-button').css({'background-color': '',
								'color': ''});
				$('label[class="all"]').css({'border-bottom': '1px solid black'});
				$('label:not([class="all"])').css({'border-bottom': ''});
				$('div[class~="tile"]').fadeIn("slow");
				$('.main-content-work .grid-row').css({'width':'100%'});
			}

		}));
		
});
