function alienOrder(words) {

    const graph = new Map();
    const inDegree = new Map();
    const allChars = new Set();

    // Initialize all characters in the graph
    for (const word of words) {
        for (const char of word) {
            if (!inDegree.has(char)) {
                inDegree.set(char, 0);
                graph.set(char, new Set());
            }
            allChars.add(char);
        }
    }
    // generating graph by comparing words
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        const minLen = Math.min(word1.length, word2.length);

        // Check for invalid cases that is invalid order 
        if (word1.startsWith(word2) && word1.length > word2.length) {
            return "";
        }

        for (let j = 0; j < minLen; j++) {
            if (word1[j] !== word2[j]) {
                if (!graph.get(word1[j]).has(word2[j])) {
                    graph.get(word1[j]).add(word2[j]);
                    inDegree.set(word2[j], inDegree.get(word2[j]) + 1);
                }
                break;
            }
        }
    }

    // implementing DFS to get the topological order that is DAG(Directed Acylic Graph) 
    const visited = new Set();
    const tempStack = new Set();
    const result = [];

    function dfs(node) {
        //Cylic detected
        if (tempStack.has(node)) return false;
        //Already processed
        if (visited.has(node)) return true;

        tempStack.add(node);
        for (const neighbor of graph.get(node)) {
            if (!dfs(neighbor)) return false;
        }
        tempStack.delete(node);
        visited.add(node);
        result.push(node);
        return true;
    }

    for (const char of allChars) {
        if (!visited.has(char)) {
            if (!dfs(char)) {
                return "";
            }
        }
    }
    return result.reverse().join('');
}

// Example usage
const words = ["wrt", "wrf", "er", "ett", "rftt"];
console.log(alienOrder(words));