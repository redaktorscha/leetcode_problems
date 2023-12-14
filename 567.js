/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) {
    return false;
  }

  const maxMatches = 26;
  let matches = 0;

  const alphaArr = new Array(26)
    .fill()
    .map((el, i) => String.fromCharCode('a'.charCodeAt(0) + i));
  const map1 = alphaArr.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});

  const map2 = alphaArr.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});

  for (let i = 0; i < s1.length; i += 1) {
    map1[s1[i]] += 1;
    map2[s2[i]] += 1;
  }

  for (const key in map1) {
    if (map1[key] === map2[key]) {
      matches += 1;
    }
  }

  let left = 0;
  let right = s1.length;

  while (right < s2.length) {
    if (matches === maxMatches) {
      return true;
    }

    map2[s2[right]] += 1;
    if (map1[s2[right]] === map2[s2[right]]) {
      matches += 1;
    } else {
      if (map1[s2[right]] === map2[s2[right]] - 1) {
        matches -= 1;
      }
    }

    right += 1;

    map2[s2[left]] -= 1;
    if (map1[s2[left]] === map2[s2[left]]) {
      matches += 1;
    } else {
      if (map1[s2[left]] === map2[s2[left]] + 1) {
        matches -= 1;
      }
    }
    left += 1;
  }

  return matches === maxMatches;
};
