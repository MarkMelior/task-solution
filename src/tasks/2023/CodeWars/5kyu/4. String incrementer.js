// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(str) {
	const arr = str
		.split('')
		.map(el => (el == 0 ? 0 : +el || el))
		.reverse()
	const num = []

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			num.unshift(arr[i])
		} else {
			break
		}
	}

	return (
		arr
			.reverse()
			.splice(0, arr.length - num.length)
			.join('') + (+num.join('') + 1).toString().padStart(num.length, '0')
	)
}

console.log(incrementString('foo19bar')) // foo19bar1
console.log(incrementString('foo19bar999')) // foobar1000
console.log(incrementString('foobar000')) // foobar001
console.log(incrementString('foobar00999')) // foobar01000
