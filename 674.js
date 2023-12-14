/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = (nums) => {
  let curLen = 1;
  let maxLen = 1;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] < nums[i]) {
      curLen += 1;
      maxLen = Math.max(curLen, maxLen);
    } else {
      curLen = 1;
    }
  }

  return maxLen;
};
