/**
 * @param {number[]} nums
 * @return {boolean}
 */
const solution = (nums) => {
  if (nums.length === 1) {
    return true;
  }

  let i = 1;

  while (nums[i] >= nums[i - 1] && i < nums.length) {
    i += 1;
  }

  if (i === nums.length) {
    return true;
  }
  i += 1;

  while (nums[i] >= nums[i - 1] && i < nums.length) {
    i += 1;
  }

  if (i === nums.length && nums[i - 1] <= nums[0]) {
    return true;
  }

  return false;
};

console.log(solution([3, 4, 5, 2]));
