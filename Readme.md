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

