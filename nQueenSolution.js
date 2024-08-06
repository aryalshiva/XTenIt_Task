function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isValid(row, col) {
        // Check the column if it has already Queen
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }

        // Check the major diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        // Check the minor diagonal
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }

    function backtrack(row) {
        if (row === n) {
            const solution = board.map(row => row.join(''));
            solutions.push(solution);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }
    backtrack(0);
    return solutions;
}
//demo for the 4*4 block 
const n = 4;
console.log(solveNQueens(n));