// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// * Hash Set
// * Runtime 51 ms (Beats 90.22% of users with JavaScript)
// * Memory 43.02 MB (Beats 32.22%of users with JavaScript)
function twoSum(nums, target) {
	const set = new Set()

	for (let i = 0; nums.length > i; i++) {
		let numToFind = target - nums[i]
		if (set.has(numToFind)) {
			return [nums.indexOf(numToFind), i]
		}
		set.add(nums[i])
	}
	return []
}

// * Метод двух указателей
// * Runtime 56 ms
// * Memory 42.4 MB
function twoSum(nums, target) {
	const arr = [...nums]
	arr.sort((a, b) => a - b)
	let il = 0
	let ir = arr.length - 1
	for (let i = 0; arr.length > i; i++) {
		let sum = arr[il] + arr[ir]
		if (sum === target) {
			return [nums.indexOf(arr[il]), nums.lastIndexOf(arr[ir])]
		}
		if (sum > target) {
			ir--
		} else {
			il++
		}
	}
	return []
}
