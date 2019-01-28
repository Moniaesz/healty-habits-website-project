document.addEventListener("DOMContentLoaded", function() {

	const nav = document.querySelector('nav');
	const menu = document.getElementsByClassName('menu')[0];
	const navList = document.getElementsByClassName('nav__list')[0];
	
	function showNav() {
		nav.classList.toggle('open');
		menu.classList.toggle('open');
	}

	menu.addEventListener('click', function() {
		showNav();
	});

	navList.addEventListener('click', function(event) {
		if(event.target.tagName.toLowerCase() === 'a' || 'button') {
			showNav();
		}
	});
});