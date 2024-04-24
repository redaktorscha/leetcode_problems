/**
 * @param {number[][]} points
 * @return {boolean}
 */
const solution = (points) => {
  let minValueX = points[0][0];
  let maxValueX = points[0][0];

  const pointSet = new Set();

  for (const coord of points) {
    const [x, y] = coord;

    pointSet.add(`${x}${y}`);

    minValueX = Math.min(minValueX, x);
    maxValueX = Math.max(maxValueX, x);
  }

  const sum = minValueX + maxValueX;

  for (const coord of points) {
    const [x, y] = coord;
    const mirrorCoord = `${sum - x}${y}`;
    if (!pointSet.has(mirrorCoord)) {
      return false;
    }
  }
  return true;
};

// (k + k - x), y
// middleX = (min_x + max_x) / 2
console.log(
  solution([
    [1, 3],
    [3, 6],
    [3, 7],
    [4, 3],
    [4, 4],
    [8, 3],
    [8, 4],
    [9, 6],
    [9, 7],
    [11, 3],
  ]),
);
