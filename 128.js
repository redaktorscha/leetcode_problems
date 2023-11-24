/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  let maxLen = 0;
  let curLen = 0;

  const hash = new Set(nums);

  for (const val of hash) {
    if (!hash.has(val - 1)) {
      curLen = 1;
      let j = 1;
      while (hash.has(val + j)) {
        curLen += 1;
        j += 1;
      }
      maxLen = Math.max(curLen, maxLen);
    }
  }
  return maxLen;
};
