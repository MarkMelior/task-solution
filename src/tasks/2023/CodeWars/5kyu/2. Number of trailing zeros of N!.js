// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

function zeros(n) {
	if (n == 0) {
		return 0
	}

	let fac = 1
	for (let i = 2; i <= n; i++) {
		fac *= i
	}

	let arr = String(fac).split('').reverse()
	let res = 0
	for (let i = 0; arr.length > i; i++) {
		if (arr[i] === '0') {
			res++
		} else {
			break
		}
	}
	return res
}

console.log(zeros(12))
