export function submitForm() {
	const formBlock = $('#form');
	formBlock.on('submit', formSend);

	async function formSend(evt) {
		evt.preventDefault();
	}
}