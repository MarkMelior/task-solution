// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

const { assert } = require('chai')
const { arrayToBinaryTree } = require('./arrayToBinaryTree')

// * Runtime 66 ms Beats 19.35%
// * Memory 45.3 MB Beats 43.57%
function maxDepth(root) {
	if (root == null) {
		return 0
	}
	const left = maxDepth(root.left)
	const right = maxDepth(root.right)
	return Math.max(left, right) + 1
}

// * Runtime: 59ms Beats 58.99%of
// * Memory: 45.04MB Beats 64.23%of
const maxDepth = root =>
	root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1

// console.log(maxDepth(arrayToBinaryTree([3, 9, 20, null, null, 15, 7]))) // 3
// console.log(maxDepth(arrayToBinaryTree([1, null, 2]))) // 2

describe('maxDepth', () => {
	it('It`s working!', () => {
		assert.equal(
			maxDepth(arrayToBinaryTree([3, 9, 20, null, null, 15, 7])),
			3
		)
		assert.equal(maxDepth(arrayToBinaryTree([1, null, 2])), 2)
	})
})

// * My first work with binary tree. Its don't work XD
// let answer = 0
// let count = 1
// function maxDepth(root) {
//     if (root.length > count) {
//         answer++
//         count *= 2
//         return maxDepth(root)
//     } else {
//         return answer
//     }
// }
