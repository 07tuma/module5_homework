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