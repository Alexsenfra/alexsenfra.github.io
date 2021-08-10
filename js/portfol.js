

const navToogle = document.querySelector(".nav_toogle");
const navUl= document.querySelector(".nav_ul");


navToogle.addEventListener("click", ()=> {
	navUl.classList.toggle("nav_ul-visible");


	if (navUl.classList.contains("nav_ul-visible")) {
		navToogle.setAttribute("aria-label", "Close Menu");
	} else {
		navToogle.setAttribute("aria-label", "Open Menu");

	}
	
});	


let ubicacion_principal = window.pageYOffset;

window.onscroll = function(){

	let desplazamiento_actual = window.pageYOffset;
 
	if (ubicacion_principal >= desplazamiento_actual){

		document.getElementById("nav").style.top = "0";

	} else {

		document.getElementById("nav").style.top = "-100px";
	}


	ubicacion_principal = desplazamiento_actual;

};





