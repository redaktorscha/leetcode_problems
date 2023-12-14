/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let curSum = 0;
  let maxSum = 0;

  for (const n of nums) {
    if (n === 1) {
      curSum += 1;
    } else {
      maxSum = Math.max(maxSum, curSum);
      curSum = 0;
    }
  }

  maxSum = Math.max(maxSum, curSum);

  return maxSum;
};
