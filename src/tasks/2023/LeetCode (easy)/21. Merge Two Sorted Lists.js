// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// TODO
var mergeTwoLists = function (list1, list2) {
	return list1.concat(list2).sort((a, b) => a - b)
}

// ! Error:
// Line 14 in solution.js
//     return list1.concat(list2).sort((a, b) => a - b)
//                  ^
// TypeError: list1.concat is not a function
//     Line 14: Char 18 in solution.js (mergeTwoLists)
//     Line 27: Char 19 in solution.js (Object.<anonymous>)
//     Line 16: Char 8 in runner.js (Object.runner)
//     Line 16: Char 26 in solution.js (Object.<anonymous>)
//     at Module._compile (node:internal/modules/cjs/loader:1101:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47
