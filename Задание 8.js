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