/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const result = [];
  if (p.length > s.length) {
    return result;
  }

  const maxMatches = 26;
  let matches = 0;

  const alphaArr = new Array(maxMatches)
    .fill()
    .map((el, i) => String.fromCharCode('a'.charCodeAt(0) + i));

  const sMap = alphaArr.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});

  const pMap = alphaArr.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});

  for (let i = 0; i < p.length; i += 1) {
    sMap[s[i]] += 1;
    pMap[p[i]] += 1;
  }

  for (const key in pMap) {
    if (pMap[key] === sMap[key]) {
      matches += 1;
    }
  }

  let left = 0;

  for (let right = p.length; right < s.length; right += 1) {
    if (matches === maxMatches) {
      result.push(left);
    }

    sMap[s[right]] += 1;
    if (pMap[s[right]] === sMap[s[right]]) {
      matches += 1;
    } else {
      if (pMap[s[right]] === sMap[s[right]] - 1) {
        matches -= 1;
      }
    }

    sMap[s[left]] -= 1;
    if (pMap[s[left]] === sMap[s[left]]) {
      matches += 1;
    } else {
      if (pMap[s[left]] === sMap[s[left]] + 1) {
        matches -= 1;
      }
    }

    left += 1;
  }

  if (matches === maxMatches) {
    result.push(left);
  }

  return result;
};
