/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  const result = [];
  const stack = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (stack.length === 0 || nums[i] ** 2 <= stack[stack.length - 1]) {
      stack.push(nums[i] ** 2);
    } else {
      while (stack[stack.length - 1] < nums[i] ** 2) {
        const next = stack.pop();
        result.push(next);
      }
      result.push(nums[i] ** 2);
    }
  }

  while (stack.length) {
    result.push(stack.pop());
  }
  return result;
};
