/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  if (t.length > s.length) {
    return '';
  }

  const dictT = t.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const dictS = {};

  let left = 0;
  let right = 0;
  let maxMatches = Object.keys(dictT).length;
  let matches = 0;
  let minLength = s.length;
  let indices = [];

  while (right < s.length) {
    if (s[right] in dictT) {
      dictS[s[right]] = (dictS[s[right]] || 0) + 1;
      if (dictS[s[right]] === dictT[s[right]]) {
        matches += 1;
      }
    }

    while (matches === maxMatches) {
      let curLength = right + 1 - left;

      if (curLength <= minLength) {
        minLength = curLength;
        indices[0] = left;
        indices[1] = right + 1;
      }
      if (s[left] in dictT) {
        dictS[s[left]] -= 1;
        if (dictS[s[left]] < dictT[s[left]]) {
          matches -= 1;
        }
      }
      left += 1;
    }

    right += 1;
  }

  if (indices.length === 0) {
    return '';
  }

  return s.slice(indices[0], indices[1]);
};
