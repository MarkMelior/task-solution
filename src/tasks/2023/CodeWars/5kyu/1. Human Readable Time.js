// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
	const h = String(Math.floor(seconds / 3600)).padStart(2, '0')
	const m = String(Math.floor(seconds / 60 - h * 60)).padStart(2, '0')
	const s = String(seconds - m * 60 - h * 3600).padStart(2, '0')

	return `${h}:${m}:${s}`
}
