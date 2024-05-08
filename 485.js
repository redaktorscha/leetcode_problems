/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let count = 0;
  let maxCount = 0;

  for (const n of nums) {
    if (n === 1) {
      count += 1;
    } else {
      count = 0;
    }

    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};
