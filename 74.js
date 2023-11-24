/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const midElem = matrix[Math.floor(mid / cols)][Math.floor(mid % cols)];

    if (midElem === target) {
      return true;
    }

    if (midElem < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};
