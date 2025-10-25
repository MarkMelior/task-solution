// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// TODO
var longestCommonPrefix = function (strs) {
	const minLengthEl = Math.min(...strs.map(el => el.length))
	const set = new Set()

	for (let i = 0; i < minLengthEl; i++) {
		strs.reduce((acc, st) => {
			acc + st.charAt(i)
			set.add(st.charAt(i))
		}, '')

		if (set.size > 1) {
			break
		}
	}

	return [...set].join('')
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // Right: Output "fl" Expected "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ! Error: Output "drc" Expected ""
