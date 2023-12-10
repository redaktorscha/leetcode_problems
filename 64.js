/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const matrix = new Array(grid.length);

  for (let i = 0; i < matrix.length; i += 1) {
    matrix[i] = new Array(grid[0].length);
  }

  for (let i = 0; i < matrix[0].length; i += 1) {
    if (i === 0) {
      matrix[0][i] = grid[0][i];
    } else {
      matrix[0][i] = grid[0][i] + matrix[0][i - 1];
    }
  }

  for (let i = 1; i < matrix.length; i += 1) {
    matrix[i][0] = grid[i][0] + matrix[i - 1][0];
  }

  for (let i = 1; i < matrix.length; i += 1) {
    for (let j = 1; j < matrix[i].length; j += 1) {
      matrix[i][j] = Math.min(
        matrix[i][j - 1] + grid[i][j],
        matrix[i - 1][j] + grid[i][j],
      );
    }
  }

  return matrix[matrix.length - 1][matrix[0].length - 1];
};
