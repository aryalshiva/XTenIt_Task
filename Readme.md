# Task 1 = Word Ladder

This repository contains a function to find the shortest transformation sequence from a `beginWord` to an `endWord`, where each intermediate word must be in the provided `wordList`. Only one letter can be changed at a time.

## Function: `ladderLength`

### Description

The `ladderLength` function finds the shortest path from `beginWord` to `endWord` using Breadth-First Search (BFS). Each transformation step must result in a valid word from `wordList`.

### Parameters

- **`beginWord`** (string): The starting word.
- **`endWord`** (string): The target word.
- **`wordList`** (array of strings): List of valid words for transformation.

### Returns

- **Array**: `[length, path]`
  - **`length`** (number): Length of the shortest path including the `beginWord` and `endWord`.
  - **`path`** (array of strings): The sequence of words from `beginWord` to `endWord`.

### Example

```javascript
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "cog", "hog", "hit"];

const [length, path] = ladderLength(beginWord, endWord, wordList);
console.log(length); // Output: 5
console.log(path); // Output: ["hit", "hot", "dot", "dog", "cog"]
```

# Task 2 =Trapping Rain Water Calculator

This project includes a function to compute the amount of water that can be trapped between the bars of a histogram after a rain. Each bar has a height, and the trapped water is calculated based on these heights.

## Function: `trap`

### Description

The `trap` function calculates the total amount of water trapped between the bars in a histogram. It uses dynamic programming to determine the maximum heights to the left and right of each bar and then computes the trapped water.

### Parameters

- **`height`** (array of numbers): An array where each element represents the height of a bar in the histogram.

### Returns

- **Number**: The total amount of water trapped between the bars.

### Example Usage

```javascript
const heights = [3, 1, 2, 4, 0, 1, 3, 2];
console.log(trap(heights)); // Output: 6
```

# Task 3 = Regular Expression Matching

This repository contains a function to determine if a given string `s` matches a pattern `p` that can include '.' and '_' as wildcards. The pattern `p` follows regular expression rules where '.' matches any single character, and '_' matches zero or more of the preceding element.

## Function: `isMatch`

### Description

The `isMatch` function uses dynamic programming to determine if the entire string `s` matches the pattern `p`. The pattern can contain the wildcard characters '.' and '\*', and the function handles these to provide a match result.

### Parameters

- **`s`** (string): The input string to be matched.
- **`p`** (string): The pattern string that may include wildcard characters.

### Returns

- **Boolean**: `true` if the string `s` matches the pattern `p`, otherwise `false`.

### Example

```javascript
const s = "aab";
const p = "c*a*b";

console.log(isMatch(s, p)); // Output: true
```

# Task 4 = N-Queens Problem

This repository contains a function to solve the N-Queens problem. The objective is to place `n` queens on an `n x n` chessboard such that no two queens threaten each other. Each queen can attack another queen if they share the same row, column, or diagonal.

## Function: `solveNQueens`

### Description

The `solveNQueens` function finds all distinct solutions to the N-Queens puzzle. Each solution is represented as an array of strings where each string represents a row of the chessboard. Queens are denoted by 'Q' and empty squares by '.'.

### Parameters

- **`n`** (number): The size of the chessboard (i.e., the number of queens to place).

### Returns

- **Array**: An array of solutions. Each solution is an array of strings representing the board configuration.

### Example

```javascript
const n = 4;

console.log(solveNQueens(n));
// Output:
// [
//   [".Q..",   // Solution 1
//    "...Q",
//    "Q...",
//    "..Q."],
//
//   ["..Q.",   // Solution 2
//    "Q...",
//    "...Q",
//    ".Q.."]
// ]
```

# Task 5 = Longest Increasing Subsequence

This repository contains a function to find the length of the longest increasing subsequence in a given array of integers. The longest increasing subsequence is a subsequence where the elements are in strictly increasing order.

## Function: `lengthOfLIS`

### Description

The `lengthOfLIS` function computes the length of the longest increasing subsequence in an array of integers using dynamic programming.

### Parameters

- **`nums`** (array of numbers): An array of integers.

### Returns

- **Number**: The length of the longest increasing subsequence.

### Example

```javascript
const nums = [10, 9, 2, 5, 3, 7, 101, 18];

console.log(lengthOfLIS(nums)); // Output: 4
// Explanation: The longest increasing subsequence is [2, 3, 7, 101] or [2, 5, 7, 101].
```

# Task 6 = Find Median of Two Sorted Arrays

This repository contains a function to find the median of two sorted arrays. The function efficiently computes the median in O(log(min(m, n))) time complexity, where `m` and `n` are the lengths of the two arrays.

## Function: `findMedianSortedArrays`

### Description

