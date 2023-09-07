let coast = $('#title-coast');
let partner = $('#title-partner');
let date = $('.item-date span');


export function changeText() {
	if(window.outerWidth <= 375) {
		coast.text("У нас самые выгодные и низкие цены");
		partner.text("Мы являемся официальным партнzером DELL");
		date.text("июл")
	} else {
		coast.text("Самые выгодные и низкие цены");
		partner.text("Официальный партнер DELL");
		date.text("июля")
	}
}