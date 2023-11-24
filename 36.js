/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const boxes = new Map();
  for (let row = 0; row < board.length; row += 1) {
    const hashRows = new Set();
    const hashCols = new Set();

    for (let col = 0; col < board[row].length; col += 1) {
      if (board[row][col] !== '.') {
        if (hashRows.has(board[row][col])) {
          return false;
        }
        hashRows.add(board[row][col]);
      }
      if (board[col][row] !== '.') {
        if (hashCols.has(board[col][row])) {
          return false;
        }
        hashCols.add(board[col][row]);
      }

      const boxRow = Math.trunc(row / 3);
      const boxCol = Math.trunc(col / 3);
      const boxNum = `${boxRow}${boxCol}`;

      if (board[row][col] !== '.') {
        boxes[boxNum] = boxes[boxNum] || new Set();

        if (boxes[boxNum].has(board[row][col])) {
          return false;
        }
        boxes[boxNum].add(board[row][col]);
      }
    }
  }

  return true;
};
