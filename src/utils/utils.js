export const isCyrillic = function (text) {
	return /[а-я]/i.test(text);
}
export function getTimeFromMins(mins) {
	let hours = Math.trunc(mins/60);
	let minutes = mins % 60;
	return hours + 'ч ' + minutes + 'м';
};