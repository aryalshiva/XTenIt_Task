function ladderLength(beginWord, endWord, wordList) {

    const wordSet = new Set(wordList);


    if (!wordSet.has(endWord)) {
        return [0, []];
    }

    //initialize BFS ,length and path
    const queue = [
        [beginWord, 1, [beginWord]]
    ];

    // Perform BFS
    while (queue.length > 0) {
        const [currentWord, currentLength, path] = queue.shift();

        // generate all possible outcome of one letter transformation
        for (let i = 0; i < currentWord.length; i++) {
            for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
                const nextWord = currentWord.slice(0, i) + String.fromCharCode(charCode) + currentWord.slice(i + 1);

                //to check if we are at endWord 
                if (nextWord === endWord) {
                    return [currentLength + 1, [...path, endWord]];
                }

                if (wordSet.has(nextWord)) {
                    wordSet.delete(nextWord); // Mark as visited
                    queue.push([nextWord, currentLength + 1, [...path, nextWord]]);
                }
            }
        }
    }
    return [0, []];
}
//demo example
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "cog", "hog", "hit"];
const [length, path] = ladderLength(beginWord, endWord, wordList);
console.log(length);
console.log(path);