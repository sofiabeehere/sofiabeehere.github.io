/* 

Portfolio Website by Sofia Bautista ©
Created: December 2016
Last modifed: N/A

Languages used: HTML5, CSS3, and JS (Zepto.js)

*/

"use strict";

console.log("Javascript is running!");

$(window).on('load resize', function () {

	var width = window.innerWidth;

	console.log("Width: "+width);

		if (width<945) {
			document.getElementById("sidebar").style.display = "none";
			document.getElementById("mobile-sidebar").style.display = "block";
			$(".filter").css({'margin-top':'2em'});
			$(".mobile-nav").hide();
			
			$(".menu-btn").click(function(){
				if ( $('#menu-icon').attr('src') == 'img/menu.svg' ) {
					$("#menu-icon").attr("src","img/close.svg");
					$(".mobile-nav").slideDown();
				} else {
					$("#menu-icon").attr("src","img/menu.svg");
					$(".mobile-nav").slideUp();
				}
   			 });

		} else {
			document.getElementById("sidebar").style.display = "block";
			document.getElementById("mobile-sidebar").style.display = "none";
			$(".filter").css({'margin-top':'0'});
		}
});