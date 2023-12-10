/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  if (nums.length < 2) {
    return false;
  }

  let sum = 0;

  const map = {};

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    const remainder = sum % k;
    if (remainder === 0 && i > 0) {
      return true;
    }
    if (!(remainder in map)) {
      map[remainder] = i;
    } else if (i - map[remainder] >= 2) {
      return true;
    }
  }

  return false;
};
