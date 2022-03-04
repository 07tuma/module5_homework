/* 
* Задание 2 
*/

let x = null;

if (typeof x === 'string') {
	console.log("X - строка")
} else {
	if (typeof x === 'number') {
		console.log("X - цифра")
	}
	else if (typeof x === 'boolean') {
		console.log("X - логический тип данных")
	}
	else {
		console.log("Тип данных X не определён")
	}
}