The `findMedianSortedArrays` function finds the median of two sorted arrays by performing a binary search on the smaller array. It ensures that the partitions of both arrays are correctly balanced so that the median can be computed accurately.

### Parameters

- **`nums1`** (array of numbers): The first sorted array.
- **`nums2`** (array of numbers): The second sorted array.

### Returns

- **Number**: The median of the two sorted arrays. If the combined length of the arrays is even, the median is the average of the two middle numbers. If odd, it is the middle number.

### Example

```javascript
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 3.5
```

# Task 7 = Palindrome Partitioning

This repository contains a function to partition a given string into all possible lists of substrings where each substring is a palindrome.

## Function: `partition`

### Description

The `partition` function generates all possible ways to split the input string into substrings such that each substring is a palindrome. It uses a backtracking approach to explore all possible partitions of the string.

### Parameters

- **`s`** (string): The input string to be partitioned.

### Returns

- **Array**: An array of arrays where each inner array represents a possible partition of the input string with palindromic substrings.

### Example

```javascript
const s = "aab";
const result = partition(s);
console.log(result); // Output: [["a", "a", "b"], ["aa", "b"]]
```

# Task 8 = Find Kth Largest Element in an Array

This repository contains a function to find the Kth largest element in an unsorted array. It provides two implementations: a simple sorting-based method and an optimized QuickSelect algorithm.

## Function: `findKthLargest`

### Description

The `findKthLargest` function finds the Kth largest element in an unsorted array. It uses two methods: a straightforward sorting approach with a time complexity of O(n log n) and an optimized QuickSelect algorithm with an average time complexity of O(n).

### Parameters

- **`nums`** (array of numbers): The unsorted array of numbers.
- **`k`** (number): The rank of the largest element to find.

### Returns

- **Number**: The Kth largest element in the array.

### Example

```javascript
const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k)); // Output: 5
```

# Task 9 = Merge K Sorted Linked Lists

This repository contains functions to merge multiple sorted linked lists into a single sorted linked list. The solution uses a divide-and-conquer approach to efficiently merge the lists.

## Classes and Functions

### Class: `ListNode`

A class representing a node in a singly linked list.

#### Constructor

- **`val`** (number): The value of the node.
- **`next`** (ListNode or null): The next node in the list.

### Function: `mergeTwoLists`

Merges two sorted linked lists into a single sorted linked list.

#### Parameters

- **`l1`** (ListNode): The head of the first sorted linked list.
- **`l2`** (ListNode): The head of the second sorted linked list.

#### Returns

- **ListNode**: The head of the merged sorted linked list.

### Function: `mergeKLists`

Merges k sorted linked lists into a single sorted linked list using a divide-and-conquer approach.

#### Parameters

- **`lists`** (array of ListNode): An array of the heads of sorted linked lists.

#### Returns

- **ListNode**: The head of the merged sorted linked list.

### Function: `linkedListToArray`

Converts a linked list into an array of values for easier viewing and testing.

#### Parameters

- **`head`** (ListNode): The head of the linked list.

#### Returns

- **Array**: An array of values from the linked list.

### Example

```javascript
// Create linked lists
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

// Array of linked lists
const lists = [list1, list2, list3];

// Merge all lists
const mergedList = mergeKLists(lists);

// Convert merged list to array and log
console.log(linkedListToArray(mergedList)); // Output: [1, 1, 2, 3, 4, 4, 5, 6]
```

# Task 10 = Alien Dictionary

This repository contains a function to determine the order of characters in an alien language based on a given list of words sorted lexicographically according to the alien language.

## Function: `alienOrder`

### Description

The `alienOrder` function computes the order of characters in an alien language given a list of words that are sorted according to that language. It constructs a directed graph where each character represents a node, and edges represent the order constraints derived from the word list. The function then performs a topological sort to determine the character order.

### Parameters

- **`words`** (array of strings): A list of words sorted lexicographically in the alien language.

### Returns

- **String**: A string representing the order of characters in the alien language. If there is no valid order (i.e., due to cycles in the graph or invalid word orders), the function returns an empty string.

### Example

```javascript
const words = ["wrt", "wrf", "er", "ett", "rftt"];
console.log(alienOrder(words)); // Output: "wertf"
```

## Installation and Setup

1. **Install Node.js**:

   - Download and install Node.js from [nodejs.org](https://nodejs.org/).
   - Follow the installation instructions for your operating system.

2. **Verify Installation**:
   - Open your terminal and run:

bash
node -v
npm -v

- Ensure version numbers are displayed for both node and npm.

## Running the Code

1. **Navigate to Your Project Directory**:

   - Use cd to go to the directory where your JavaScript file is located.

2. **Run the Code**:
   - Execute the code with:

bash
node filename.js

- Replace filename.js with the name of your JavaScript file.

