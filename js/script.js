const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const navigation =document.querySelector('.navigation')
const html = document.querySelector('html');
headerBurger.addEventListener('click', function(){
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	navigation.classList.toggle('active');
	html.classList.toggle('lock');
});

const serviceListItems = document.querySelectorAll('.service__list .service-list-item')
window.addEventListener('scroll', function(){
	serviceListItems.forEach(i => {
		if (onScreen(i)){
			i.classList.add('animate');
		}
	})
});


function onScreen (el) {
	var rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
		rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
		);
}