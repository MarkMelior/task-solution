function sum(n) {
	console.log(n)
	return a => sum(a + n)
}

sum(1)(2)(5)
