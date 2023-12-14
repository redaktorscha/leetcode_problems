/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (needle.length > haystack.length) {
    console.log('-1');
    return -1;
  }
  let i = 0;
  let j = 0;

  let curLen = 0;
  let maxLen = needle.length;
  let index = -1;

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      if (index === -1) {
        index = i;
      }

      curLen += 1;

      if (curLen === maxLen) {
        return index;
      }

      j += 1;
      i += 1;
    } else {
      if (curLen > 0) {
        curLen = 0;
        j = 0;
        i = index + 1;
        index = -1;
      } else {
        i += 1;
      }
    }
  }
  if (curLen !== maxLen) {
    index = -1;
  }
  return index;
};
