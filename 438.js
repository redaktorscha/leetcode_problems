/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  // v1
  //   if (p.length > s.length) {
  //     return [];
  // }

  // const sMap = {};
  // const pMap = {}
  // let matches = 0;
  // const result = [];
  // let max = 0;

  // for (let i = 0; i < p.length; i += 1) {
  //     sMap[s[i]] = (sMap[s[i]] || 0) + 1;
  //     pMap[p[i]] = (pMap[p[i]] || 0) + 1;
  // }

  // for (const key in pMap) {
  //     if (key in sMap && sMap[key] === pMap[key]) {
  //         matches += 1;
  //     }
  //     max += 1;
  // }

  // let left = 0;
  // for (let right = p.length; right < s.length; right += 1) {
  //     if (matches === max) {
  //         result.push(left);
  //     }

  //     sMap[s[right]] = (sMap[s[right]] || 0) + 1;
  //     if (s[right] in pMap && pMap[s[right]] === sMap[s[right]]) {
  //         matches += 1;
  //     } else if (s[right] in pMap && sMap[s[right]] === pMap[s[right]] + 1) {
  //         matches -= 1;
  //     }

  //     sMap[s[left]] -= 1;
  //     if (s[left] in pMap && pMap[s[left]] === sMap[s[left]]) {
  //         matches += 1;
  //     } else if (s[left] in pMap && sMap[s[left]] === pMap[s[left]] - 1) {
  //         matches -= 1;
  //     }
  //     left += 1;
  // }

  // if (matches === max) {
  //     result.push(left);
  // }
  // return result;

  if (p.length > s.length) {
    return [];
  }

  const result = [];
  let matches = 0;
  const sArr = new Array(26).fill(0);
  const pArr = new Array(26).fill(0);

  for (let i = 0; i < p.length; i += 1) {
    const sIndex = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    const pIndex = p[i].charCodeAt(0) - 'a'.charCodeAt(0);
    sArr[sIndex] += 1;
    pArr[pIndex] += 1;
  }

  for (let i = 0; i < sArr.length; i += 1) {
    if (sArr[i] === pArr[i]) {
      matches += 1;
    }
  }

  let left = 0;

  for (let right = p.length; right < s.length; right += 1) {
    if (matches === 26) {
      result.push(left);
    }
    const rightIndex = s[right].charCodeAt(0) - 'a'.charCodeAt(0);
    sArr[rightIndex] += 1;
    if (sArr[rightIndex] === pArr[rightIndex]) {
      matches += 1;
    } else if (sArr[rightIndex] === pArr[rightIndex] + 1) {
      matches -= 1;
    }

    const leftIndex = s[left].charCodeAt(0) - 'a'.charCodeAt(0);
    sArr[leftIndex] -= 1;
    if (sArr[leftIndex] === pArr[leftIndex]) {
      matches += 1;
    } else if (sArr[leftIndex] === pArr[leftIndex] - 1) {
      matches -= 1;
    }

    left += 1;
  }

  if (matches === 26) {
    result.push(left);
  }
  return result;
};

findAnagrams('abab', 'ab');
