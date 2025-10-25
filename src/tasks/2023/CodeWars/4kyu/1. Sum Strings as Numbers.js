// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

function sumStrings(a, b) {
	const arrA = a
		.split('')
		.map(el => +el)
		.reverse()
	const arrB = b
		.split('')
		.map(el => +el)
		.reverse()

	let res = new Map()

	for (let i = 0; i < Math.max(arrA.length, arrB.length); i++) {
		// ! Dont work
		// if (arrA[i] + arrB[i] > 9) {
		// 	arrA[i + 1] += 1
		// 	res.set(i, arrA[i] + arrB[i] - 10)
		// } else {
		// 	if (!arrA[i]) {
		// 		arrA[i] = ''
		// 	}
		// 	if (!arrB[i]) {
		// 		arrB[i] = ''
		// 	}
		// 	res.set(i, arrA[i] + arrB[i])
		// }

		const sum = (arrA[i] || 0) + (arrB[i] || 0) + (res.get(i) || 0)

		if (sum > 9) {
			res.set(i, sum - 10)
			res.set(i + 1, 1)
		} else {
			res.set(i, sum)
		}
	}

	if (res.get(res.size - 1) === 0) {
		res.delete(res.size - 1)
	}

	return [...res.values()].reverse().join('')
}

// * or just do it like this
// function sumStrings(a, b) {
// 	return (BigInt(a) + BigInt(b)).toString()
// }

console.log(sumStrings('123', '456')) // 579
console.log(sumStrings('123', '458')) // 581
console.log(sumStrings('8797', '45')) // 8842
console.log(sumStrings('800', '9567')) // 10367
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')) // 712577413488402631964821329
console.log(sumStrings('00103', '08567')) // 8670
