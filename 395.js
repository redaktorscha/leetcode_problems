/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = (s, k) => {
  let maxStringLength = 0;

  const iter = (s, k) => {
    if (s.length === 0) {
      return 0;
    }

    const charsCount = {};

    const splitIdxs = [];

    for (const char of s) {
      charsCount[char] = (charsCount[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i += 1) {
      if (charsCount[s[i]] < k) {
        splitIdxs.push(i);
      }
    }

    if (splitIdxs.length === 0) {
      return s.length;
    }

    splitIdxs.push(s.length);

    let left = 0;

    splitIdxs.forEach((idx) => {
      maxStringLength = Math.max(
        maxStringLength,
        longestSubstring(s.slice(left, idx), k),
      );
      left = idx + 1;
    });
    return maxStringLength;
  };

  return iter(s, k);
};
