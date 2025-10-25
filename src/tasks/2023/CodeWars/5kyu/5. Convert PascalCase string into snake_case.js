// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
upper.split('')

function toUnderscore(str) {
	str = str.toString()
	const res = []

	for (let i = 0; i < str.length; i++) {
		if (upper.includes(str[i]) && i !== 0) {
			res.push('_' + str[i])
		} else {
			res.push(str[i])
		}
	}
	return res.join('').toLowerCase()
}
