let nav = $('#nav');
let mobileMenu = $('#mobile-menu');
let mobileMenuHead = $('.mobile-menu');
let desktopMenu = $('#desktop-menu');
let mobileMenuOverlay = $('#mobile-menu-overlay');
let body = $('body');
let burgerBtn = $('#burger-btn');

export function mobileHeader() {
	if (window.outerWidth <= 375) {
		if (!nav.hasClass('mobile')) {
			nav.addClass('mobile').appendTo(mobileMenu);
		}
	} else {
		if (nav.hasClass('mobile')) {
			nav.removeClass('mobile').prependTo(desktopMenu);
		}
	}
}

export function showMenu() {
	burgerBtn.on('click', () => {
		if (mobileMenuHead.hasClass('show')) {
			removeClassMenu();
		} else if (!mobileMenuHead.hasClass('show')) {
			addClassMenu();
		}
	});

	mobileMenuOverlay.on('click', () => {
		removeClassMenu();
	});

	$(window).resize(() => {
		removeClassMenu();
	});
}

function removeClassMenu() {
	burgerBtn.removeClass('show');
	mobileMenuHead.removeClass('show');
	body.removeClass('lock');
}

function addClassMenu() {
	mobileMenuHead.addClass('show');
	body.addClass('lock');
	burgerBtn.addClass('show');
}