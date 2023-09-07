export function initSlider() {
	new Swiper('#intro-slider', {
		direction: 'horizontal',
		autoplay: {
			delay: 2000,
			stopOnLastSlide: false,
			disableOnInteraction: false
		},
		speed: 1500,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-manage__next',
			prevEl: '.slider-manage__prev',
		},
	})
}