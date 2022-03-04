/* 
* Задание 1 
*/

let num = +prompt("Введите цифру");

console.log(typeof num);

if (isNaN(num)) {
	console.log("Упс, кажется, вы ошиблись");
} else {
	if (num % 2 === 0) {
		console.log("Число четное");
	}
	else if (num % 2 !== 0) {
		console.log("Нечетное число");
	}
}