/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  // v1
  // const prefixes = [];
  // const suffixes = [];
  // prefixes[0] = 1;
  // suffixes[0] = 1;
  // for (let i = 0; i < nums.length; i += 1) {
  //   prefixes[i + 1] = prefixes[i] * nums[i];
  //   suffixes[i + 1] = suffixes[i] * nums[nums.length - 1 - i];
  // }
  // console.log(prefixes);
  // console.log(suffixes);
  // const result = new Array(nums.length).fill(null);
  // for (let i = 0; i < result.length; i += 1) {
  //   result[i] = prefixes[i] * suffixes[suffixes.length - 2 - i];
  // }
  // console.log(result);
  // return result;

  // v2
  const result = [];

  let prefix = 1;
  let suffix = 1;

  for (let i = 0; i < nums.length; i += 1) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
