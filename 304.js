/**
 * @param {number[][]} matrix
 */
function NumMatrix(matrix) {
  this.matrix = matrix;
  this.prefixMatrix = new Array(this.matrix.length + 1);

  for (let i = 0; i < this.prefixMatrix.length; i += 1) {
    this.prefixMatrix[i] = new Array(this.matrix[0].length + 1).fill(0);
  }

  for (let i = 1; i < this.prefixMatrix.length; i += 1) {
    for (let j = 1; j < this.prefixMatrix[i].length; j += 1) {
      this.prefixMatrix[i][j] =
        this.prefixMatrix[i][j - 1] +
        this.matrix[i - 1][j - 1] +
        this.prefixMatrix[i - 1][j] -
        this.prefixMatrix[i - 1][j - 1];
    }
  }
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.prefixMatrix[row2 + 1][col2 + 1] -
    this.prefixMatrix[row2 + 1][col1] -
    this.prefixMatrix[row1][col2 + 1] +
    this.prefixMatrix[row1][col1]
  );
};
