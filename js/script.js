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
	});
});


//slider

const sliderLine = document.querySelector('.testimonials__slider-line');
const sliderWidth = document.querySelector('.testimonials__slider .container');
const sliderItems = document.querySelectorAll('.testimonials__item');
const nextBtn = document.querySelectorAll('.testimonials__arrow-row img')[1];
console.log(nextBtn)
const prevBtn = document.querySelectorAll('.testimonials__arrow-row img')[0];
let transformValue;
let count=0;

init();
window.addEventListener('resize', init);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
function nextSlide()	{
	if (count < sliderItems.length-1){
		count++;
		sliderLine.style.transition = 'all 0.7s ease 0s';
	}
	else{
		count=0;
		sliderLine.style.transition = 'all 1.4s ease 0s';
	}
	sliderLine.style.transform = `translate(-${count*transformValue}px,0)`;
}
function prevSlide()	{
	if (count > 0){
		count--;
		sliderLine.style.transition = 'all 0.7s ease 0s';
	}
	else{
		count=sliderItems.length-1;
		sliderLine.style.transition = 'all 1.4s ease 0s';
	}
	sliderLine.style.transform = `translate(-${count*transformValue}px,0)`;
}

//radio
const labelsRadioInputs = document.querySelectorAll('.form__radio');
const labels = document.querySelectorAll('.form__radio-item')
console.log(labels)
labels.forEach((item,index) => item.addEventListener(('click'), function(){
	labelsRadioInputs[index].checked=true;
	labels.forEach(i => i.classList.remove('active'))
	item.classList.add('active');
}));

//footer
const footerTitles = document.querySelectorAll('.footer__item-title');
const footerLists = document.querySelectorAll('.footer__item-list');
footerTitles.forEach((item,index) => item.addEventListener('click',function(){
	console.log('click')
	footerLists.forEach(i => i.classList.remove('active'))
	footerLists[index].classList.add('active');
}));

const aboutLink=document.querySelectorAll('.footer__item-title')[0];
const resourcesLink=document.querySelectorAll('.footer__item-title')[1];
const contactLink=document.querySelectorAll('.footer__item-title')[2];
const legalLink=document.querySelectorAll('.footer__item-title')[3];
aboutLink.addEventListener('click', function(e){
	e.preventDefault();
	footerLists[0].scrollIntoView({
		block:'end',
		behavior:'smooth',
	})
})
resourcesLink.addEventListener('click', function(e){
	e.preventDefault();
	footerLists[1].scrollIntoView({
		block:'end',
		behavior:'smooth',
	})
})
contactLink.addEventListener('click', function(e){
	e.preventDefault();
	footerLists[2].scrollIntoView({
		block:'end',
		behavior:'smooth',
	})
})
legalLink.addEventListener('click', function(e){
	e.preventDefault();
	footerLists[3].scrollIntoView({
		block:'end',
		behavior:'smooth',
	})
})

//page smooth navigation
const mainPage=document.getElementById('mainPage');
const services=document.getElementById('services');
const projects=document.getElementById('projects');
const aboutUs=document.getElementById('aboutUs');
const processing=document.getElementById('process');
const testimonials=document.getElementById('testimonials');
const contacts=document.getElementById('contactUs');
const headerLinks=document.querySelectorAll('.header__link');
let previousBtn;
headerLinks.forEach((item,index) => item.addEventListener('click',function(e){
	e.preventDefault();
	headerBurger.classList.remove('active');
	headerMenu.classList.remove('active');
	navigation.classList.remove('active');
	html.classList.remove('lock');
	switch(index){
		case 0:
		mainPage.scrollIntoView({
			block:'start',
			behavior:'smooth',
		})
		setTimeout(()=>{
			window.scrollBy({
				top: -document.querySelector('.header').clientHeight,
				left: 0,
				behavior : "smooth"
			})
		},1000);
		break;
		case 1:
		services.scrollIntoView({
			block:'start',
			behavior:'smooth',
		})
		setTimeout(()=>{
			window.scrollBy({
				top: -document.querySelector('.header').clientHeight,
				left: 0,
				behavior : "smooth"
			})
		},1000);
		break;
		case 2:
		projects.scrollIntoView({
			block:'start',
			behavior:'smooth',
		})
		setTimeout(()=>{
			window.scrollBy({
				top: -document.querySelector('.header').clientHeight,
				left: 0,
				behavior : "smooth"
			})
		},1000);
		break;
		case 3:
		aboutUs.scrollIntoView({
			block:'start',
			behavior:'smooth',
		})
		setTimeout(()=>{
			window.scrollBy({
				top: -document.querySelector('.header').clientHeight,
				left: 0,
				behavior : "smooth"
			})
		},1000);
		break;
		case 4:
		processing.scrollIntoView({
			block:'start',
			behavior:'smooth',
		})
		setTimeout(()=>{
			window.scrollBy({
				top: -document.querySelector('.header').clientHeight,
				left: 0,
				behavior : "smooth"
			})
		},1000);
		break;
		case 5:
		testimonials.scrollIntoView({
			block:'start',
			behavior:'smooth',
		})
		setTimeout(()=>{
			window.scrollBy({
				top: -document.querySelector('.header').clientHeight,
				left: 0,
				behavior : "smooth"
			})
		},1000);
		break;
		case 6:
		contacts.scrollIntoView({
			block:'start',
			behavior:'smooth',
		})
		setTimeout(()=>{
			window.scrollBy({
				top: -document.querySelector('.header').clientHeight,
				left: 0,
				behavior : "smooth"
			})
		},1000);
		break;
	}
	
}));


function init(){
	transformValue = sliderWidth.clientWidth;
	//sliderLine.style.transition="all 0.05s ease 0s"
	sliderLine.style.transform = `translate(-${count*transformValue}px,0)`;
	//sliderLine.style.transition="all 0.35s ease 0s"
	console.log(sliderWidth.clientWidth);
}
function onScreen (el) { //check if elem is on the screen for animations
	var rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
		rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
		);
}