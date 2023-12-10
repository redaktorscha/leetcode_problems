/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  const result = [];

  let positiveIdx = 0;

  while (nums[positiveIdx] < 0) {
    positiveIdx += 1;
  }

  let negativeIdx = null;

  if (positiveIdx > 0) {
    negativeIdx = positiveIdx - 1;
  }

  if (negativeIdx === null) {
    return nums.map((el) => el ** 2);
  }

  while (positiveIdx < nums.length && negativeIdx >= 0) {
    if (nums[negativeIdx] ** 2 < nums[positiveIdx] ** 2) {
      result.push(nums[negativeIdx] ** 2);
      negativeIdx -= 1;
    } else {
      result.push(nums[positiveIdx] ** 2);
      positiveIdx += 1;
    }
  }

  while (positiveIdx < nums.length) {
    result.push(nums[positiveIdx] ** 2);
    positiveIdx += 1;
  }

  while (negativeIdx >= 0) {
    result.push(nums[negativeIdx] ** 2);
    negativeIdx -= 1;
  }

  return result;
};
