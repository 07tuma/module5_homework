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

/* 
* Задание 3 
*/

function reverseStr(str) {

	return str.split("").reverse().join("");

}

console.log(reverseStr("Hello"));

/* 
* Задание 4
*/

function getRandomIntInclusive(min, max) {
	min = Math.ceil(0);
	max = Math.floor(100);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntInclusive());

/* 
* Задание 5
*/

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.length + " - это количество элементов массива")

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

/* 
* Задание 6
*/

let A = [5, 5, 5, 5, 5]

function testUnique(A) {
	let n = A.length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = i + 1; j < n; j++) { if (A[i] === A[j]) return true; }
	}
	return false;
}

console.log(testUnique(A))

/* 
* Задание 7
*/

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let even = 0,
	uneven = 0,
	zero = 0;

for (let i = 0; i < arr.length; i++) {
	if (typeof (arr[i]) === 'number' && !isNaN(arr[i])) {
		if (arr[i] === 0) {
			zero += 1;
		} else if (arr[i] % 2 === 0) {
			even += 1;
		} else {
			uneven += 1;
		}
	}
}

console.log('Количество четных элементов: ', even);
console.log('Количество нечетных элементов: ', uneven);
console.log('Количество нулей: ', zero);

/* 
* Задание 8
*/

let map = new Map();
map.set('X1', 'Y1');
map.set('X2', 'Y2');
map.set('X3', 'Y3');

for (let name of map.values()) {
	console.log('значение - ' + name)
}

for (let name of map.keys()) {
	console.log('ключ - ' + name)
}