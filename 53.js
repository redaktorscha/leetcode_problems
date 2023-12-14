/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let curSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    curSum = Math.max(curSum + nums[i], nums[i]);
    maxSum = Math.max(curSum, maxSum);
  }

  return maxSum;
};
