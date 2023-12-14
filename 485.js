/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let curSum = 0;
  let maxSum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 1) {
      curSum += 1;
      maxSum = Math.max(curSum, maxSum);
    } else {
      curSum = 0;
    }
  }
  return maxSum;
};
