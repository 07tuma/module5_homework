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