/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let k = 0;
  let count = 1;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] !== nums[i - 1]) {
      k += 1;
      nums[k] = nums[i];
      count = 1;
    } else {
      count += 1;
      if (count <= 2) {
        k += 1;
        nums[k] = nums[i];
      }
    }
  }
  return k + 1;
};
