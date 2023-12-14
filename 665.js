/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = (nums) => {
  let isChanged = false;

  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] <= nums[i + 1]) {
      continue;
    }

    if (isChanged) {
      return false;
    }

    if (nums[i + 1] < nums[i - 1]) {
      nums[i + 1] = nums[i];
    } else {
      nums[i] = nums[i + 1];
    }
    isChanged = true;
  }

  return true;
};
