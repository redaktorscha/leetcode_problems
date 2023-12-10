/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k += 1;
    }
  }

  return k;
};
