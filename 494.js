/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = (nums, target) => {
  const dp = {};

  const iter = (index, total) => {
    if (index === nums.length) {
      if (total === target) {
        return 1;
      }
      return 0;
    }

    const key = [index, total];

    if (key in dp) {
      return dp[key];
    }

    dp[key] =
      iter(index + 1, total - nums[index]) +
      iter(index + 1, total + nums[index]);
    return dp[key];
  };

  return iter(0, 0);
};
