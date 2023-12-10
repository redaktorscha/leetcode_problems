/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);

  const results = [];

  for (let first = 0; first < sorted.length; first += 1) {
    if (sorted[first] === sorted[first - 1]) {
      continue;
    }

    let left = first + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const sum = sorted[first] + sorted[left] + sorted[right];
      if (sum === 0) {
        results.push([sorted[first], sorted[left], sorted[right]]);
        left += 1;

        while (sorted[left] === sorted[left - 1] && left < right) {
          left += 1;
        }
      } else if (sum < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return results;
};
