/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let maxLength = 0;

  const chars = new Set();

  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (!chars.has(s[right])) {
      chars.add(s[right]);
      right += 1;
      maxLength = Math.max(maxLength, right - left);
    } else {
      chars.delete(s[left]);
      left += 1;
    }
  }

  return maxLength;
};
