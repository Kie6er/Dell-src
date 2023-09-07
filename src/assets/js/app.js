import * as mobileHeader from './modules/mobileHeader.js';
import * as slider from './modules/slider.js';
import * as text from './modules/changeText.js';
import * as form from './modules/form.js';
mobileHeader.mobileHeader();
mobileHeader.showMenu();
slider.initSlider();
text.changeText();
form.submitForm();

$(window).resize(() => {
	mobileHeader.mobileHeader();
	text.changeText();
});
