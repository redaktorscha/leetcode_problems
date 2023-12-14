/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
  const matrix = [];

  for (let i = 0; i < n; i += 1) {
    matrix[i] = [];
  }

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const dirs = directions.length;
  const limits = [
    [0, n - 1],
    [n - 1, n - 1],
    [n - 1, 0],
    [1, 0],
  ];
  const changes = [
    [1, -1],
    [-1, -1],
    [-1, 1],
    [1, 1],
  ];

  let curDir = 0;

  let curRow = 0;
  let curCol = 0;

  for (let i = 1; i <= n * n; i += 1) {
    matrix[curRow][curCol] = i;

    if (curRow === limits[curDir][0] && curCol === limits[curDir][1]) {
      limits[curDir][0] += changes[curDir][0];
      limits[curDir][1] += changes[curDir][1];
      curDir = (curDir + 1) % dirs;
    }

    curRow += directions[curDir][0];
    curCol += directions[curDir][1];
  }

  return matrix;
};
