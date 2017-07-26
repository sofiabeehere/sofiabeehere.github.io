/* 

Portfolio Website by Sofia Bautista ©
Created: December 2016
Last modifed: N/A

Languages used: HTML5, CSS3, and JS (Zepto.js)

*/

"use strict";

console.log("Javascript is running!");

// MODAL BOX FUNCTION

// Get the info modal
var modal = [];

for (var i = 1; i < 7; i++) {
    modal[i] = document.getElementById('modal-info'+i);
}

// Get the card that opens the info modal
var btn = [];

for (var i = 1; i < 7; i++) {
    btn[i] = document.getElementById('trigger-page'+i);
}

function handleElement(i) {
	//  When the user clicks on the card, open the info modal
	btn[i].onclick=function() {
		modal[i].style.display = "block"; 
		document.getElementById("sidebar").style.display = "none";
		document.getElementById('mini-sidebar'+i).style.visibility = "visible";
		document.getElementById('mini-sidebar'+i).style.transition = "visibility 0.5s linear";
	};

	document.getElementById('trigger-sidebar'+i).onclick = function() {
		modal[i].style.display = "none";
		document.getElementById('mini-sidebar'+i).style.visibility = "hidden";
		document.getElementById("sidebar").style.display = "block";
	};


}

for(i = 1; i < btn.length; i++) handleElement(i);

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
// document.getElementById("trigger-sidebar").onclick = function() {
// 	for (i = 1; i < modal.length; i++) {
// 		if (event.target == modal[i]) {
// 		    modal[i].style.display = "none";
// 		    document.getElementById("mini-sidebar").style.display = "none";
// 		    document.getElementById("sidebar").style.display = "block";
// 		}
// 	}
// }

// SIDEBAR COLLAPSE FUNCTION


// btn[i].onclick=function() {
// 	document.getElementById("sidebar").style.display = "none";
// 	document.getElementById("mini-sidebar").style.display = "block";
// }