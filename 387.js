/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const charMap = {};

  let minIdx = -1;

  for (let i = 0; i < s.length; i += 1) {
    charMap[s[i]] = charMap[s[i]] || [];
    charMap[s[i]].push(i);
  }

  for (const char in charMap) {
    if (charMap[char].length === 1) {
      if (minIdx === -1) {
        minIdx = charMap[char];
      } else {
        minIdx = Math.min(minIdx, charMap[char]);
      }
    }
  }

  return minIdx;
};
