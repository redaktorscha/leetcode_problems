/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < nums.length) {
    if (nums[i + 1] === nums[i] + 1) {
      i += 1;
    } else {
      if (i !== j) {
        result.push(`${nums[j]}->${nums[i]}`);
      } else {
        result.push(`${nums[i]}`);
      }
      i += 1;
      j = i;
    }
  }
  return result;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
